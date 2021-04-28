import { useContext, useEffect, useState } from "react"
import { CourseContext, UserContext } from "../../../context";
import { fetchGet, fetchPost } from "../../../helpers/fetch"

export const useSatateNoteStudentCourse = ({ history }) => {

    const [listNotesCourse, setListNotesCourse] = useState([]);
    const [loader, setLoader] = useState(true);
    const [updatedNotes, setUpdatedNotes] = useState([])

    const { semActive } = useContext(UserContext);
    const { idCourse } = useContext(CourseContext);

    useEffect(() => {
        async function getData() {
            const res = await fetchGet(`/teacher/notes-of-course/${idCourse}`);
            setListNotesCourse(res);
            setLoader(false);
            createArrayNotes(res);
        }
        getData();
    }, [idCourse])


    const createArrayNotes = (listNotes) => {
        let Aux = listNotes.map((item) => {
            return {
                id: parseInt(item.noteId),
                firstAverage: item.firstAverage,
                secondAverage: item.secondAverage,
                thirdAverage: item.thirdAverage,
                substitute: item.substitute
            }
        })
        setUpdatedNotes([...Aux]);
    }

    const updateNote = (date) => {
        setUpdatedNotes(updatedNotes.map((note) => {
            if (note.id === date.noteId) {
                return {
                    ...note,
                    [date.name]: parseFloat(date.value)
                }
            }
            return note;
        }))
    }

    const handleSubmit = async () => {
        ///teacher/note-entry
        const res = await fetchPost('/teacher/note-entry', updatedNotes)
        console.log(res);
        sessionStorage.setItem('pathname','/note-student')
        const { push } = history;
        setTimeout(() => {
            push('/note-student')
        }, 500);
    }

    return {
        loader,
        listNotesCourse,
        semActive,
        updateNote,
        handleSubmit
    }
}