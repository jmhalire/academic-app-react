import React from "react";
import SelectCourse from "../SelectCourse";
import "./NoteEntry.css";
import { useNoteEntry } from "../../../../hooks/teacherHooks/noteEntryHook";
import InputNote from "./InputNote";

const NoteEntry = () => {

  const {
    ListStudents,
    SelectCourse: sc,
    dateConsult,
    handleSubmit,
    handleAddFirstNote,
    handleAddSecondNote,
    handleAddThirdNote,
    handleAddSubsNote,
    handleSubmitNoteEntry
  } = useNoteEntry();

  return (
    <div>
      <SelectCourse handle={handleSubmit} title={'NOTE ENTRY'} />
      {dateConsult && (
        <>
          <div className="card card-detail-course">
            <div className="card-header">
              <h6>INGRESO DE NOTAS</h6>
            </div>
            <div className="details-course px-2 mt-3">
              <div>
                <h5>Course</h5>
                <h5>Category</h5>
                <h5>Credits</h5>
              </div>
              <div>
                <h5>: {sc.name}</h5>
                <h5>: {sc.category}</h5>
                <h5>: {sc.credit}</h5>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmitNoteEntry}>
            <div className="card py-2 mt-2 card-entry-note">
              <table className="table table-bordered">
                <thead className="card-header">
                  <tr className="hover-student">
                    <th scope="col" style={{ width: "4%" }}>Nro</th>
                    <th scope="col" style={{ width: "8%" }}>Code</th>
                    <th scope="col" style={{ width: "35%" }}>Names</th>
                    <th scope="col" style={{ width: "8%" }}>Average 1</th>
                    <th scope="col" style={{ width: "8%" }}>Average 2</th>
                    <th scope="col" style={{ width: "8%" }}>Average 3</th>
                    <th scope="col" style={{ width: "8%" }}>Substitutory</th>
                    <th scope="col" style={{ width: "8%" }}>Average</th>
                    <th scope="col" style={{ width: "13%" }}>Observation</th>
                  </tr>
                </thead>
                <tbody className="card-body">
                  {
                    ListStudents.map((value, index) => {
                      const { note, register } = value;
                      const { student } = register;
                      return (
                        <tr key={value.id} className="hover-student">
                          <th scope="row">{index + 1}</th>
                          <td><span className="d-flex text-aling-items-center">{student.code}</span></td>
                          <td>{student.firstName}  {student.lastName} - {student.name}</td>
                          <InputNote
                            note={note}
                            handleAddFirstNote={handleAddFirstNote}
                            handleAddSecondNote={handleAddSecondNote}
                            handleAddThirdNote={handleAddThirdNote}
                            handleAddSubsNote={handleAddSubsNote}
                          />
                          <td>{note.average}</td>
                          <td>{note.observation}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              <div className="card-footer">
                <button className="btn btn-cyan btn-entry-notes" type="submit">
                  Save
              </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default NoteEntry
