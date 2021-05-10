import React, { useContext } from 'react';
import { AuthContext } from '../../context';
import { typesLogin } from "../../types/types";

import './navigation.css';


const Navigation = ({ handleSidenav }) => {

    const { user, dispatch: dispatchAuth } = useContext(AuthContext);
    const { role } = user;

    const handleDispatchAuth = () => {
        dispatchAuth({ type: typesLogin.logout })
    }


    return (
        <div className="navbar">
            <ul className="nav-item">
                <i className="fas fa-bars btn-sidenav" onClick={handleSidenav}></i>

                {/* <button className="btn btn-outline-white btn-sidenav" onClick={handleDispatchSidenav}>+</button> */}
                <span className="role">{role}</span>
            </ul>
            <ul className="nav-item">
                <li className="nav-link" onClick={handleDispatchAuth}>SALIR</li>
            </ul>
        </div>
    )
}

export default Navigation
