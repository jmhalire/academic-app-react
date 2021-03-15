import React from "react";
import CreateTeacher from "./createTeacher/CreateTeacher";
import "./Teacher.css"
import { useListTeacher } from "../../../../../hooks/adminHooks/teacherHooks";

const Teacher = (props) => {

  const {
    listTeacher,
    setupdateList,
  } = useListTeacher();

  const { focus } = props;

  return (
    <div className="row">
      <div className="col-sm">
        <div className="card card-teacher-admin">
          <table className="table table-bordered">
            <thead className="card-header">
              <tr>
                <th scope="col" style={{ width: "4%" }}>Nro</th>
                <th scope="col" style={{ width: "8%" }}>Code</th>
                <th scope="col" style={{ width: "40%" }}>Name</th>
                <th scope="col" style={{ width: "20%" }}>E-mail</th>
                <th scope="col" style={{ width: "28%" }}>Speciality</th>
              </tr>
            </thead>
            <tbody className="card-body">
              {
                listTeacher.map((teacher, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{teacher.code}</td>
                      <td>{teacher.firstName} {teacher.lastName} - {teacher.name}</td>
                      <td>{teacher.email}</td>
                      <td>{teacher.speciality}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      {focus && <CreateTeacher
                setupdateList={setupdateList}
      />}
    </div>
  )
}

export default Teacher
