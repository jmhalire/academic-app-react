import React from "react";
import { useActiveSemester } from "../../../../hooks/adminHooks/activeSemesterHook";
import "./ActiveSemester.css"


const ActiveSemester = () => {


  const {
    FirstButton,
    SecondButton,
    ThirdButton,
    semActive,
    registerActive,
    handleFirstButton,
    handleSecondButton,
    handleThirdButton
  } = useActiveSemester();

  const { code, fromDate, toDate } = semActive;

  return (
    <div className="card semester-active">
      {
        code === "-" && (
          <span className="not-semester">semester active does not exist</span>
        )
      }
      <div className="text-center mt-3">
        <h5 >ACTIVE SEMESTER</h5>
        <h5>{code}</h5>
      </div>
      <div className="row pb-3">
        <div className="col-sm-6">
          <div className="text-center">
            <h5>BEGINNING OF THE ACADEMIC SEMESTER</h5>
            <h5>{fromDate}</h5>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="text-center">
            <h5>END OF THE ACADEMIC SEMESTER</h5>
            <h5>{toDate}</h5>
          </div>
        </div>
      </div><hr />
      {
        registerActive && (
          <div className="row">
            <div className="col-sm">
              <h5 className="regsiter-active-text">REGISTER ACTIVE</h5>
              <div className="register-active py-2">
                <span >FROM DATE: <p className="register-active-register">{fromDate}</p></span>
                <span >TO DATE: <p className="register-active-register">{toDate}</p></span>
              </div>
            </div>
            <div className="col-sm">
              <h5 className="regsiter-active-text">ingreso de notas</h5>
              <div className="register-active py-2">
                <div >
                  FIRST NOTES:
                  <div>
                    <button className="btn btn-light"
                      onClick={handleFirstButton}>
                      {FirstButton}
                    </button>
                  </div>
                </div>
                <div >
                  SECOND NOTES:
                  <div>
                    <button className="btn btn-light"
                      onClick={handleSecondButton}>
                      {SecondButton}
                    </button>
                  </div>
                </div>
                <div >
                  THIRD NOTES:
                  <div>
                    <button className="btn btn-light"
                      onClick={handleThirdButton}>
                      {ThirdButton}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
export default ActiveSemester