import React from "react";
import "./CurrentSemester.css";
import image1 from "../../../../images/image1.jpg";
import { useCurrentSemester } from "../../../../hooks/studentHooks/currentSemesterHook";

const CurrentSemester = () => {

  const {
    student,
    semActive
  } = useCurrentSemester();

  const { career } = student;

  return (
    <div className="current-semester p-2">
      <h4 className="text-center">{semActive.code} SEMESTER INFORMATION</h4>
      <div className="info-student mb-4">
        <div className="date1 my-auto">
          <div className="date-student">
            <h5>Student:</h5>
            <h6>{student.firstName} {student.lastName} - {student.name}</h6>
          </div>
          <div className="date-student">
            <h5>Code:</h5>
            <h6>{student.code}</h6>
          </div>
          <div className="date-student">
            <h5>career:</h5>
            {
              career
                ? <h6>{career.name || "-"}</h6>
                : <h6>-</h6>
            }
          </div>
        </div>
        <div className="date2 my-auto">
          <div className="date-student">
            <h5>Active Semester:</h5>
            <h6>{semActive.code}</h6>
          </div>
          <div className="date-student">
            <h5>Average</h5>
            <h6>20.00</h6>
          </div>
          <div className="date-student">
            <h5>Acumulated Credits:</h5>
            <h6>210</h6>
          </div>
        </div>
        <div className="date3">
          {/* "http://ccomputo.unsaac.edu.pe/alumno/fotos/141670.jpg"  */}
          <img
            srcSet={image1}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  )
}

export default CurrentSemester
