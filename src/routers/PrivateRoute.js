import React, { useReducer } from 'react'
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import RouterAdmin from './RouterAdmin';
import RouterTeacher from './RouterTeacher';
import RouterStudent from './RouterStudent';
import { SidenavContext, UserContext } from '../context';
import { sidenavReducer } from '../reducer';
import { useAppRouter } from '../hooks/appRouterHook';

const PrivateRoute = ({ isAuthenticated }) => {

    const { role } = isAuthenticated;

    const init = () => {
        return { state: true }
    }
    const [state, dispatch] = useReducer(sidenavReducer, {}, init);

    let clase = (state ? 'sidenav-close' : 'sidenav-open');
    if (window.innerWidth < 1200) {
        clase = '';
    }

    const {
        semActive,
        isMessage,
        message,
        setIsMessage,
        setMessage,
    } = useAppRouter();

    return (
        //verificamos si esta logeado
        //caso contrario redirigimos a la ruta login
        <UserContext.Provider value={{ message, isMessage, semActive, setMessage, setIsMessage }}>
            <SidenavContext.Provider value={{ state, clase, dispatch }}>
                {
                    (role === 'ADMIN')
                        ? (< Route path="/admin" component={RouterAdmin} />)
                        : ((role === 'TEACHER')
                            ? (< Route path="/teacher/" component={RouterTeacher} />)
                            : ((role === 'STUDENT')
                                ? (< Route path="/student" component={RouterStudent} />)
                                : <Redirect to='/login' />))
                }
            </SidenavContext.Provider>
        </UserContext.Provider >

    )
}
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.object.isRequired
}
export default PrivateRoute;
