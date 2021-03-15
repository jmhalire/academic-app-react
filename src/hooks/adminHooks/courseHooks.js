import { useCallback, useContext, useEffect, useState } from "react"
import { headers, url } from "../../configs/config";
import { UserContext } from "../../context";

export const useListCourse = () => {
    const [listCareer, setlistCareer] = useState([]);
    const [listCourse, setlistCourse] = useState([]);
    const [createCourse, setcreateCourse] = useState(false);
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
        fetch(`${url}/course/list`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                setlistCourse(data);
            })
            .catch(error => { console.log(error) });
    }, [updateList])

    return {
        createCourse,
        setcreateCourse,
        listCareer,
        listCourse,
        setupdateList
    }
}

export const useCreateCourse = ({ setupdateList}) => {
    const [newCourse, setnewCourse] = useState({career:'1',code:'',name:'',category:'OE',credit:"1"})
    const [error, seterror] = useState(false);
    const [messageError, setMessagError] = useState('');

    /**  context admin **/
    const { setmessage, setisMessage } = useContext(UserContext);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewCourse({
            ...newCourse,
            [name]: value.toUpperCase()
        });
        seterror(false);
    }

    const resetState = useCallback(
      () => {
        setnewCourse({
            ...newCourse,
            code:'',
            name:''
        });
        seterror(false);
      },
      [newCourse],
    )
    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            setupdateList(false);
            if (newCourse.code !== '' && newCourse.name !== '') {
                fetch(`${url}/course/create`, {
                    method: "POST",
                    headers: headers(),
                    body: JSON.stringify(newCourse)
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
        }, [newCourse,setisMessage,setupdateList,setmessage,resetState]
    )



    return {
        messageError,
        error,
        newCourse,
        handleChange,
        resetState,
        handleSubmit
    }
}