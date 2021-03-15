import { useCallback, useContext, useEffect, useState } from "react";
import { headers, url } from "../../configs/config";
import { UserContext } from "../../context";

export const useRegister = () => {
    const [NroOption, setNroOption] = useState(0);
    const [ListCourseSelected, setListCourseSelected] = useState([]);
    const [ListCourseOffered, setListCourseOffered] = useState([]);
    const [AllowRegistration, setAllowRegistration] = useState(true);
    const [ChangeRegister, setChangeRegister] = useState(false);

    //contex user mesasge
    const { setmessage, setisMessage } = useContext(UserContext);
    useEffect(() => {
        fetch(`${url}/register/my-register`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                if (data.value) {
                    //console.log(data);
                    setNroOption(data.register.nroOption)
                }
            })
    }, [ChangeRegister])

    useEffect(() => {
        fetch(`${url}/register/selected`, {
            method: "GET",
            headers: headers()
        })
            .then(res => res.json())
            .then(data => {
                setListCourseSelected(data);
            })
    }, [ChangeRegister])

    useEffect(() => {
        if (NroOption < 3) {
            fetch(`${url}/register/offered`, {
                method: "GET",
                headers: headers()
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    setListCourseOffered(data);
                })
        } else {
            setAllowRegistration(false);
        }
    }, [NroOption])

    const countCredist = (credit) => {
        let credt = 0;
        ListCourseSelected.forEach(element => {
            credt += element.credit
        });
        if ((credt + credit) > 22) {
            return false
        } else {
            return true;
        }
    }

    const addCourse = (course) => {
        if (countCredist(course.credit)) {
            //agregamos el curso a la lista de seleccionados
            let newListCourseSelect = ListCourseSelected.map(value => value);
            newListCourseSelect.push(course)
            //quitamos el curso de la lista de ofrecidos
            let newListCourseOffered = ListCourseOffered.map(value => value);
            let index = newListCourseOffered.indexOf(course)
            newListCourseOffered.splice(index, 1);
            //modificamos el state
            setListCourseSelected(newListCourseSelect);
            setListCourseOffered(newListCourseOffered);
        }
        else {
            setisMessage(true);
            setmessage({
                nameClass: 'alert-danger',
                value: 'limit passs'
            });
        }
    }

    const removeCourse = (course) => {
        //agregamos a cursos ofrecidos el curso que se va
        //remover de los cursos seleccionados
        let newListCourseOffered = ListCourseOffered.map(value => value);
        newListCourseOffered.push(course);
        //quitamos el curso de la lista de seleccionados
        let newListCourseSelect = ListCourseSelected.map(value => value);
        let index = newListCourseSelect.indexOf(course)
        newListCourseSelect.splice(index, 1);
        //modificamos el state
        setListCourseSelected(newListCourseSelect);
        setListCourseOffered(newListCourseOffered);
    }

    const notChangeRegister = useCallback(
        () => {
            setChangeRegister(!ChangeRegister);
            setListCourseSelected([])
        },
        [ChangeRegister],
    )

    return {
        NroOption,
        AllowRegistration,
        ChangeRegister,
        ListCourseSelected,
        ListCourseOffered,
        setChangeRegister,
        addCourse,
        removeCourse,
        notChangeRegister
    }
}