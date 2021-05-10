import React from "react";
import "./EndSemester.css"


const EndSemester = ({handleSemester, semester}) => {

  const handleEndSemester = (e) => {
    e.preventDefault();
    handleSemester(false);
  }

  return (
    <div className="ml-auto">
        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#endSemesterModal">
          End semester {semester}
        </button>
        <div className="modal fade" id="endSemesterModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  end academic semester
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                ¿esta seguro de finalizar el semestre academico "{semester}"
              </div>
              <div className="modal-footer btns-confirm-end">
                <button type="button" className="btn btn-cyan btn-yes-end" data-dismiss="modal" onClick={handleEndSemester}>
                  yes
                </button>
                <button type="button" className="btn btn-danger btn-not-end" data-dismiss="modal">
                  not
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EndSemester;