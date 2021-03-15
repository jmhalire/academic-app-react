import React from 'react';
import Message from "../../../../../message/Message";
import "./CreateStudent.css";
import { useCreateStudent } from "../../../../../../hooks/adminHooks/studentHooks";

const CreateStudent = (props) => {

  const {
    messageError,
    error,
    newStudent,
    handleChange,
    resetState,
    handleSubmit
  } = useCreateStudent(props);

  const { listCareer } = props;

  const {code,key,confirmKey,name,firstName,lastName} = newStudent;


  return (
    <div className="col-lg-4">
      <div className="card create-new-student">
        <div className="card-header">
          <h5 className="text-center">CREATE NEW STUDENT</h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            {error && (
              <Message
                nameClass="alert-danger"
                value={messageError}
                method={resetState}
              />
            )}
            <div className="form-group">
              <label>Career</label>
              <select className="form-select input-add-course" name="career" onChange={handleChange}>
                <option value="" selected disabled>selected career</option>
                {
                  listCareer.map((career) => {
                    return (
                      <option key={career.id} value={career.id}>{career.name}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className="form-group">
              <label>Names</label>
              <input type="text"
                value={name}
                name="name"
                className="form-control input-student-admin"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="row mt-1">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>FirstName</label>
                  <input type="text"
                    value={firstName}
                    name="firstName"
                    className="form-control input-student-admin"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>LastName</label>
                  <input type="text"
                    value={lastName}
                    name="lastName"
                    className="form-control input-student-admin"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-1">
              <label>Code</label>
              <input type="text" className="form-control input-student-admin"
                value={code}
                name="code"
                minLength="6"
                maxLength="6"
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="row mt-1">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Key</label>
                  <input type="password" className="form-control input-student-admin"
                    value={key}
                    name="key"
                    minLength="5"
                    maxLength="5"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Confirm Key</label>
                  <input type="password" className="form-control input-student-admin"
                    value={confirmKey}
                    name="confirmKey"
                    minLength="5"
                    maxLength="5"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-header">
            <button type="submit" className="btn btn-cyan btn-block">save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateStudent
