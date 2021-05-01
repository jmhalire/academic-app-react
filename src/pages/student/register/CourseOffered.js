import React from 'react';
import PropTypes from 'prop-types';

const CourseOffered = ({ listCourseOffered, addCourse }) => {
    return (
        <>
            <h2 className="title-course-selected-offered">LISTA DE CURSOS OFRECIDOS PARA UD.</h2>
            <div className="table-header">
                <table className="table">
                    <thead >
                        <tr>
                            <th scope="col" style={{ width: "8%" }}>Elegir</th>
                            <th scope="col" style={{ width: "12%" }}>Codigo</th>
                            <th scope="col" style={{ width: "50%" }}>Nombre</th>
                            <th scope="col" style={{ width: "10%" }}>Creditos</th>
                            <th scope="col" style={{ width: "10%" }}>Categoria</th>
                            <th scope="col" style={{ width: "10%" }}># estudiantes</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="table-body">
                <table className="table">
                    <tbody>
                        {
                            (listCourseOffered.length > 0)
                                ?
                                (listCourseOffered.map((course) => {
                                    return (
                                        <tr key={course.id}>
                                            <th scope="col" style={{ width: "8%" }}>
                                                <button className="btn btn-primary btn-rest" onClick={() => { addCourse(course.id) }}>+</button>
                                            </th>
                                            <td style={{ width: "12%" }} >{course.code}</td>
                                            <td style={{ width: "50%" }} >{course.name}</td>
                                            <td style={{ width: "10%" }} >{course.credit}</td>
                                            <td style={{ width: "10%" }} >{course.category}</td>
                                            <td style={{ width: "10%" }} >{course.nroStudent}</td>
                                        </tr>
                                    )
                                }))
                                : (
                                    <tr>
                                        <td style={{ textAlign: 'center', color: 'darkcyan' }}>No hay cursos ofrecidos</td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

CourseOffered.propTypes = {
    listCourseOffered: PropTypes.array.isRequired,
    addCourse: PropTypes.func.isRequired
}

export default CourseOffered;
