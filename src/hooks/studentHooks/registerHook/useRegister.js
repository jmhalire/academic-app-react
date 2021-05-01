import { useEffect, useState } from "react";
import { fetchGet } from "../../../helpers/fetch";

export const useStateRegister = () => {
    const [listCourseSelected, setListCourseSelected] = useState([]);
    const [listCourseOffered, setListCourseOffered] = useState([]);
    const [changeRegister, setChangeRegister] = useState(false);
    const [nroCredit, setNroCredit] = useState(0);

    useEffect(() => {
        async function getData() {
            const res = await fetchGet('/register/selected');
            setListCourseSelected(res)
        }
        getData();
    }, [])

    useEffect(() => {
        async function getData() {
            const res = await fetchGet('/register/offered');
            setListCourseOffered(res)
        }
        getData();
    }, [])

    useEffect(() => {
        function counterCredit() {
            let counter = 0;
            listCourseSelected.forEach(({ credit }) => {
                counter += credit;
            });
            setNroCredit(counter);
        }
        counterCredit()

    }, [listCourseSelected])

    const handleChangeRegister = () => {
        setChangeRegister(!changeRegister)
    }

    const addCourse = (id) => {
        let courseAdd = listCourseOffered.filter((course) => course.id === id);
        if ((nroCredit + courseAdd[0].credit) < 22) {
            setListCourseSelected([...listCourseSelected, ...courseAdd]);
            setListCourseOffered(() => listCourseOffered.filter((course) => course.id !== id));
        }

    }

    const removeCourse = (id) => {
        let courseAdd = listCourseSelected.filter((course) => course.id === id);
        setListCourseOffered([...listCourseOffered, ...courseAdd]);
        setListCourseSelected(() => listCourseSelected.filter((course) => course.id !== id));
    }

    return {
        listCourseSelected,
        listCourseOffered,
        changeRegister,
        nroCredit,
        addCourse,
        removeCourse,
        handleChangeRegister
    }
}