import React from "react";
import "./CreateCourse.css";
import { useCreateCourse } from "../../../../../hooks/adminHooks/courseHooks";
import Message from "../../../../message/Message";


const CreateCourse = (props) => {

  const {
    messageError,
    error,
    newCourse,
    handleChange,
    resetState,
    handleSubmit
  } = useCreateCourse(props);

  const { listCareer } = props;

  const { code, name} = newCourse

  return (
    <div className="col-lg-4">
      <div className="card create-new-career">
        <div className="card-header tex-center"><strong>CREATE NEW COURSE</strong></div>
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
            <div className="form-group mt-1">
              <label>Code</label>
              <input className="form-control input-add-course"
                name="code"
                value={code}
                maxLength="8"
                onChange={handleChange}
                autocomplete="off"
              />
            </div>
            <div className="form-group mt-1">
              <label>Name</label>
              <input className="form-control input-add-course"
                name="name"
                value={name}
                onChange={handleChange}
                autocomplete="off"
              />
            </div>
            <div className="row mt-1">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Category</label>
                  <select className="form-select input-add-course" name="category" onChange={handleChange}>
                    <option value="OE" selected>OE</option>
                    <option value="EE" >EE</option>
                    <option value="ECG" >ECG</option>
                    <option value="OCG" >OCG</option>
                    <option value="AC" >AC</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Credit</label>
                  <select className="form-select input-add-course" name="credit" onChange={handleChange}>
                    <option value="1" selected>1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    <option value="4" >4</option>
                    <option value="5" >5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-header">
            <button className="btn btn-cyan btn-block">save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCourse
