import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import RouterAdmin from './RouterAdmin';
import RouterTeacher from './RouterTeacher';
import RouterStudent from './RouterStudent';
import { useAppRouter } from '../hooks/appRouterHook';
import { UserContext } from '../context';

const PrivateRoute = ({ isAuthenticated }) => {

    const { role } = isAuthenticated;

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
            {
                (role === 'ADMIN')
                    ? (< Route path="/admin" component={RouterAdmin} />)
                    : ((role === 'TEACHER')
                        ? (< Route path="/teacher/" component={RouterTeacher} />)
                        : ((role === 'STUDENT')
                            ? (< Route path="/student" component={RouterStudent} />)
                            : <Redirect to='/login' />))
            }

        </UserContext.Provider >

    )
}
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.object.isRequired
}
export default PrivateRoute;
