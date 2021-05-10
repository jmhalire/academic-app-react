import React from 'react';
import { useSatateNoteStudentCourse } from '../../../../../hooks/teacherHooks/courseHook/useNoteStudentsCourse'
import Loader from '../../../../../components/loader/Loader';
import InputNote from './InputNote';

import './noteEntry.css';
import { useLocation } from 'react-router';

const NoteEntry = (props) => {

  const url = useLocation();
  const {pathname} = url;
  sessionStorage.setItem('pathname',pathname);

  const { 
    loader,
    semActive,
    listNotesCourse,
    updateNote,
    handleSubmit
  } = useSatateNoteStudentCourse(props);

  const { firstPartial, secondPartial, thirdPartial } = semActive;

  return (
    <>
      <h1 className="title-table">INGRESO DE NOTAS DEL CURSO EN EL SISTEMA</h1>
      <div className="table-header">
        <table className="table">
          <thead >
            <tr>
              <th scope="col" style={{ width: "5%" }}>Nro</th>
              <th scope="col" style={{ width: "10%" }}>Codigo</th>
              <th scope="col" style={{ width: "35%" }}>Nombres</th>
              <th scope="col" style={{ width: "10%" }}>Pro. 1</th>
              <th scope="col" style={{ width: "10%" }}>Pro. 2</th>
              <th scope="col" style={{ width: "10%" }}>Pro. 3</th>
              <th scope="col" style={{ width: "10%" }}>Sust.</th>
              <th scope="col" style={{ width: "10%" }}>Promedio</th>
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
                        const {
                          average,
                          firstAverage,
                          noteId,
                          secondAverage,
                          studentCode,
                          studentFirstName,
                          studentLastName,
                          studentName,
                          substitute,
                          thirdAverage,
                        } = item;
                        return (
                          <tr key={noteId}>
                            <th style={{ width: "5%" }} scope="row">{index + 1}</th>
                            <td style={{ width: "10%" }} >{studentCode}</td>
                            <td style={{ width: "35%" }} >{studentFirstName} {studentLastName} {studentName}</td>
                            <td style={{ width: "10%" }} >
                              <InputNote updateNote={updateNote} targetInput={{ noteId, state: firstPartial, name: 'firstAverage', value: firstAverage }} />
                            </td>
                            <td style={{ width: "10%" }} >
                              <InputNote updateNote={updateNote} targetInput={{ noteId, state: secondPartial, name: 'secondAverage', value: secondAverage }} />
                            </td>
                            <td style={{ width: "10%" }} >
                              <InputNote updateNote={updateNote} targetInput={{ noteId, state: thirdPartial, name: 'thirdAverage', value: thirdAverage }} />
                            </td>
                            <td style={{ width: "10%" }} >
                              <InputNote updateNote={updateNote} targetInput={{ noteId, state: thirdPartial, name: 'substitute', value: substitute }} />
                            </td>
                            <td style={{ width: "10%" }} >{average}</td>
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
      <div className='btn-save-notes'>
        <button className="btn btn-primary" onClick={handleSubmit}>GUARDAR CAMBIOS</button>
      </div>
    </>
  )
}


export default NoteEntry
