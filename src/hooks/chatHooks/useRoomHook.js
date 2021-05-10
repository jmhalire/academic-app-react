import { useContext, useEffect, useRef, useState } from "react";
import { API } from "../../configs/config";
import { CourseContext } from "../../context";
import * as IO from "socket.io-client";


export const useStateRoom = () => {

    const [socket, setSocket] = useState();
    const [chat, setChat] = useState(false);
    const otherRef = useRef();
    const chatRef = useRef();

    const { user } = useContext(CourseContext)
    const { id } = user

    useEffect(() => {
        const socketIO = IO(API, { transports: ['websocket'], query: { idUser: id } })
        setSocket(socketIO);
        socketIO.on("connect", () => {
            console.log('WS: Connected');
        })
        socketIO.on("connect_error", (e) => {
            console.log(e);
        });

    }, [id])

    const handleHiddenChat = () => {
        const { current: other } = otherRef;
        const { current: chat } = chatRef;
        other.classList.add('show-members')
        chat.classList.add('hidden-chat')
        setTimeout(() => {
            setChat(false);
        }, 150);
    }

    const handleShowChat = () => {
        setChat(true);
        const { current: other } = otherRef;
        const { current: chat } = chatRef;
        chat.classList.remove('hidden-chat')
        other.classList.remove('show-members')
    }

    return {
        socket,
        otherRef,
        chatRef,
        chat,
        handleHiddenChat,
        handleShowChat,
    }
}