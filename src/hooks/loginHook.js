import { useContext, useState } from "react";
import { AuthContext } from "../context";
import { fetchAuth } from "../helpers/fetch";
import { typesLogin } from "../types/types";

export const useLoginHook = () => {

    const [loader, setLoader] = useState(false);
    const [form, setForm] = useState({ code: '141670', key: '12345' });

    const { dispatch } = useContext(AuthContext);


    const handleChange = ({ target }) => {
        setForm({ ...form, [target.name]: target.value })
    }

    const handleSubmit = async (e) => {
        setLoader(true)
        e.preventDefault();
        const res = await fetchAuth("/auth/login", form);
        setForm({ ...form, code: '', key: '' })
        setLoader(false)
        //dispath of context
        const { name, roles, token } = res;
        dispatch({ 
            type: typesLogin.login, 
            payload: { name: name, role: roles, token: token } 
        })
    }

    return {
        loader,
        form,
        handleChange,
        handleSubmit
    }
}