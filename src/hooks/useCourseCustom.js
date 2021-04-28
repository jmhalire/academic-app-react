import { useRef, useState } from "react";

export const useStateCourse = () => {

    const [chat, setChat] = useState(false);
    const otherRef = useRef();
    const chatRef = useRef();

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
        chat,
        chatRef,
        otherRef,
        handleHiddenChat,
        handleShowChat,
    }
}