import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const RouterLogin = ({
  isAuthenticated,
  component: Component,//remplaza component a Component
  ...rest
}) => {
  const { logged, role } = isAuthenticated;
  return (
    <Route {...rest}
      component={(props) => (
        (logged && role === "ADMIN" ) ? <Redirect to="/admin" />
        : (logged && role === "TEACHER" ) ? <Redirect to="/teacher" />
        : (logged && role === "STUDENT" ) ? <Redirect to="/student" />
        : (<Component {...props} />)
      )}
    />
  );
};

RouterLogin.propTypes = {
  isAuthenticated: PropTypes.object.isRequired,
  component: PropTypes.func.isRequired
};

export default RouterLogin;