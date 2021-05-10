import { useCallback, useContext, useEffect, useState } from "react";
import { headers, url } from "../configs/config";
import { AuthContext } from "../context";


export const useAppRouter = () => {

    //se extrae name del objeto user
    const { user } = useContext(AuthContext);
    const [semActive, setSemActive] = useState({ code: "-", fromDate: "-", toDate: "-" });
    const [message, setmessage] = useState({ value: '', nameClass: '' });
    const [isMessage, setisMessage] = useState(false);
    const [registerActive, setRegisterActive] = useState(false);
    const [NewSem, setNewSem] = useState(false);
    
    useEffect(() => {
        if (user.logged) {
            fetch(`${url}/semester/active`, {
                method: "GET",
                headers: headers()
            })
                .then(res => res.json())
                .then(data => {
                    const {activeRegister : ac} = data;
                    if (!data.message) {
                        setSemActive(data);
                        if (ac.state) {
                            setRegisterActive(true);
                        }
                    }
                })
                .catch(err => err);
        }

    }, [user,NewSem]);

    const closeMassage = useCallback(
        () => {
            setmessage({ value: '', nameClass: '' });
            setisMessage(false);
        },
        [],
    )

    const createdSem = ()=>{
        setNewSem(!NewSem);
    }

    return {
        user,
        isMessage,
        message,
        registerActive,
        semActive,
        createdSem,
        setRegisterActive,
        setisMessage,
        setmessage,
        closeMassage
    }
}