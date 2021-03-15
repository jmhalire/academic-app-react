import React, { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "./SelectCourse.css"
import { TeacherContext } from "../../../context";

const SelectCourse = (props) => {

  //context del teacher
  const { Courses } = useContext(TeacherContext);
  const [SelectCourse, setSelectCourse] = useState();

  //efecto
  useEffect(() => {
    if(Courses.length>0){
      setSelectCourse(Courses[0].course)
    }
  }, [Courses])

  const handleChange = (e) => {
    setSelectCourse(Courses[e.target.value].course)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handle(SelectCourse);
  };

  return (
    <form className="card card-course-select my-2 py-3" onSubmit={handleSubmit} >
      <h3 className="text-center">{props.title}</h3>
      <div className="form-group course-select py-3">
        <h5 className="mx-1">Course</h5>
        <select
          className="form-select mx-1 form-couse-select"
          name="semester"
          onChange={handleChange}
        >
          {
            Courses.map((value,index) => {
              let { course } = value;
              return (
                <option key={course.id} value={index}>
                  {course.name}
                </option>
              )
            })
          }
        </select>
        <button
          type="submit"
          className="btn btn-brown mx-1 btn-course-select"
        >
          Open
          </button>
      </div>
    </form>
  )
}

export default SelectCourse;

SelectCourse.propTypes = {
  title: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired
}


