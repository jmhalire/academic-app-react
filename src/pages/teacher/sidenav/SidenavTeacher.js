import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SidenavContext, TeacherContext } from '../../../context';


const SidenavTeacher = () => {

    const { courses } = useContext(TeacherContext);
    const { state } = useContext(SidenavContext);

    /*se ejecuta despues de hacer el render dek+l DOM*/

    return (
        <div className={'sidenav ' + (state ? 'sidenav-show' : 'sidenav-hidden')}>
            <div className="profile">
                <div className="profile-photo"></div>
                <span className="profile-name">jaime andre halire huaman</span>
            </div>
            <ul className="sidenav-item">
                <NavLink activeClassName="active" className="sidenav-link" to="/home">MENU PRINCIPAL</NavLink>
                <div className="course-asignated">
                    <span>CURSOS QUE SE TE ASIGNADOS</span>
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

// componentName.propTypes = {

// }

export default SidenavTeacher;
