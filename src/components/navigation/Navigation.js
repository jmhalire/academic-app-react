import React, { useContext } from 'react';
import { AuthContext, SidenavContext } from '../../context';
import { typesLogin, typesSidenav } from "../../types/types";

import './navigation.css';


const Navigation = () => {

    const { user, dispatch: dispatchAuth } = useContext(AuthContext);
    const { state, dispatch: dispatchSidenav } = useContext(SidenavContext);
    const { role } = user;

    const handleDispatchAuth = () => {
        dispatchAuth({ type: typesLogin.logout })
    }

    const handleDispatchSidenav = () => {
        let type = state ? typesSidenav.hidden : typesSidenav.show;
        dispatchSidenav({ type });
    }

    return (
        <div className="navbar">
            <ul className="nav-item">
                <i class="fas fa-bars btn-sidenav" onClick={handleDispatchSidenav}></i>

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
