import { useEffect, useState } from "react";
import { fetchGet } from "../helpers/fetch";

export const useStateGetDataChat = (chatId) => {

    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetchGet(`/chat/chat-course/${chatId}`);
            setChatData(res);
        }
        getData();
    }, [chatId])


    return {
        chatData
    }

}