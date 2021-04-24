import { useEffect, useState } from "react"
import { fetchGet } from "../../../helpers/fetch";

export const useStateListCareer = () => {
    const [listCareer, setListCareer] = useState([]);

    useEffect(() => {
        async function fetchData (){
            const res = await fetchGet('/career/list');
            setListCareer(res)
        }
        fetchData();
    }, [])

    return {
        listCareer
    }
}