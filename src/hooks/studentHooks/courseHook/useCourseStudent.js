///register/selected

import { useEffect, useRef, useState } from "react";
import { fetchGet } from "../../../helpers/fetch";

export const UseStateCourseStudent = (code) => {

    const [myCourse, setMyCourse] = useState({
        category: "",
        chatId: 0,
        code: "",
        credit: 0,
        idCourse: 0,
        name: "",
        nameCareer: ""
    })
    const [chat, setChat] = useState(false);
    const otherRef = useRef();
    const chatRef = useRef();

    useEffect(() => {
        async function getData() {
            const res = await fetchGet(`/course/code/${code}`)
            setMyCourse({
                ...res,
            })
        }
        getData();
    }, [code])

    

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
        myCourse,
        chat,
        chatRef,
        otherRef,
        handleHiddenChat,
        handleShowChat,
    }
}