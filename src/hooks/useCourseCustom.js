import { useEffect, useRef, useState } from "react";
import * as IO from 'socket.io-client';
import { API } from "../configs/config";

export const useStateCourse = (id) => {

    const [chat, setChat] = useState(false);
    const [socket, setSocket] = useState()
    const otherRef = useRef();
    const chatRef = useRef();

    useEffect(() => {
        const socketIO = IO(API, { transports: ['websocket'], query: { idUser: id } })
        setSocket(socketIO);
        socketIO.on("connect", (e) => {
            console.log('WS: Connected', socketIO);
        })

        socketIO.on("connect_error", (e) => {
            console.log(e);
        });
        return () => {
            console.log('disconnect', );
            socketIO.disconnect()
        }
    }, [])

    const handleHiddenChat = () => {
        const { current: other } = otherRef;
        const { current: chat } = chatRef;

        other.classList.remove('other-hidden-chat')
        other.classList.add('other-show-chat')

        chat.classList.add('chat-hidden')
        setTimeout(() => {
            setChat(false);
        }, 150);
    }

    const handleShowChat = () => {
        setChat(true);
        const { current: other } = otherRef;
        other.classList.remove('other-show-chat')
        other.classList.add('other-hidden-chat')
    }

    return {
        socket,
        chat,
        chatRef,
        otherRef,
        handleHiddenChat,
        handleShowChat,
    }
}