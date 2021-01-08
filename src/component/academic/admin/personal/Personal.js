import React from "react";
import "./Personal.css";
import Teacher from "./teachers/Teacher";
import Student from "./students/Student";
import { usePersonal } from "../../../../hooks/adminHooks/personalHooks";

const Personal = () => {

  const {
    student,
    newStudent,
    newTeacher,
    setstudent,
    settecher,
    setnewStudent,
    setnewTeacher
  } = usePersonal();

  return (
    <div className="course-admin">
      <div className="header-course-admin p-3 my-2">
        <button className="btn btn-brown mr-1"
          onClick={() => {
            setstudent(true);
            settecher(false);
          }}
        >
          List student
        </button>
        <button className="btn btn-brown ml-1"
          onClick={() => {
            setstudent(false);
            settecher(true);
            //this.setState({ student: false, teacher: true, newTeacher: false })
          }}
        >
          list teacher
        </button>
        {student
          ? <button className="btn btn-cyan ml-auto" onClick={() => { setnewStudent(!newStudent) }}>
            create new student
            </button>
          : <button className="btn btn-primary ml-auto" onClick={() => { setnewTeacher(!newTeacher) }}>
            create new teacher
            </button>
        }

      </div>
      {student
        ? <Student focus={newStudent} />
        : <Teacher focus={newTeacher} />
      }
    </div>
  )
}

export default Personal
