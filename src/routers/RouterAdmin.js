import React, { useContext, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { AuthContext } from "../context";
import Career from "../pages/admin/career/Career";
import Course from "../pages/admin/course/Course";
import HomeAdmin from "../pages/admin/home/HomeAdmin";
import Sidenav from "../pages/admin/sidenav/Sidenav";

const RouterAdmin = () => {

  const [state, setState] = useState(true)
  const { user } = useContext(AuthContext)
  const { role } = user

  let clase = (state ? 'sidenav-close' : 'sidenav-open');
  if(window.innerWidth<1200){
    clase = '';
  }

  return (
    <>
      <Navigation role={role} state={state} setState={setState} />
      <Sidenav state={state} />
      <div className={'main ' + clase}>
        <Switch>
          <Route exact path="/admin/home" component={HomeAdmin}></Route>
          <Route exact path="/admin/career" component={Career} ></Route>
          <Route exact path="/admin/course" component={Course} ></Route>
          <Redirect from="/admin" to="/admin/home" />
        </Switch>
      </div>
    </>
  )
}

export default RouterAdmin;
