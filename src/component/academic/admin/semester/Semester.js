import React from "react";
import { useStateSemester } from "../../../../hooks/adminHooks/semesterHook";
import CreateSemester from "./createSemester/CreateSemester";
import EndSemester from "./endSemester/EndSemester";
import "./Semester.css";

const Semester = () => {


  const {
    listSemesters,
    stateSemester,
    registerActive,
    activeSemesterName,
    dateActiveRegister,
    createdSemester,
    handleInputChange,
    handleEndSemester,
    handleSubmit,
    handleFinalize
  } = useStateSemester();

  const { fromDate, toDate } = dateActiveRegister;
  return (
    <>
      <div className="header-semester p-3 my-2">
        <CreateSemester activeSemester={stateSemester} createdSemester={createdSemester}/>
        {stateSemester && (
          <EndSemester
            handleSemester={handleEndSemester}
            semester={activeSemesterName}
          />
        )}
      </div>
      <div className="card card-semester">
        <table className="table table-bordered">
          <thead className="card-header">
            <tr>
              <th scope="col" style={{ width: "5%" }}>Nro</th>
              <th scope="col" style={{ width: "18%" }}>Semester</th>
              <th scope="col" style={{ width: "18%" }}>Date init</th>
              <th scope="col" style={{ width: "18%" }}>Date end</th>
              <th scope="col" style={{ width: "18%" }}>State</th>
              <th scope="col" style={{ width: "18%" }}>Option</th>
            </tr>
          </thead>
          <tbody className="card-body">
            {
              listSemesters.map((semester, index) => {
                return (
                  <tr key={semester.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{semester.code}</td>
                    <td>{semester.fromDate}</td>
                    <td>{semester.toDate}</td>
                    {
                      semester.state === "ACTIVE" && (
                        <>
                          <td style={{ color: 'green' }}>{semester.state}</td>
                          {
                            registerActive
                              ? (
                                <td>
                                  <button className="btn btn-danger" onClick={handleFinalize}>disable register</button>
                                </td>
                              )
                              : <td>
                                <button className="btn btn-brown" data-toggle="modal" data-target="#activeRegisterModal">enable register</button>
                              </td>
                          }
                        </>
                      )
                    }
                    {
                      semester.state !== "ACTIVE" && (
                        <td style={{ color: 'red' }}>{semester.state}</td>
                      )
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className="modal fade" id="activeRegisterModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  ACTIVATE FOR REGISTER STUDENT
                  </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Date init</label>
                  <input type="date"
                    className="form-control input-create-semester"
                    name="fromDate"
                    value={fromDate}
                    onChange={handleInputChange} />
                </div><br />
                <div className="form-group">
                  <label>Date end</label>
                  <input type="date"
                    className="form-control input-create-semester"
                    name="toDate"
                    value={toDate}
                    onChange={handleInputChange} />
                </div>
              </div>
              <div className="modal-footer btn-create-semester">
                <button type="submit" onClick={handleSubmit} className="btn btn-cyan" data-dismiss="modal">
                  Activate
                  </button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">
                  Close
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Semester
