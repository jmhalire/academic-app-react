import { useEffect, useState } from "react"
import { fetchGet } from "../../helpers/fetch"

export const useRouterStudent = () => {
    const [courses, setCourses] = useState([])
    const [student, setStudent] = useState({
        code:'',
        email:'',
        id:'',
        name:'',
        firstName:'',
        lastName:'',
        roles:'',
        createdA:'',
        updatedAt:'',
    })


    useEffect(() => {
        async function getData() {
            const res = await fetchGet('/register/selected')
            setCourses(res);
        }
        getData()
    }, [])

    useEffect(() => {
        async function getData() {
            const res = await fetchGet('/student/profile');
            setStudent(res)
        }
        getData();
    }, [])


    return {
        student,
        courses
    }
}