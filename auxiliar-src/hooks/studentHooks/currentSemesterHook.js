import { useContext, useEffect, useState } from "react"
import { headers, url } from "../../configs/config";
import { UserContext } from "../../context"

export const useCurrentSemester = ()=>{

    const { semActive } = useContext(UserContext)
    const [student, setstudent] = useState({});

    useEffect(() => {
        fetch(`${url}/student/profile`, {
            method: "GET",
            headers: headers()
        })
        .then(res=>res.json())
        .then(data=>{
            setstudent(data);  
        })
    }, [])

    return {
        student,
        semActive
    }
}