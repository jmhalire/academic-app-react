import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SidenavContext, StudentContex, UserContext } from '../../../context';

const SidenavStudent = () => {

    const { state } = useContext(SidenavContext);
    const { semActive } = useContext(UserContext);
    const { code } = semActive;
    const { courses, student } = useContext(StudentContex);
    const { firstName, lastName, name } = student;

    /*se ejecuta despues de hacer el render dek+l DOM*/

    return (
        <div className={'sidenav ' + (state ? 'sidenav-show' : 'sidenav-hidden')}>
            <div className="profile">
                <div className="profile-photo"></div>
                <span className="profile-name">{name} {firstName} {lastName}</span>
            </div>
            <ul id='links' className="sidenav-item">
                <NavLink activeClassName="active" className="sidenav-link" to="/home">MENU PRINCIPAL</NavLink>
                <NavLink activeClassName="active" className="sidenav-link" to="/constance-notes">CONSTANCIA DE NOTAS Y MATRICULA</NavLink>
                <NavLink activeClassName="active" className="sidenav-link" to="/process-register">PROCESO DE MATRICULA</NavLink>
                <div className="course-asignated">
                    <span>MIS CURSOS - {code}</span>
                </div>
                {
                    courses.map((course) => {
                        return (
                            <NavLink activeClassName="active" key={course.code} className="sidenav-link" to={`/${course.code}`} >
                                <span className="code-course">{course.code}</span><br />
                                <span className="name-course">{course.name}</span>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SidenavStudent;
