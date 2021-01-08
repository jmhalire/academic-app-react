import React from 'react'
import PropTypes from 'prop-types'
import "./CourseOffered.css"

const CourseOffered = (props) => {

    const { courseOffered, addCourse } = props;

    return (
        <div className="card card-register-student mt-2">
            <h5 className="title-course-offered">list of courses offered</h5>
            <table className="table table-bordered">
                <thead className="card-header">
                    <tr>
                        <th scope="col" style={{ width: "10%" }}>Election</th>
                        <th scope="col" style={{ width: "10%" }}>Code</th>
                        <th scope="col" style={{ width: "50%" }}>Name</th>
                        <th scope="col" style={{ width: "5%" }}>Credits</th>
                        <th scope="col" style={{ width: "5%" }}>Category</th>
                        <th scope="col" style={{ width: "10%" }}>#student</th>
                        <th scope="col" style={{ width: "10%" }}>limit</th>
                    </tr>
                </thead>
                <tbody className="card-body">
                    {
                        courseOffered.map((item, index) => {
                            return (
                                <tr key={item.code}>
                                    <td className="d-flex justify-content-center p-1">
                                        <button
                                            className="btn btn-brown"
                                            onClick={() => { addCourse(item) }}
                                        >
                                            add
                                            </button>
                                    </td>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.credit}</td>
                                    <td>{item.category}</td>
                                    <td>{item.nrostudent}</td>
                                    <td>{item.limit}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CourseOffered;
CourseOffered.propTypes = {
    courseOffered: PropTypes.array.isRequired,
    addCourse: PropTypes.func.isRequired
}

