import { useEffect, useState } from "react";
import { fetchGet } from "../../helpers/fetch"


export const useRouterTeacher = ()=>{
    const [courses, setCourses] = useState([]);
    const [teacher, setTeacher] = useState({
        code: "",
        createdAt: "",
        email: "",
        firstName: "",
        id: 0,
        lastName: "",
        name: "",
        roles: "",
        speciality: "",
        updatedAt: "",
    })

    useEffect(() => {
        async function getData() {
            const res = await fetchGet('/teacher/my-courses')
            setCourses(res);
        }
        getData()
    }, [])

    useEffect(() => {
        async function getData() {
            const res = await fetchGet('/teacher/profile');
            setTeacher(res)
        }
        getData();
    }, [])

    return {
        teacher,
        courses
    }
}