import { useCallback, useContext, useEffect, useState } from "react";
import { headers, url } from "../../configs/config";
import { UserContext } from "../../context";

export const useListTeacher = () => {
    const [listTeacher, setlistTeacher] = useState([]);
    const [updateList, setupdateList] = useState(false);


    useEffect(() => {
        fetch(`${url}/teacher/list`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                setlistTeacher(data);
            })
            .catch(error => { console.log(error) });
    }, [updateList])


    return {
        listTeacher,
        setupdateList,
    }
}

export const useCreateTeacher = ({ setupdateList }) => {

    const [newTeacher, setnewTeacher] = useState({
        code: '', key: '', confirmKey: '', email: '', name: '', firstName: '', lastName: "", speciality: ""
    })
    const [error, seterror] = useState(false);
    const [messageError, setMessagError] = useState('');

    /**  context admin **/
    const { setmessage, setisMessage } = useContext(UserContext);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewTeacher({
            ...newTeacher,
            [name]: value.toUpperCase()
        });
        seterror(false);
    }

    const validateForm = useCallback(
        () => {
            if (
                newTeacher.code !== '' &&
                newTeacher.name !== '' &&
                newTeacher.key !== '' &&
                newTeacher.confirmKey !== '' &&
                newTeacher.firstName !== '' &&
                newTeacher.lastName !== '' &&
                newTeacher.speciality !== ''
            ) return true
            return false
        },
        [newTeacher],
    )

    const resetState = useCallback(
      () => {
        setnewTeacher({
            ...newTeacher,
            code: '',
            key: '',
            confirmKey: '',
            email: '',
            name: '',
            firstName: '',
            lastName: "",
            speciality: "",
        });
        seterror(false);
      },
      [newTeacher],
    )

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            setupdateList(false);
            if (validateForm()) {
                if (newTeacher.key === newTeacher.confirmKey) {
                    newTeacher.email = `${newTeacher.code}@unsaac.edu.pe`;
                    const { confirmKey, ...data } = newTeacher;

                    fetch(`${url}/teacher/create`, {
                        method: "POST",
                        headers: headers(),
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(data => {
                            setupdateList(true);
                            setisMessage(true);
                            setmessage({
                                nameClass: 'alert-info',
                                value: data.message
                            });
                            resetState();
                        })
                } else {
                    seterror(true);
                    setMessagError('llenar todos los campo');
                    setnewTeacher({
                        ...newTeacher,
                        key: "",
                        confirmKey: "",
                    })
                }
            } else {
                seterror(true);
                setMessagError('llenar todos los campo');
            }
        }, [newTeacher, resetState, setmessage, setisMessage, setupdateList, validateForm]
    )



    return {
        messageError,
        error,
        newTeacher,
        handleChange,
        resetState,
        handleSubmit
    }
}