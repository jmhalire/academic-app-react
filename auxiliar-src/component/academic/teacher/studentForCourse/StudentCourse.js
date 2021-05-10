import React from 'react'
import SelectCourse from "../SelectCourse";
import "./StudentCourse.css"
import { useStudentCourse } from "../../../../hooks/teacherHooks/studentCourseHook";

const StudentCourse = () => {


  const {
    ListStudents,
    SelectCourse : sc,
    dateConsult,
    handleSubmit
  } = useStudentCourse();

  return (
    <div >
      <SelectCourse handle={handleSubmit} title={'STUDENT FOR COURSE'} />
      {dateConsult && (
        <>
          <div className="card name-course-select p-2 mb-2">
            <span>Code: {sc.code}</span>
            <span>Course: {sc.name}</span>
          </div>
          <div className="card card-table-notes">
            <table className="table table-bordered">
              <thead className="card-header">
                <tr>
                  <th scope="col" style={{ width: "10%" }}>
                    Nro
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Code
                  </th>
                  <th scope="col" style={{ width: "75%" }}>
                    Names
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  ListStudents.map((value, index) => {
                    const { register } = value;
                    const { student } = register;
                    return (
                      <tr key={value.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{student.code}</td>
                        <td>{student.firstName}  {student.lastName} - {student.name}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </>
      )
      }
    </div>
  )
}

export default StudentCourse
