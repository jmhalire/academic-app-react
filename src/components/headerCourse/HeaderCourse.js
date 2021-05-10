import React, { useContext } from "react";
import { CourseContext } from "../../context";
import PropTypes from "prop-types";

import './headerCourse.css';

const HeaderCourse = ({ setShowHiddenRoom, showHiddenRoom }) => {

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
              (user.roles === 'TEACHER') && (<span className="career">Carrera: {course.nameCareer}</span>)
            }
          </div>
        </div>
        <div className="icon-book-right">
          <i className="fas fa-book" aria-hidden="true"></i>
        </div>
      </div>
      <div className="btn-join-sala">
        {
          (!showHiddenRoom) &&
          (
            <button className="btn btn-tertiary" onClick={()=>{setShowHiddenRoom(!showHiddenRoom)}}>
              UNIRME A LA CLASE VIRTUAL
            </button>
          )
        }
      </div>
    </div>
  )
}

HeaderCourse.propTypes = {
  setShowHiddenRoom: PropTypes.func.isRequired,
  showHiddenRoom: PropTypes.bool.isRequired
}

export default HeaderCourse;

