import React from 'react';
import { useSatateNoteStudentCourse } from '../../../../hooks/teacherHooks/courseHook/useNoteStudentsCourse';
import Loader from '../../../../components/loader/Loader';
import { useLocation } from 'react-router';

const NoteStudents = (props) => {

  const url = useLocation()
  const {pathname} = url;
  sessionStorage.setItem('pathname',pathname)
  const { loader, listNotesCourse } = useSatateNoteStudentCourse(props);

  return (
    <>
      <h1 className="title-table">NOTAS DE LOS ESTUDIANTES DEL CURSO</h1>
      <div className="table-header">
        <table className="table">
          <thead >
            <tr>
              <th scope="col" style={{ width: "4%" }}>Nro</th>
              <th scope="col" style={{ width: "10%" }}>Codigo</th>
              <th scope="col" style={{ width: "30%" }}>Nombres</th>
              <th scope="col" style={{ width: "8%" }}>Pro. 1</th>
              <th scope="col" style={{ width: "8%" }}>Pro. 2</th>
              <th scope="col" style={{ width: "8%" }}>Pro. 3</th>
              <th scope="col" style={{ width: "7%" }}>Sust.</th>
              <th scope="col" style={{ width: "10%" }}>Promedio</th>
              <th scope="col" style={{ width: "15%" }}>Observacion</th>
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
                    (listNotesCourse.length > 0)
                      ?
                      (listNotesCourse.map((item, index) => {
                        return (
                          <tr key={item.noteId}>
                            <th style={{ width: "4%" }} scope="row">{index + 1}</th>
                            <td style={{ width: "10%" }} >{item.studentCode}</td>
                            <td style={{ width: "30%" }} >{item.studentFirstName} {item.studentLastName} - {item.studentName}</td>
                            <td style={{ width: "8%" }} >{item.firstAverage}</td>
                            <td style={{ width: "8%" }} >{item.secondAverage}</td>
                            <td style={{ width: "8%" }} >{item.thirdAverage}</td>
                            <td style={{ width: "7%" }} >{item.substitute}</td>
                            <td style={{ width: "10%" }} >{item.average}</td>
                            <td style={{ width: "15%" }} >{item.observation}</td>
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

export default NoteStudents;
