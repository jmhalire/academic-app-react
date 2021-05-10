import { useEffect, useState } from "react"
import { fetchPost } from "../../../helpers/fetch";

export const useStateListCourse = ({id}) => {
    const [listCourse, setListCourse] = useState([]);
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetchPost('/course/list',{idCareer:id});
            setListCourse(res)
            setLoader(false)
        }
        fetchData();
    }, [id])

    return {
        loader,
        listCourse
    }
}