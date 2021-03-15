import { useCallback, useEffect, useState } from "react"
import { headers, url } from "../../configs/config";

export const useNotes = () => {
    const [SemesterSelect, setSemesterSelect] = useState(0);
    const [ListSemesters, setListSemesters] = useState([]);
    const [DateConsult, setDateConsult] = useState(false);
    const [Notes, setNotes] = useState([]);

    useEffect(() => {
        fetch(`${url}/semester/list`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                if (!data.message) {
                    setListSemesters(data);
                    setSemesterSelect(data[0].id)
                }
            })
            .catch(err => err);
    }, [])

    const handleChange = (e) => {
        setSemesterSelect(e.target.value);
    }
    const getOneNotes = useCallback(
        (e) => {
            e.preventDefault();
            fetch(`${url}/note/one/${SemesterSelect}`, {
                method: "GET",
                headers: headers()
            })
                .then(res => res.json())
                .then(data => {
                    setNotes(data.courseregisters);
                    setDateConsult(true)
                })
                .catch(err => err);
        },
        [SemesterSelect,setNotes,setDateConsult]
    )

    return {
        ListSemesters,
        DateConsult,
        Notes,
        handleChange,
        getOneNotes
    }
}