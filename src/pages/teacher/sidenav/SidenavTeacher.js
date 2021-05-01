import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SidenavContext, TeacherContext } from '../../../context';


const SidenavTeacher = () => {

    const { courses, teacher } = useContext(TeacherContext);
    const { state } = useContext(SidenavContext);
    const { firstName, lastName, name } = teacher;
    /*se ejecuta despues de hacer el render dek+l DOM*/

    return (
        <div className={'sidenav ' + (state ? 'sidenav-show' : 'sidenav-hidden')}>
            <div className="profile">
                <div className="profile-photo"></div>
                <span className="profile-name"> {name} {firstName} {lastName}</span>
            </div>
            <ul className="sidenav-item">
                <NavLink activeClassName="active" className="sidenav-link" to="/home">
                    <i className="fas fa-home" style={{marginRight:'10px'}} aria-hidden="true"></i>
                    MENU PRINCIPAL
                </NavLink>
                <div className="course-asignated">
                    <span>CURSOS QUE SE TE ASIGNADOS</span>
                </div>
                {
                    courses.map((course) => {
                        return (
                            <NavLink activeClassName="active" key={course.code} className="sidenav-link" to={`/${course.code}`} >
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <i className="fas fa-book" style={{fontSize:'15px'}} aria-hidden="true"></i>
                                    <span className="code-course" style={{marginLeft:'10px'}}>{course.code}</span>
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
    )
}

// componentName.propTypes = {

// }

export default SidenavTeacher;
