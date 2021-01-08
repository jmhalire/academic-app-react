import { useEffect, useState } from "react"
import { headers, url } from "../../configs/config"

export const useRouterTeacher = ()=>{
    const [Courses, setCourses] = useState([])

    useEffect(() => {
        fetch(`${url}/teacher/my-courses`,{
            method: "GET",
            headers: headers()
        })
        .then(res=>res.json())
        .then(data=>{
            setCourses(data);
        })
    }, [])

    return {
        Courses
    }
}