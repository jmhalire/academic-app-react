import React from 'react';
import PropTypes from 'prop-types';

const CourseSelected = ({ changeRegister, listCourseSelected, removeCourse, nroCredit }) => {
    return (
        <>
            <h2 className="title-course-selected-offered">LISTA DE CURSOS SELECCIONADOS EN EL SEMESTRE 2016-II</h2>
            <h3 style={{ marginLeft: '10px' }}>Nro de creditos: <strong>{nroCredit}</strong></h3>
            <div className="table-header">
                <table className="table">
                    <thead >
                        <tr>
                            {
                                (changeRegister)
                                    ? <th scope="col" style={{ width: "8%" }}>Elegir</th>
                                    : <th scope="col" style={{ width: "8%" }}>Nro</th>
                            }
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
                            (listCourseSelected.length > 0)
                                ?
                                (listCourseSelected.map((course, index) => {
                                    return (
                                        <tr key={course.id}>
                                            {
                                                (changeRegister)
                                                    ? (
                                                        <th scope="col" style={{ width: "8%" }}>
                                                            <button className="btn btn-secondary btn-rest" onClick={() => { removeCourse(course.id) }}>-</button>
                                                        </th>
                                                    )
                                                    : <th style={{ width: "8%" }} scope="row">{index + 1}</th>
                                            }
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
                                        <td style={{ textAlign: 'center', color: 'darkcyan' }}>No hay cursos seleccionados</td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
            {
                (changeRegister) &&
                <div className="btn-save-changes">
                    <button className="btn btn-primary">GUARDAR CAMBIOS</button>
                </div>
            }

        </>
    )
}

CourseSelected.propTypes = {
    changeRegister: PropTypes.bool.isRequired,
    listCourseSelected: PropTypes.array.isRequired,
    removeCourse: PropTypes.func.isRequired,
    nroCredit: PropTypes.number.isRequired
}

export default CourseSelected;

