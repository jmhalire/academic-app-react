import React from "react";
import { useCreateSemester } from "../../../../../hooks/adminHooks/createSemesterHook";
import "./CreateSemester.css";

const CreateSemester = ({ activeSemester, createdSemester }) => {

  const {
    dataSemester,
    handleChange,
    handleSubmitCreateSemester
  } = useCreateSemester(createdSemester);

  const { code, fromDate, toDate } = dataSemester;
  return (
    <div>
      <button type="button" className="btn btn-cyan" data-toggle="modal" data-target="#createdSemesterModal">
        Create new semester
      </button>
      <div className="modal fade" id="createdSemesterModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <form >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  CREATED NEW SEMESTER
                  </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {!activeSemester && (
                  <>
                    <div className="form-group">
                      <label>Semester code</label>
                      <input type="text" 
                        name="code"
                        className="form-control input-create-semester"
                        value={code}
                        onChange={handleChange} placeholder="2020-1, 2020-2, 2021-1, 2021-2, ..."
                        maxLength="6" />
                    </div><br />
                    <div className="form-group">
                      <label>Date init</label>
                      <input type="date" 
                        name="fromDate"
                        className="form-control input-create-semester"
                        value={fromDate}
                        onChange={handleChange} />
                    </div><br />
                    <div className="form-group">
                      <label>Date end</label>
                      <input type="date"
                        className="form-control input-create-semester"
                        name="toDate"
                        value={toDate}
                        onChange={handleChange} />
                    </div>
                  </>
                )}
                {activeSemester && (
                  <h1>here not content {activeSemester}</h1>
                )}
              </div>
              <div className="modal-footer btn-create-semester">
                {!activeSemester && (
                  <>
                    <button type="button" onClick={handleSubmitCreateSemester} className="btn btn-cyan" data-dismiss="modal">
                      Save
                      </button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">
                      Close
                      </button>
                  </>
                )}
                {activeSemester && (
                  <>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">
                      Close
                      </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CreateSemester
