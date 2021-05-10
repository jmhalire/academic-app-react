import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StudentContext, UserContext } from '../../../context';

const SidenavStudent = () => {

    const { semActive } = useContext(UserContext);
    const { code } = semActive;
    const { courses, student } = useContext(StudentContext);
    const { firstName, lastName, name } = student;

    /*se ejecuta despues de hacer el render dek+l DOM*/

    return (
        <>
            <div id='sidenav' className='sidenav'>
                <div className="profile">
                    <div className="profile-photo"></div>
                    <span className="profile-name">{name} {firstName} {lastName}</span>
                </div>
                <ul id='links' className="sidenav-item">
                    <NavLink activeClassName="active" className="sidenav-link" to="/home">
                        <i className="fas fa-home" style={{ marginRight: '10px' }} aria-hidden="true"></i>
                    MENU PRINCIPAL
                </NavLink>
                    <NavLink activeClassName="active" className="sidenav-link" to="/constance-notes">CONSTANCIA DE NOTAS Y MATRICULA</NavLink>
                    <NavLink activeClassName="active" className="sidenav-link" to="/process-register">
                        <i className="fas fa-pen" style={{ marginRight: '10px' }} aria-hidden="true"></i>
                    PROCESO DE MATRICULA
                </NavLink>
                    <div className="course-asignated">
                        <span>MIS CURSOS - {code}</span>
                    </div>
                    {
                        courses.map((course) => {
                            return (
                                <NavLink activeClassName="active" key={course.code} className="sidenav-link" to={`/${course.code}`} >
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <i className="fas fa-book" style={{ fontSize: '15px' }} aria-hidden="true"></i>
                                        <span className="code-course" style={{ marginLeft: '10px' }}>{course.code}</span>
                                    </div>
                                    <div>
                                        <span className="name-course">{course.name}</span>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default SidenavStudent;
