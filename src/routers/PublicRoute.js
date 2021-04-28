import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({
    isAuthenticated,
    component: Component,//remplaza component a Component
    ...rest
}) => {
    const { logged, role } = isAuthenticated;
    return (
        <Route {...rest}
            component={(props) => {
                //si es usuario esta logeado entonces redireccionamos a su ruta
                //deacuerdo a su rol
                //caso contario nos quedamos en la ruta login
                if (logged) {
                    switch (role) {
                        case 'ADMIN':
                            return (<Redirect to="/admin" />);
                        case 'TEACHER':
                            return (<Redirect to="/teacher" />);
                        case 'STUDENT':
                            return (<Redirect to="/student" />);
                        default:
                            return (<></>);
                    }
                } else {
                    return (<Component {...props} />);
                }
            }}
        />
    );
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.object.isRequired,
    component: PropTypes.func.isRequired
}
export default PublicRoute;
