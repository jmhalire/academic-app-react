import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { useStateSidenavHook } from "../hooks/useSidenavHook";
import Career from "../pages/admin/career/Career";
import Course from "../pages/admin/course/Course";
import HomeAdmin from "../pages/admin/home/HomeAdmin";
import SidenavAdmin from "../pages/admin/sidenav/SidenavAdmin";

const RouterAdmin = () => {

  const {
    handleSidenav
  } = useStateSidenavHook()

  return (
    <>
      <Navigation handleSidenav={handleSidenav} />
      <div className="page-user">
        <div className="page-user">
          <SidenavAdmin />
          <div id='main' className='main'>
            <Switch>
              <Route exact path="/admin/home" component={HomeAdmin}></Route>
              <Route exact path="/admin/career" component={Career} ></Route>
              <Route exact path="/admin/course" component={Course} ></Route>
              <Redirect from="/admin" to="/admin/home" />
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default RouterAdmin;
