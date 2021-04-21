import React, { useContext, useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { AuthContext } from "../context";
import Career from "../pages/admin/career/Career";
import Course from "../pages/admin/course/Course";
import Semester from "../pages/admin/semester/Semester";
import Sidenav from "../pages/admin/sidenav/Sidenav";

const RouterAdmin = () => {

  const [state, setState] = useState(true)
  const { user } = useContext(AuthContext)
  const { role } = user
  return (
    <>
      <Navigation role={role} state={state} setState={setState} />
      <Sidenav state={state} />
      <div className={'main ' + (state ? 'sidenav-close' : 'sidenav-open')}>
        <Switch>
          <Route exact path="/admin/semester" component={Semester}></Route>
          <Route exact path="/admin/career" component={Career} ></Route>
          <Route exact path="/admin/course" component={Course} ></Route>
          <Redirect from="/admin" to="/admin/semester" />
        </Switch>
      </div>
    </>
  )
}

export default RouterAdmin;
