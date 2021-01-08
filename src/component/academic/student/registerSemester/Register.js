import React from 'react'
import "./Register.css"
import CourseOffered from "./coursesOffered/CourseOffered";
import SelectedCourse from "./selectedCourse/SelectedCourse";
import ProofRegistration from "./proofRegistration/ProofRegistration";
import { useRegister } from "../../../../hooks/studentHooks/registerHook";

const Register = () => {
  const {
    NroOption,
    AllowRegistration,
    ListCourseSelected,
    ListCourseOffered,
    ChangeRegister,
    setChangeRegister,
    addCourse,
    removeCourse,
    notChangeRegister
  } = useRegister();

  return (
    <>
      <div className="options">
        <label className="text-info my-2">
          NOTA: Ud. va tener solamante 3 opciones(veces) de matricula a realizar, desde la fecha
           <strong> 20-11-2</strong>  hasta <strong> 25-11-2020</strong>
        </label><hr/>
        <div className="d-flex align-items-center">
          <div className="text-info">
            <div className="p-2 d-flex">
              <span>Opcion de matricula realizada:</span>
              <h5 className="nroOption ml-2">{NroOption}</h5>
            </div>
          </div>
          {
            AllowRegistration &&
            <>
              {
                ChangeRegister
                  ? <button className="btn btn-danger ml-auto" onClick={notChangeRegister}>NOT CHANGE REGISTRATION</button>
                  : <button className="btn btn-cyan ml-auto" onClick={() => { setChangeRegister(true) }}>CHANGE COURSE REGISTRATION</button>
              }
            </>
          }
        </div>
      </div>
      {
        ChangeRegister
          ? <>
            <SelectedCourse
              registerCourse={ListCourseSelected}
              removeCourse={removeCourse}
              afterRegister={notChangeRegister}
            /><br/>
            <CourseOffered courseOffered={ListCourseOffered} addCourse={addCourse} />
          </>
          : <ProofRegistration registerCourse={ListCourseSelected} />

      }
    </>
  )
}
export default Register
