import React from 'react';
import PropTypes from 'prop-types';
import './navigation.css';

const Navigation = ({ role, state, setState }) => {
    return (
        <div className="navbar">
            <ul className="nav-item">
                <button className="btn btn-outline-white" onClick={()=>{setState(!state)}}>+</button>
                <span className="role">{role}</span>
            </ul>
            <ul className="nav-item">
                <li className="nav-link">SALIR</li>
            </ul>
        </div>
    )
}

Navigation.propTypes = {
    role: PropTypes.string.isRequired,
    state: PropTypes.bool.isRequired,
    setState: PropTypes.func.isRequired
}

export default Navigation
