import { useCallback, useState } from "react";
import { headers, url } from "../../configs/config";
//import { AdminContext } from "../../context";

export const useStudentCourse = () => {
  const [SelectCourse, setSelectCourse] = useState({})
  const [dateConsult, setdateConsult] = useState(false);
  const [ListStudents, setListStudents] = useState([])

  const handleSubmit = useCallback(
    (course) => {
      setSelectCourse(course);
      fetch(`${url}/teacher/student-course/${course.id}`, {
        method: "GET",
        headers: headers()
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setListStudents(data);
        })
      setdateConsult(true);
    }, []
  )
  
  return {
    ListStudents,
    SelectCourse,
    dateConsult,
    handleSubmit
  }
}