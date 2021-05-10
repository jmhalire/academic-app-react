import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context"
import { fetchGet } from "../../../helpers/fetch"

export const useStateListSemester = () => {
    const [listSemester, setListSemester] = useState([])

    //contexto
    const { registerActive } = useContext(UserContext)

    useEffect(() => {
        async function fetchData() {
            const res = await fetchGet('/semester/list')
            setListSemester(res)
        }
        fetchData();
    }, [])
    return {
        listSemester,
        registerActive
    }
}