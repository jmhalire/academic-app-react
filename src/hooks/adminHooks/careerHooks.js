import { useCallback, useContext, useEffect, useState } from "react"
import { headers, url } from "../../configs/config";
import { UserContext } from '../../context';

export const useListCareer = () => {
    const [listCareer, setlistCareer] = useState([]);
    const [createCareer, setcreateCareer] = useState(false);
    const [updateList, setupdateList] = useState(false);

    /**  context admin **/
    const { setmessage, setisMessage } = useContext(UserContext);

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
    }, [updateList])


    return {
        createCareer,
        listCareer,
        setmessage,
        setisMessage,
        setupdateList,
        setcreateCareer
    }

}

export const useCreateCareer = ({ setupdateList, setmessage, setisMessage }) => {
    const [newCareer, setnewCareer] = useState({code:'',name:''})
    const [error, seterror] = useState(false);
    const [messageError, setMessagError] = useState('');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewCareer({
            ...newCareer,
            [name]: value.toUpperCase()
        });
        seterror(false);
    }

    const resetState = useCallback(
      () => {
        setnewCareer({
            ...newCareer,
            code:'',
            name:''
        });
        seterror(false);
      },
      [newCareer],
    )
    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (newCareer.code !== '' && newCareer.name !== '') {
                fetch(`${url}/career/create`, {
                    method: "POST",
                    headers: headers(),
                    body: JSON.stringify(newCareer)
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
            }
        }, [newCareer,setisMessage,setupdateList,setmessage,resetState]
    )


    return {
        messageError,
        error,
        newCareer,
        handleChange,
        resetState,
        handleSubmit
    }

}