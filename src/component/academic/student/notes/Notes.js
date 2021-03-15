import React from 'react'
import "./Notes.css";
import { useNotes } from "../../../../hooks/studentHooks/noteHook";

const Note = () => {

  const {
    ListSemesters,
    DateConsult,
    Notes,
    handleChange,
    getOneNotes
  } = useNotes();
  return (
    <div className="note">
      <div className="note-consult py-3">
        <h3 className="text-center">CONSULT NOTES</h3>
        <br />
        <form onSubmit={getOneNotes}>
          <div className="form-group semester">
            <h5 className="mx-1">Semester</h5>
            <select
              className="form-select form-select-note mx-1"
              name="semester"
              defaultValue="DEFAULT"
              onChange={handleChange}
            >
              {
                ListSemesters.map((item) => {
                  return <option key={item.id} value={item.id}>{item.code}</option>
                })
              }
            </select>
            <button type="submit" className="btn btn-brown mx-1">
              consult
            </button>
          </div>
        </form>
      </div>
      <br />
      {DateConsult && (
        <div className="card card-table-notes">
          <table className="table table-bordered">
            <thead className="card-header">
              <tr>
                <th scope="col" style={{ width: "2%" }}>Nro</th>
                <th scope="col" style={{ width: "9%" }}>Course</th>
                <th scope="col" style={{ width: "40%" }}>Name</th>
                <th scope="col" style={{ width: "4%" }}>Cred.</th>
                <th scope="col" style={{ width: "5%" }}>Cat.</th>
                <th scope="col" style={{ width: "6%" }}>P1</th>
                <th scope="col" style={{ width: "6%" }}>P2</th>
                <th scope="col" style={{ width: "6%" }}>P3</th>
                <th scope="col" style={{ width: "6%" }}>Sust.</th>
                <th scope="col" style={{ width: "5%" }}>Prom</th>
                <th scope="col" style={{ width: "11%" }}>observation</th>
              </tr>
            </thead>
            <tbody className="card-body">
              {
                Notes.map((register, index) => {
                  const { course } = register;
                  const { note } = register;
                  return (
                    <tr key={register.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{course.code}</td>
                      <td>{course.name}</td>
                      <td>{course.credit}</td>
                      <td>{course.category}</td>
                      <td className="info-note">{note.firstAverage}</td>
                      <td className="info-note">{note.secondAverage}</td>
                      <td className="info-note">{note.thirdAverage}</td>
                      <td>{note.substitute}</td>
                      <td className="average">{note.average}</td>
                      <td>{note.observation}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Note
