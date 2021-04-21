import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import RouterAdmin from './RouterAdmin';
import RouterTeacher from './RouterTeacher';
import RouterStudent from './RouterStudent';

const PrivateRoute = ({ isAuthenticated }) => {
    const { logged, role } = isAuthenticated
    return (
        //verificamos si esta logeado
        //caso contrario redirigimos a la ruta login
        (logged)
            //verificamos cual es su rol para devolver una ruta de acuerdo a su rol
            ? ((role === 'ADMIN')
                ? (< Route path="/admin" component={RouterAdmin} />)
                : ((role === 'TEACHER')
                    ? (< Route path="/teacher" component={RouterTeacher} />)
                    : ((role === 'STUDENT')
                        ? (< Route path="/student" component={RouterStudent} />)
                        : <></>)))
            : (<Redirect to='/login' />)
    )
}
PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.object.isRequired
}
export default PrivateRoute;
