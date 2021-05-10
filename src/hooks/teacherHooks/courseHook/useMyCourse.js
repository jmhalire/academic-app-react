import { useEffect, useState } from "react"
import { fetchGet } from "../../../helpers/fetch"


export const useStateMyCourse = (code) => {

    const [myCourse, setMyCourse] = useState({
        category: "",
        chatId: 0,
        code: "",
        credit: 0,
        idCourse: 0,
        name: "",
        nameCareer: ""
    })

    useEffect(() => {
        async function getData() {
            const res = await fetchGet(`/course/code/${code}`)
            setMyCourse({
                ...res,
            })
        }
        getData();
    }, [code])

    return {
        myCourse
    }
}