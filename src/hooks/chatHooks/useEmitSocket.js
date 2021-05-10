import { useContext, useEffect, useState } from "react";
import { CourseContext, SocketContext } from "../../context";
import { fetchGet } from "../../helpers/fetch";
import { typesSocket } from "../../types/types";

export const useStateEmitSocket = () => {

    const { user, course } = useContext(CourseContext);
    const { socket } = useContext(SocketContext);
    const { chatId } = course;
    const [stateChat, setStateChat] = useState(true)
    const [formMessage, setFormMessage] = useState('')

    useEffect(() => {
        async function getData() {
            const res = await fetchGet(`/chat/chat-state/${chatId}`);
            if (res.state === 'ACTIVATED') {
                setStateChat(true)
            } else {
                setStateChat(false)
            }
        }
        getData()
    }, [chatId])

    useEffect(() => {
        socket.on(typesSocket.serverMessage, (chat) => {
            const { typeChat, state } = chat;
            switch (typeChat) {
                case typesSocket.stateChat:
                    setStateChat(state)
                    break;
                default:
                    break;
            }
        })
    }, [socket])

    const handleFormMessageChange = ({ target }) => {
        setFormMessage(target.value)
        handleTyping()
    }

    const handleEmitMessage = (e) => {
        e.preventDefault()
        if (formMessage !== '') {
            let data = {
                idChat: course.chatId,
                typeChat: typesSocket.message,
                message: formMessage,
                codeUser: user.code,
                nameUser: user.name,
                firstNameUser: user.firstName,
                lastNameUser: user.lastName,
                role: user.roles,
                room: `${course.code}${course.category}`
            }
            socket.emit(typesSocket.clientMessage, data)
            setFormMessage('');
            handleBlur();
        }
    }

    const handleTyping = () => {
        let data = {
            typeChat: typesSocket.typing,
            nameUser: user.name,
            firstNameUser: user.firstName,
            lastNameUser: user.lastName,
            room: `${course.code}${course.category}`
        }
        socket.emit(typesSocket.clientMessage, data)
    }

    const handleBlur = () => {
        let data = {
            typeChat: typesSocket.blur,
            room: `${course.code}${course.category}`
        }
        socket.emit(typesSocket.clientMessage, data)
    }
    const handleDeactiveChat = () => {
        let data = {
            idChat: course.chatId,
            typeChat: typesSocket.stateChat,
            state: false,
            room: `${course.code}${course.category}`
        }
        socket.emit(typesSocket.clientMessage, data)
    }

    const handleActiveChat = () => {
        let data = {
            idChat: course.chatId,
            typeChat: typesSocket.stateChat,
            state: true,
            room: `${course.code}${course.category}`
        }
        setFormMessage(' ')
        socket.emit(typesSocket.clientMessage, data);
    }

    return {
        formMessage,
        user,
        stateChat,
        handleFormMessageChange,
        handleEmitMessage,
        handleActiveChat,
        handleDeactiveChat,
        handleBlur
    }
}