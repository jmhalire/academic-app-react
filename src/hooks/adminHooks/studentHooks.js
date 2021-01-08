import { useCallback, useContext, useEffect, useState } from "react";
import { headers, url } from "../../configs/config";
import { UserContext } from "../../context";

export const useListStudent = () => {
    const [listCareer, setlistCareer] = useState([]);
    const [listStudent, setlistStudent] = useState([]);
    const [updateList, setupdateList] = useState(false);

    useEffect(() => {
        fetch(`${url}/career/list`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                setlistCareer(data);
            })
            .catch(error => { console.log(error) });
    }, [])

    useEffect(() => {
        fetch(`${url}/student/list`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                setlistStudent(data);
            })
            .catch(error => { console.log(error) });
    }, [updateList])


    return {
        listStudent,
        listCareer,
        setupdateList,
    }
}

export const useCreateStudent = ({ setupdateList }) => {

    const [newStudent, setnewStudent] = useState({
        career: '0', code: '', key: '', confirmKey: '', email: '', name: '', firstName: '', lastName: ""
    })
    const [error, seterror] = useState(false);
    const [messageError, setMessagError] = useState('');

    /**  context admin **/
    const { setmessage, setisMessage } = useContext(UserContext);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewStudent({
            ...newStudent,
            [name]: value.toUpperCase()
        });
        seterror(false);
    }

    const validateForm = useCallback(
      () => {
        if (
            newStudent.code !== '' &&
            newStudent.name !== '' &&
            newStudent.key !== '' &&
            newStudent.confirmKey !== '' &&
            newStudent.firstName !== '' &&
            newStudent.lastName !== '' &&
            newStudent.career !== ''
        ) return true
        return false
      },[newStudent],
    )

    const resetState = useCallback(
      () => {
        setnewStudent({
            ...newStudent,
            code: '',
            key: '',
            confirmKey: '',
            email: '',
            name: '',
            firstName: '',
            lastName: ""
        });
        seterror(false);
      },
      [newStudent],
    )
    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            setupdateList(false);
            if (validateForm()) {
                newStudent.career = parseInt(newStudent.career);
                newStudent.email = `${newStudent.code}@unsaac.edu.pe`;
                if (newStudent.key === newStudent.confirmKey) {
                    const { confirmKey, ...data } = newStudent;
                    fetch(`${url}/student/create`, {
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
                    setnewStudent({
                        ...newStudent,
                        key: "",
                        confirmKey: "",
                    })
                }
            } else {
                seterror(true);
                setMessagError('llenar todos los campo');
            }
        }, [newStudent,setupdateList,setisMessage,setmessage,validateForm,resetState]
    )



    return {
        messageError,
        error,
        newStudent,
        handleChange,
        resetState,
        handleSubmit
    }
}