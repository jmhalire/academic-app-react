import { useCallback, useContext, useState } from 'react'
import { AuthContext } from '../context/index';
import { url } from '../configs/config';
import { types } from '../types/types';
//import { useHistory } from 'react-router-dom';



const headersLogin = () => {
    return new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
    })
}

export const useStateSignin = () => {
    const [values, setValue] = useState({code: '',key: ''});
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');

    //context
    const { dispatch } = useContext(AuthContext);
    //const history = useHistory();

    /* funcion para escuchar los cambios de los imput */
    const handleInputChange = ({ target }) => {
        setValue({
            ...values,
            [target.name]: target.value
        });
        setError(false);
    };

    const handleSubmit = useCallback(
      () => {
        const { code, key } = values;
        if (code !== "" && key !== "") {
            fetch(`${url}/auth/login`, {
                method: "post",
                headers: headersLogin(),
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.token) {
                        //dispath of context
                        const {name, roles, token} = data;
                        dispatch({
                            type: types.login,
                            payload: {
                                name: name,
                                role: roles,
                                token: token
                            }
                        })
                    } else {
                        setError(true);
                        setMessage(data.message)
                    }
                })
                .catch(err => err);
        } else {
            setError(true);
            setMessage('llenar todos los campos')
        }
      },[dispatch,values]
    )

    const resetState = () => {
        setValue({
            ...values,
            code: "",
            key: "",
        })

        setError(false)
        setMessage('')
    };

    return {
        values,
        error,
        message,
        useStateSignin,
        handleInputChange,
        handleSubmit,
        resetState
    }
}

