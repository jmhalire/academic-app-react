import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { SidenavContext } from "../context";
import Career from "../pages/admin/career/Career";
import Course from "../pages/admin/course/Course";
import HomeAdmin from "../pages/admin/home/HomeAdmin";
import SidenavAdmin from "../pages/admin/sidenav/SidenavAdmin";

const RouterAdmin = () => {

  const { clase } = useContext(SidenavContext)

  return (
    <>
      <Navigation />
      <SidenavAdmin />
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
