import React, { useContext } from "react";
import { CourseContext } from "../../context";

import './headerCourse.css';

const HeaderCourse = () => {

  const { course, user } = useContext(CourseContext);

  return (
    <div className="content-headeer-course">
      <div className="header-course">
        <div className="icon-book-left">
          <i className="fas fa-book" aria-hidden="true"></i>
        </div>
        <div className="info-myCourse">
          <h1 className="course-name">{course.name}</h1><br />
          <div className="info">
            <span className="code">Codigo: {course.code}</span>
            <span className="category">Categoria: {course.category}</span>
            <span className="credit">Creditos: {course.credit}</span>
            {
              (user === 'TEACHER') && (<span className="career">Carrera: {course.nameCareer}</span>)
            }
          </div>
        </div>
        <div className="icon-book-right">
          <i className="fas fa-book" aria-hidden="true"></i>
        </div>
      </div>
      <div className="btn-join-sala">
        <button className="btn btn-tertiary">UNIRME A LA CLASE VIRTUAL</button>
      </div>
    </div>
  )
}


export default HeaderCourse;

