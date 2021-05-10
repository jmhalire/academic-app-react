import React from "react";
import CreateStudent from "./createStudent/CreateStudent";
import "./Student.css"
import { useListStudent } from "../../../../../hooks/adminHooks/studentHooks";

const Student = (props) => {

  const {
    listStudent,
    listCareer,
    setupdateList
  } = useListStudent();
  const { focus } = props;
  return (
      <div className="row">
        <div className="col-sm">
          <div className="card card-student-admin">
            <table className="table table-bordered">
              <thead className="card-header">
                <tr>
                  <th scope="col" style={{ width: "4%" }}>Nro</th>
                  <th scope="col" style={{ width: "8%" }}>Code</th>
                  <th scope="col" style={{ width: "40%" }}>Name</th>
                  <th scope="col" style={{ width: "20%" }}>E-mail</th>
                  <th scope="col" style={{ width: "28%" }}>Career</th>
                </tr>
              </thead>
              <tbody className="card-body">
                {
                  listStudent.map((student, index) => {
                    return (
                      <tr key={student.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{student.code}</td>
                        <td>{student.firstName} {student.lastName} - {student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.career.name}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        {focus && <CreateStudent
                      setupdateList={setupdateList}
                      listCareer={listCareer}
        />}
      </div>
  )
}

export default Student
