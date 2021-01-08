import React from 'react'
import "./Signin.css";
import Message from "../message/Message";
import { useStateSignin } from '../../hooks/useSignin'

const Signin = () => {
  const {
    values,
    error,
    message,
    handleInputChange,
    handleSubmit,
    resetState
  } = useStateSignin();

  const { code, key } = values;

  //const res = useFetchSignin(formValues);

  /* funcion de submit */
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    handleSubmit();
  };


  return (
    <>
    
    <div className="card login">
      <div className="card-header text-center">
        <h4 className="card-title">
          <i className="fal fa-fw fa-user" aria-hidden="true"></i>LOGIN
            </h4>
      </div>
      <div className="card-body pt-4">
      {error && (
          <Message
            nameClass="alert-danger"
            value={message}
            method={resetState}
          />
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h5>Code</h5>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control input-signin"
                  name="code"
                  onChange={handleInputChange}
                  value={code}
                  maxLength="6"
                />
              </div>
            </div>
          </div>
          <br />
          <div className="form-group">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h5>Key</h5>
              </div>
              <div className="col-md-8">
                <input
                  className="form-control input-signin"
                  name="key"
                  onChange={handleInputChange}
                  value={key}
                  maxLength="5"
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-info w-100 mt-4">
            Send
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signin;
