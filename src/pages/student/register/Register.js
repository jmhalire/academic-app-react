import React from 'react';
import { useStateRegister } from '../../../hooks/studentHooks/registerHook/useRegister';
import CourseOffered from './CourseOffered';
import CourseSelected from './CourseSelected';

import './register.css';

const Register = () => {

    const {
        listCourseSelected,
        listCourseOffered,
        changeRegister,
        nroCredit,
        addCourse,
        removeCourse,
        handleChangeRegister
    } = useStateRegister();



    return (
        <>
            <div className="card">
                <div style={{ padding: '1rem' }}>
                    <h2 className="title-process-register">PROCESO DE MATRICULA</h2>
                    <span className="note-register">NOTA: Ud. va tener solamante 3 opciones(veces) de matricula a realizar, desde la fecha 20-11-2 hasta 25-11-2020</span>
                    <br />
                    <div className="btn-change-register">
                        <span className="option-register">Opcion de matricula realizada <strong>1</strong></span>
                        {
                            (changeRegister)
                                ? (
                                    <button className="btn btn-outline-tertiary" onClick={handleChangeRegister}>
                                        CANCELAR PROCESO
                                    </button>
                                )
                                : (
                                    <button className="btn btn-outline-primary" onClick={handleChangeRegister}>
                                        CAMBIAR REGISTRO
                                    </button>
                                )
                        }
                    </div>
                </div>
                <CourseSelected 
                    listCourseSelected={listCourseSelected} 
                    changeRegister={changeRegister} 
                    removeCourse={removeCourse} 
                    nroCredit={nroCredit}
                />
            </div>
            <br />
            {
                (changeRegister) &&
                <div className="card">
                    <CourseOffered listCourseOffered={listCourseOffered} addCourse={addCourse} />
                </div>
            }
            <div className="modal">
                <div className="modal-connten">
                    este mensajito
                </div>
            </div>
        </>
    )
}

export default Register
