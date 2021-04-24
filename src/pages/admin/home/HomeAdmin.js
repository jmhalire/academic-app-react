import React from 'react';
import ActiveSemester from '../semester/ActiveSemester';
import ListSemester from '../semester/ListSemester';

import './homeAdmin.css'
const HomeAdmin = () => {
  return (
    <div className="home-admin">
      <div className="info">
        <ActiveSemester /><br/>
        <ActiveSemester /><br/>
        <ActiveSemester /><br/>

      </div>
      <div className="list">
        <ListSemester />
      </div>
    </div>
  )
}

export default HomeAdmin;
