import { useContext, useEffect, useState } from "react"
import { CourseContext } from "../../../context"
import { fetchGet } from "../../../helpers/fetch"

export const useStateListStudentCourse = () => {

  const [listStudent, setListStudent] = useState([])
  const [loader, setLoader] = useState(true)

  const { course } = useContext(CourseContext);

     
  useEffect(() => {
    async function getData() {
      const res = await fetchGet(`/teacher/student-course/${course.id || course.idCourse}`);
      setListStudent(res);
      setLoader(false);
    }
    getData();
  }, [course])

  return {
    listStudent,
    loader
  }

}