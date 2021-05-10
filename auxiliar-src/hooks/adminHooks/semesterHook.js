import { useCallback, useContext, useEffect, useState } from 'react'
import { headers, url } from '../../configs/config';
import { UserContext } from '../../context';


export const useStateSemester = () => {
    const [listSemesters, setListSemesters] = useState([]);
    const [dateActiveRegister, setDateActiveRegister] = useState({ fromDate: '', toDate: '' })
    const [stateSemester, setStateSemester] = useState(false);
    const [activeSemesterName, setActiveSemesterName] = useState('');
    const [NewSeemster, setNewSeemster] = useState(false);

    /**  context admin **/
    const { setmessage, setisMessage, setRegisterActive, registerActive } = useContext(UserContext);


    /* funcion para escuchar los cambios de los imput */
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDateActiveRegister({
            ...dateActiveRegister,
            [name]: value
        })
    }

    useEffect(() => {
        fetch(`${url}/semester/list`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                if (!data.message) {
                    setListSemesters(data);
                    if (data.activeRegister.state) {
                        setRegisterActive(true);
                    }
                }
            })
            .catch(err => err);
    }, [setRegisterActive,NewSeemster])

    useEffect(() => {
        fetch(`${url}/semester/active`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                if (data.code) {
                    setActiveSemesterName(data.code);
                    setStateSemester(true);
                    if (data.activeRegister.state) {
                        setRegisterActive(true);
                    }
                }
            })
            .catch(err => err);
    }, [setRegisterActive])

    const handleEndSemester = (value) => {
        fetch(`${url}/semester/finalize`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                setStateSemester(true);
                setNewSeemster(!NewSeemster);
                //window.location.href = "./admin"
            })
            .catch(err => err);

    };

    const createdSemester = ()=>{
        setNewSeemster(!NewSeemster);
    }

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (dateActiveRegister.fromDate !== "" && dateActiveRegister.toDate !== "") {
                fetch(`${url}/semester/enable-register`, {
                    method: "POST",
                    headers: headers(),
                    body: JSON.stringify(dateActiveRegister)
                })
                    .then(res => res.json())
                    .then(data => {
                        setmessage({
                            value: data.message,
                            nameClass: 'alert-info'
                        });
                        setisMessage(true);
                        setRegisterActive(true);
                    })
                    .catch(err => err);
            } else {
                console.log('llenar todos los campos');
            }
        },[dateActiveRegister,setRegisterActive,setisMessage,setmessage]
    )
    const handleFinalize = () => {
        fetch(`${url}/semester/finalize-register`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                setRegisterActive(false);
                setmessage({
                    value: data.message,
                    nameClass: 'alert-info'
                });
                setisMessage(true);
                
            })
            .catch(err => {
                console.log(err);
            });

    }

    return {
        listSemesters,
        stateSemester,
        registerActive,
        activeSemesterName,
        dateActiveRegister,
        createdSemester,
        handleEndSemester,
        handleSubmit,
        handleFinalize,
        handleInputChange
    }
}