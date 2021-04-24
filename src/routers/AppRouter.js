import React from 'react';
import { BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';
import Login from '../components/login/Login'
import { UserContext } from '../context/index';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
//hooks
import { useAppRouter } from '../hooks/appRouterHook';

const AppRouter = () => {
  const {
    semActive,
    user,
    isMessage,
    message,
    registerActive,
    setRegisterActive,
    setisMessage,
    setmessage,
    //closeMassage,
    // createdSem
  } = useAppRouter();

  // const { value, nameClass } = message;
  // const { logged, role } = user;

  return (
    <UserContext.Provider
      value={{ message, isMessage, setmessage, semActive, setisMessage, registerActive, setRegisterActive }}>
      {
        // isMessage &&
        // <div className="mt-2">
        //   <Message value={value} nameClass={nameClass} method={closeMassage} />
        // </div>
      }
      <Router>
        <Switch>
          <PublicRoute path="/login" component={Login} isAuthenticated={user}/>
          <PrivateRoute isAuthenticated={user}/>
          <Redirect from="*" to="/login" />
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default AppRouter;
