import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { getNavigateAdmin } from "../helpers/linkNavigation";
import ActiveSemester from "../component/academic/admin/activeSemester/ActiveSemester";
import Career from "../component/academic/admin/career/Career";
import Semester from "../component/academic/admin/semester/Semester";
import Courses from "../component/academic/admin/course/Courses";
import Personal from "../component/academic/admin/personal/Personal";
import Navigation from "../component/academic/navigation/Navigation";
import Asignation from "../component/academic/admin/asignationTeacher/Asignation";

const RouterAdmin = () => {

  let link = getNavigateAdmin();

  return (
    <>
      <Navigation links={link} />
      <hr />
      <ActiveSemester />
      <Switch>
        <Route exact path="/admin/semester" component={Semester}></Route>
        <Route exact path="/admin/career" component={Career} ></Route>
        <Route exact path="/admin/course" component={Courses} ></Route>
        <Route exact path="/admin/personal" component={Personal}></Route>
        <Route exact path="/admin/asignation-teacher" component={Asignation}></Route>
        <Redirect from="/admin" to="/admin/semester" />
      </Switch>
    </>
  )
}

export default RouterAdmin;
