import { useContext, useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import { CourseContext } from "../context";
import { fetchGet } from "../helpers/fetch";
import { chatNotifyReducer, listMessagesReducer } from "../reducer";
import { typesSocket } from "../types/types";

export const useStateOnSocket = () => {

    //const [socket, setSocket] = useState();
    const { user, course, socket } = useContext(CourseContext);
    const { chatId } = course;
    const [typing, setTyping] = useState({ state: false, value: '' });
    const refMessageChat = useRef();
    const [chatNotify, dispatchNotify] = useReducer(chatNotifyReducer, []);
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
    }, [])

    useLayoutEffect(() => {
        handleScroll()
    }, [])

    useEffect(() => {
        let data = {
            typeChat: 'joinSala',
            nameUser: user.name,
            firstNameUser: user.firstName,
            lastNameUser: user.lastName,
            codeCourse: course.code,
            categoryCourse: course.category,
            message: 'unirme al chat'
        }

        socket.emit(typesSocket.clientMessage, data);

        socket.on(typesSocket.serverMessage, (chat) => {
            const { typeChat } = chat;
            switch (typeChat) {
                case typesSocket.conected:
                    dispatchNotify({
                        type: 'add',
                        payload: { id: new Date().getMilliseconds(), notify: chat.message }
                    })
                    break;
                case typesSocket.leave:
                    dispatchNotify({
                        type: 'add',
                        payload: { id: new Date().getMilliseconds(), notify: chat.message }
                    })
                    break;
                case typesSocket.typing:
                    setTyping({
                        state: true,
                        value: chat.message
                    })
                    handleScroll()
                    break;
                case typesSocket.blur:
                    setTyping({
                        ...typing,
                        state: false
                    })
                    handleScroll()
                    break;
                case typesSocket.message:
                    let newMessage = {
                        ...chat,
                        createdAt: new Date(chat.createdAt).toLocaleString()
                    }
                    dispatchMessages({
                        type: 'add',
                        payload: [newMessage]
                    })
                    handleScroll()
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

        return () => {
            let data = {
                typeChat: "leave",
                nameUser: user.name,
                firstNameUser: user.firstName,
                lastNameUser: user.lastName,
                room: `${course.code}${course.category}`
            }
            socket.emit(typesSocket.clientMessage, data);
        };
    }, [])

    const handleScroll = () => {
        setTimeout(() => {
            const { current: element } = refMessageChat;
            if (element) {
                element.scrollTop = element.scrollHeight - element.offsetHeight;
            }
        }, 300);
    }

    const deleteNotify = () => {
        dispatchNotify({
            type: 'remove',
            payload: '0'
        })
    }

    return {
        refMessageChat,
        user,
        typing,
        chatNotify,
        listMessages,
        deleteNotify
    }
}