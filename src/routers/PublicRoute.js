import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types'

const PublicRoute = ({
    isAuthenticated,
    component: Component,//remplaza component a Component
    ...rest
}) => {
    const { logged, role } = isAuthenticated;
    return (
        <Route {...rest}
            component={(props) => {
                let route = null;
                //si es usuario esta logeado entonces redireccionamos a su ruta
                //deacuerdo a su rol
                //caso contario nos quedamos en la ruta login
                if (logged) {
                    switch (role) {
                        case 'ADMIN':
                            console.log('admin');
                            route = (<Redirect to="/admin" />);
                            break;
                        case 'TEACHER':
                            route = (<Redirect to="/teacher" />);
                            break;
                        case 'STUDENT':
                            route = (<Redirect to="/student" />);
                            break;
                        default:
                            break;
                    }
                } else {
                    route = (<Component {...props} />);
                }
                return route;

            }
            }
        />
    );
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.object.isRequired,
    component: PropTypes.func.isRequired
}
export default PublicRoute;
