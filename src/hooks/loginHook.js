import { useContext, useState } from "react";
import { AuthContext } from "../context";
import { fetchAuth } from "../helpers/fetch";
import { typesLogin } from "../types/typesLogin";

export const useLoginHook = () => {

    const [loader, setLoader] = useState(false);
    const [form, setForm] = useState({ code: '123456', key: '26516' });

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
        // fetch(`${url}/auth/login`, {
        //     method: "post",
        //     headers: headersLogin(),
        //     body: JSON.stringify(form)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.token) {
        //             //dispath of context
        //             //const { name, roles, token } = data;
        //             // dispatch({
        //             //     type: types.login,
        //             //     payload: {
        //             //         name: name,
        //             //         role: roles,
        //             //         token: token
        //             //     }
        //             // })
        //         } else {
        //             //setError(true);
        //             //setMessage(data.message)
        //         }
        //     })
        //     .catch(err => err);
    }

    return {
        loader,
        form,
        handleChange,
        handleSubmit
    }
}