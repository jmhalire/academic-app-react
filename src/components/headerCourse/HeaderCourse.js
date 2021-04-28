import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../../context";

import './headerCourse.css';

const HeaderCourse = ({ course }) => {

  const { user } = useContext(AuthContext);

  return (
    <div className="header-course">
      <div className="icon-left">icon 1</div>
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
      <div className="icon-right">icon 2</div>
    </div>
  )
}

HeaderCourse.propTypes = {
  course: PropTypes.object.isRequired
}

export default HeaderCourse;

