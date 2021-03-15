import React from 'react'
import "./CreateCareer.css";
import { useCreateCareer } from "../../../../../hooks/adminHooks/careerHooks";
import Message from '../../../../message/Message';

const CreateCareer = (props) => {
  const {
    messageError,
    error,
    newCareer,
    handleChange,
    resetState,
    handleSubmit
  } = useCreateCareer(props);
  
  const {code,name} = newCareer;

  return (
    <div className="col-lg-4">
      <div className="card create-new-career">
        <div className="card-header tex-center"><strong>CREATE NEW CAREER</strong></div>
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            {error && (
              <Message
                nameClass="alert-danger"
                value={messageError}
                metod={resetState}
              />
            )}
            <div className="form-group">
              <label>Code</label>
              <input className="form-control input-add-career"
                name="code" value={code}
                maxLength="4"
                onChange={handleChange}
                autocomplete="off"
              />
            </div>
            <div className="form-group mt-1">
              <label>Name</label>
              <input className="form-control input-add-career"
                name="name" value={name}
                onChange={handleChange}
                autocomplete="off"
              />
            </div>
          </div>
          <div className="card-header">
            <button className="btn btn-cyan w-100">save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCareer
