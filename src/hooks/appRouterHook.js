import { useEffect, useState } from "react";
import { fetchGet } from "../helpers/fetch";

export const useAppRouter = () => {

    const [semActive, setSemActive] = useState({ code: "-", fromDate: "-", toDate: "-" });
    const [message, setMessage] = useState({ value: '', nameClass: '' })
    const [isMessage, setIsMessage] = useState(false);
    const [NewSem, setNewSem] = useState(false);

    useEffect(() => {
        async function getData() {
            const res = await fetchGet('/semester/active')
            if (!res.message) {
                setSemActive(res);
            } else {
                console.log('no hay semestre activo');
            }
        }
        getData();
    }, []);

    const closeMassage = () => {
        setMessage({ value: '', nameClass: '' });
        setIsMessage(false);
    }

    const createdSem = () => {
        setNewSem(!NewSem);
    }

    return {
        isMessage,
        message,
        semActive,
        createdSem,
        setIsMessage,
        setMessage,
        closeMassage
    }
}