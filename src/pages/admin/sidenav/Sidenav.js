import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sidenav = ({ state }) => {
  const handleLink = ({target}) => {
    let links = [...target.parentElement.children]
    links.forEach(element => {
      element.classList.remove('active')
    });
    target.classList.add('active')
  }
  return (
    <div className={'sidenav ' + (state ? 'sidenav-show' : 'sidenav-hidden')}>
      <div className="profile">
        <div className="profile-photo"></div>
        <span className="profile-name">jaime andre halire huaman</span>
      </div>
      <ul className="sidenav-item">
        <Link className="sidenav-link active" to="/admin/home" onClick={handleLink}>HOME</Link>
        <Link className="sidenav-link" to="/admin/career" onClick={handleLink}>CAREERS</Link>
        <Link className="sidenav-link" to="/admin/course" onClick={handleLink}>COURSES</Link>
        <Link className="sidenav-link" to="/admin/asignation-techer" onClick={handleLink}>ASIGNATION TEACHER</Link>
      </ul>
    </div>
  )
}

Sidenav.propTypes = {
  state: PropTypes.bool.isRequired
}

export default Sidenav
