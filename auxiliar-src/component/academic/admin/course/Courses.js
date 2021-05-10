import React from 'react'
import "./Courses.css";
import CreateCourse from "./createCourse/CreateCourse";
import { useListCourse } from "../../../../hooks/adminHooks/courseHooks";

const Courses = () => {
  const {
    createCourse,
    listCareer,
    listCourse,
    setupdateList,
    setcreateCourse,
  } = useListCourse();


  return (
    <div className="course-admin">
      <div className="header-course-admin p-3 my-2">
        <button
          className="btn btn-cyan btn-new-course"
          onClick={()=>{setcreateCourse(!createCourse)}}
        >
          create new ccourse
      </button>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="card card-course-admin">
            <table className="table table-bordered">
              <thead className="card-header">
                <tr>
                  <th scope="col" style={{ width: "5%" }}>Nro</th>
                  <th scope="col" style={{ width: "8%" }}>Code</th>
                  <th scope="col" style={{ width: "71%" }}>Name</th>
                  <th scope="col" style={{ width: "8%" }}>Credit</th>
                  <th scope="col" style={{ width: "8%" }}>Category</th>
                </tr>
              </thead>
              <tbody className="card-body">
                {
                  listCourse.map((course, index) => {
                    return (
                      <tr key={course.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{course.code}</td>
                        <td>{course.name}</td>
                        <td>{course.credit}</td>
                        <td>{course.category}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        {createCourse &&
          <CreateCourse
            setupdateList={setupdateList}
            listCareer={listCareer}
          />
        }
      </div>
    </div>
  )
}

export default Courses
