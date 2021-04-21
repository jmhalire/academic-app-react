import React, { createRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Sidenav = ({state}) => {

  return (
    <div className={'sidenav ' + (state ? 'sidenav-show' : 'sidenav-hidden')}>
      <div className="profile">
        <div className="profile-photo"></div>
        <span className="profile-name">jaime andre halire huaman</span>
      </div>
      <ul className="sidenav-item">
        <Link className="sidenav-link active" to="/admin/semester">SEMESTER</Link>
        <Link className="sidenav-link" to="/admin/career">CAREERS</Link>
        <Link className="sidenav-link" to="/admin/course">COURSES</Link>
        <Link className="sidenav-link" to="/admin/dsdsd">ASIGNATION TEACHER</Link>
        <Link className="sidenav-link" to="/admin/dsdsdsd">REGISTER SEMESTER</Link>
      </ul>
    </div>
  )
}

Sidenav.propTypes = {
  state : PropTypes.bool.isRequired
}

export default Sidenav
