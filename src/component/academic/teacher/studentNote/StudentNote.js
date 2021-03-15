import React from "react";
import SelectCourse from "../SelectCourse";
import "./StudentNote.css";
import { useStudentNote } from "../../../../hooks/teacherHooks/studentNoteHook";

const StudentNote = () => {

  const {
    Notes,
    SelectCourse: sc,
    dateConsult,
    handleSubmit
  } = useStudentNote();

  return (
    <div>
      <SelectCourse handle={handleSubmit} title={'STUDENT NOTES'} />
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
                  <th scope="col" style={{ width: "5%" }}>
                    Nro
                    </th>
                  <th scope="col" style={{ width: "10%" }}>
                    Code
                    </th>
                  <th scope="col" style={{ width: "35%" }}>
                    Name
                    </th>
                  <th scope="col" style={{ width: "6%" }}>
                    P1
                    </th>
                  <th scope="col" style={{ width: "6%" }}>
                    P2
                    </th>
                  <th scope="col" style={{ width: "6%" }}>
                    P3
                    </th>
                  <th scope="col" style={{ width: "7%" }}>
                    Sust.
                    </th>
                  <th scope="col" style={{ width: "10%", backgroundColor: "white" }}>
                    Promedio
                    </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Observation
                    </th>
                </tr>
              </thead>
              <tbody>
                {
                  Notes.map((value, index) => {
                    const { note, register } = value;
                    const { student } = register;
                    return (
                      <tr key={value.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{student.code}</td>
                        <td>{`${student.firstName}  ${student.lastName} - ${student.name}`}</td>
                        <td>{note.firstAverage}</td>
                        <td>{note.secondAverage}</td>
                        <td>{note.thirdAverage}</td>
                        <td>{note.substitute}</td>
                        <td>{note.average}</td>
                        <td>{note.obervation}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}

export default StudentNote
