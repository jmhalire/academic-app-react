import { useCallback, useState } from "react";
import { headers, url } from "../../configs/config";
//import { AdminContext } from "../../context";

export const useStudentNote = () => {

  const [SelectCourse, setSelectCourse] = useState({})
  const [dateConsult, setdateConsult] = useState(false);
  const [Notes, setNotes] = useState([])

  const handleSubmit = useCallback(
    (course) => {
      setSelectCourse(course);
      fetch(`${url}/teacher/notes-course/${course.id}`, {
        method: "GET",
        headers: headers()
      })
        .then(res => res.json())
        .then(data => {
          setNotes(data);
        })
      setdateConsult(true);
    }, []
  )

  return {
    Notes,
    SelectCourse,
    dateConsult,
    handleSubmit
  }
}