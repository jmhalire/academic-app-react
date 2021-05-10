import React from 'react';
import './semester.css';

const ActiveSemester = ({ semesterActive }) => {
    return (
        <div className="card card-semester">
            <div className="semester-active">
                <h1>semestre activo 2016-I</h1>
            </div><br/>
            <div className="start-end-semester">
                <div className="start">
                    <h4>inicio</h4>
                    {/* <h5>{semesterActive.fromDate}</h5> */}
                    <h5 className="answer">12-12-12</h5>
                </div>
                <div className="end">
                    <h4>finalizacion</h4>
                    {/* <h5>{semesterActive.toDate}</h5> */}
                    <h5 className="answer">12-12-12</h5>
                </div>
            </div>
            <div className="row">
                {/* <div class="col-sm">
                    <app-register></app-register>
                </div>
                <div class="col-sm">
                    <app-notes></app-notes>
                </div> */}
            </div>
        </div>
    )
}

export default ActiveSemester
