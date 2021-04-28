import React, { useContext } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Login from '../components/login/Login'
import { AuthContext } from '../context/index';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
//hooks

const AppRouter = () => {

  const { user } = useContext(AuthContext);

  const { logged } = user;

  return (
    <>
      {
        // isMessage &&
        // <div className="mt-2">
        //   <Message value={value} nameClass={nameClass} method={closeMassage} />
        // </div>
      }
      <Router>
        <Switch>
          <PublicRoute path="/login" component={Login} isAuthenticated={user} />
          {(logged) && <PrivateRoute isAuthenticated={user} />}
          <Redirect from="*" to="/login" />
        </Switch>
      </Router>
    </>
  )
}

export default AppRouter;
