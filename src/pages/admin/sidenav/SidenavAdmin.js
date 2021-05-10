import React from 'react';
import { Link } from 'react-router-dom';

const SidenavAdmin = () => {

  const handleLink = ({target}) => {
    let links = [...target.parentElement.children]
    links.forEach(element => {
      element.classList.remove('active')
    });
    target.classList.add('active')
  }

  return (
    <div id='sidenav' className='sidenav'>
      <div className="profile">
        <div className="profile-photo"></div>
        <span className="profile-name">jaime andre halire huaman</span>
      </div>
      <ul className="sidenav-item">
        <Link className="sidenav-link active" to="/admin/home" onClick={handleLink}>MENU PRINCIPAL</Link>
        <Link className="sidenav-link" to="/admin/career" onClick={handleLink}>CARRERAS</Link>
        <Link className="sidenav-link" to="/admin/course" onClick={handleLink}>CURSOS</Link>
        <Link className="sidenav-link" to="/admin/asignation-techer" onClick={handleLink}>ASIGNACION DE DOCENTES</Link>
      </ul>
    </div>
  )
}


export default SidenavAdmin;
