import { useCallback, useContext, useEffect, useState } from "react"
import { headers, url } from "../../configs/config";
import { UserContext } from "../../context";

export const useAsignationTeacher = () => {
    const [SelectCourse, setSelectCourse] = useState({ id: 0, course: { name: "" } });
    const [SelectedTeacher, setSelectedTeacher] = useState(0);
    const [ListCourse, setListCourse] = useState([]);
    const [ListTeacher, setListTeacher] = useState([]);
    const [UpdateList, setUpdateList] = useState(1);

    const { setisMessage, setmessage } = useContext(UserContext);

    useEffect(() => {
        fetch(`${url}/register/register-courses`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setListCourse(data);
            })
    }, [UpdateList]);

    useEffect(() => {
        fetch(`${url}/teacher/list`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                setListTeacher(data);
            })
    }, []);

    const handleChange = (e) => {
        const { value } = e.target
        setSelectedTeacher(parseInt(value))
    }

    const handleSubmit = useCallback(
        (e) => {
            const data = {
                id: SelectCourse.id,
                teacher: SelectedTeacher
            }
            fetch(`${url}/register/asignation-teacher`, {
                method: "POST",
                headers: headers(),
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setUpdateList(UpdateList * (-1));
                    setisMessage(true);
                    setmessage({
                        nameClass: 'alert-info',
                        value: data.message
                    });
                })
        }, [UpdateList, SelectCourse.id, SelectedTeacher,setisMessage,setmessage],
    )
    return {
        SelectCourse,
        ListCourse,
        ListTeacher,
        setSelectCourse,
        setSelectedTeacher,
        handleChange,
        handleSubmit
    }
}