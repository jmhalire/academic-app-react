import React from 'react';
import { useStateListStudentCourse } from '../../hooks/teacherHooks/courseHook/useListStudentCourse';
import { useLocation } from 'react-router';
import Loader from '../loader/Loader';

const StudentList = () => {

  const url = useLocation()
  const { pathname } = url;
  sessionStorage.setItem('pathname', pathname)

  const { loader, listStudent } = useStateListStudentCourse()
  
  return (
    <>
      <h1 className="title-table">LISTA DE ESTUDIANTES DEL CURSO</h1>
      <div className="table-header">
        <table className="table">
          <thead >
            <tr>
              <th scope="col" style={{ width: "10%" }}>Nro</th>
              <th scope="col" style={{ width: "10%" }}>Codigo</th>
              <th scope="col" style={{ width: "50%" }}>Nombres</th>
              <th scope="col" style={{ width: "30%" }}>E-mail</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="table-body">
        {
          (loader)
            ? (<Loader />)
            : (
              <table className="table teacher-course-table">
                <tbody>
                  {
                    (listStudent.length > 0)
                      ?
                      (listStudent.map((student, index) => {
                        return (
                          <tr key={student.id}>
                            <th style={{ width: "10%" }} scope="row">{index + 1}</th>
                            <td style={{ width: "10%" }} >{student.code}</td>
                            <td style={{ width: "50%" }} >{student.firstName} {student.lastName} - {student.name}</td>
                            <td style={{ width: "30%" }} >{student.email}</td>
                          </tr>
                        )
                      }))
                      : (
                        <tr>
                          <td style={{ textAlign: 'center', color: 'darkcyan' }}>No hay estudiantes en este curso.</td>
                        </tr>
                      )
                  }
                </tbody>
              </table>
            )
        }
      </div>
    </>
  )
}
export default StudentList
