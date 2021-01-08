import { useState } from "react"

export const usePersonal = () => {
    const [student, setstudent] = useState(true);
    const [techer, settecher] = useState(false);
    const [newStudent, setnewStudent] = useState(false);
    const [newTeacher, setnewTeacher] = useState(false);

    return {
        student,
        techer,
        newStudent,
        newTeacher,
        setstudent,
        settecher,
        setnewStudent,
        setnewTeacher
    }
}
