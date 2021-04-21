import React from 'react';
import './semester.css';

const ActiveSemester = ({ semesterActive }) => {
    return (
        <div className="card card-semester">
            <div className="semester-active">
                <h5>SEMESTRE ACTIVO</h5>
                {/* <h5>{semesterActive.code}</h5> */}
                <h5>2016-1</h5>

            </div><br/>
            <div className="start-end-semester">
                <div className="start">
                    <h5>INICIO DEL SEMESTRE ACADEMICO</h5>
                    {/* <h5>{semesterActive.fromDate}</h5> */}
                    <h5>12-12-12</h5>
                </div>
                <div className="end">
                    <h5>FINALIZACION DEL SEMESTRE ACADEMICO</h5>
                    {/* <h5>{semesterActive.toDate}</h5> */}
                    <h5>12-12-12</h5>
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
