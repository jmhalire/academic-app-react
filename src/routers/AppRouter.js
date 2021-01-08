import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import RouterLogin from './RouterLogin';
//import RouterPrivate from './RouterPrivate';
import { UserContext } from '../context/index';
import Signin from '../component/signin/Signin';
import RouterAdmin from './RouterAdmin';
import RouterTeacher from './RouterTeacher';
import RouterStudent from './RouterStudent';
import Navbar from '../component/navbar/Navbar';
import Message from '../component/message/Message';
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
    closeMassage,
    createdSem
  } = useAppRouter();

  const { value, nameClass } = message;
  const { logged,role } = user;

  return (
    <>
      <Navbar user={user} />
      <UserContext.Provider
        value={{ message, isMessage, setmessage,semActive, setisMessage, registerActive, setRegisterActive, createdSem }}>
        <div className="content">
          {
            isMessage &&
            <div className="mt-2">
              <Message value={value} nameClass={nameClass} method={closeMassage} />
            </div>
          }
          <Switch>
            <RouterLogin path="/auth/login" component={Signin} isAuthenticated={user} />
            {logged && role === "ADMIN" && < Route path="/admin" component={RouterAdmin} />}
            {logged && role === "TEACHER" && < Route path="/teacher" component={RouterTeacher} />}
            {logged && role === "STUDENT" && < Route path="/student" component={RouterStudent} />}
            {!logged && <Redirect to="/auth/login" />}
            <Redirect from="/" to="/auth/login" />
          </Switch>
        </div>
      </UserContext.Provider>
    </>
  )
}

export default AppRouter;
