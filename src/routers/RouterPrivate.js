import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const RouterPrivate = ({
    isAuthenticated,
    component: Component,
    rol,
    ...rest
}) => {
  console.log(isAuthenticated);
  const { logged, role } = isAuthenticated;
  return (
    <Route {...rest}
        component = { (props) => (
            (isAuthenticated && role===rol)
            ? (<Component {...props} />) 
            : (<Redirect to="/auth/login"/>)
        )}
    />
  )
}

RouterPrivate.propTypes = {
    isAuthenticated: PropTypes.object.isRequired,
    component: PropTypes.func.isRequired
}

export default RouterPrivate;