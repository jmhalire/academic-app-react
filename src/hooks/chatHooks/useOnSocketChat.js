import { useContext, useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import { CourseContext, SocketContext } from "../../context";
import { fetchGet } from "../../helpers/fetch";
import { listMessagesReducer } from "../../reducer";
import { typesSocket } from "../../types/types";

export const useStateOnSocketChat = () => {

    //const [socket, setSocket] = useState();
    const { user, course } = useContext(CourseContext);
    const { socket } = useContext(SocketContext);
    const { chatId } = course;
    const [typing, setTyping] = useState({ state: false, value: '' });
    const refMessageChat = useRef();
    const [listMessages, dispatchMessages] = useReducer(listMessagesReducer, [])

    /* obtenemos todos los mensajes de esta sala */
    useEffect(() => {
        async function getData() {
            const res = await fetchGet(`/chat/chat-course/${chatId}`);
            dispatchMessages({
                type:'add',
                payload: res
            })
        }
        getData();
    }, [chatId])

    useLayoutEffect(() => {
        handleScroll()
    }, [])

    useEffect(() => {
        socket.on(typesSocket.serverMessage, (chat) => {
            const { typeChat } = chat;
            switch (typeChat) {

                case typesSocket.typing:
                    setTyping({
                        state: true,
                        value: chat.message
                    });
                    handleScroll();
                    break;
                case typesSocket.blur:
                    setTyping({
                        state: false,
                        value: ''
                    });
                    handleScroll();
                    break;
                case typesSocket.message:
                    console.log(chat);
                    let newMessage = {
                        ...chat,
                        createdAt: new Date(chat.createdAt).toLocaleString()
                    }
                    dispatchMessages({
                        type: 'add',
                        payload: [newMessage]
                    });
                    handleScroll();
                    break;
                default:
                    break;
            }
        });

        socket.on('disconnect', () => {
            console.warn('WS: Disconnected!', socket);
            // observer.complete();
        });

        socket.on('authorized', (authorized) => {
            console.log(authorized);
        });

        socket.on('error', (error) => {
            console.log(error);
        });

        socket.on('unauthorized', (unauthorized) => {
            console.log(unauthorized);
        });
    }, [socket])

    const handleScroll = () => {
        setTimeout(() => {
            const { current: element } = refMessageChat;
            if (element) {
                element.scrollTop = element.scrollHeight - element.offsetHeight;
            }
        }, 300);
    }

    return {
        refMessageChat,
        user,
        typing,
        listMessages,
    }
}