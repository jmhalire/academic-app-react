import React from 'react';
import PropTypes from 'prop-types';
import { useStateListCourse } from '../../../hooks/adminHooks/courseHook/useListCourse';
import Loader from '../../../components/loader/Loader';

const ListCourse = ({ selectCareer }) => {

    const { id, name } = selectCareer;
    const {
        loader,
        listCourse
    } = useStateListCourse({ id });


    return (
        <>
            <div className="card-list">
                <span className="select-career-name">{name}</span>
                <div className="table-header-admin">
                    <table className="table">
                        <thead >
                            <tr>
                                <th scope="col" style={{ width: "5%" }}>Nro</th>
                                <th scope="col" style={{ width: "10%" }}>Codigo</th>
                                <th scope="col" style={{ width: "65%" }}>Nombre</th>
                                <th scope="col" style={{ width: "10%" }}>Creditos</th>
                                <th scope="col" style={{ width: "10%" }}>Categoria</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="t-body-admin">
                    {
                        (loader)
                            ? (<Loader />)
                            : (
                                <table className="table">
                                    <tbody>
                                        {
                                            (listCourse.length > 0)
                                                ?
                                                (listCourse.map((course, index) => {
                                                    return (
                                                        <tr key={course.id}>
                                                            <th style={{ width: "5%" }} scope="row">{index + 1}</th>
                                                            <td style={{ width: "10%" }} >{course.code}</td>
                                                            <td style={{ width: "65%" }} >{course.name}</td>
                                                            <td style={{ width: "10%", textAlign: 'center' }} >{course.credit}</td>
                                                            <td style={{ width: "10%", textAlign: 'center' }} >{course.category}</td>
                                                        </tr>
                                                    )
                                                }))
                                                : (
                                                    <tr>
                                                        <td style={{ textAlign: 'center', color: 'darkcyan' }}>No hay cursos para esta carrera.</td>
                                                    </tr>
                                                )
                                        }
                                    </tbody>
                                </table>
                            )
                    }
                </div>
            </div>
        </>
    )
}

ListCourse.propTypes = {
    selectCareer: PropTypes.object.isRequired
}

export default ListCourse
