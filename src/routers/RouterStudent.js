import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navigation from "../component/academic/navigation/Navigation";
import Course from "../component/academic/student/courses/Course";
import CurrentSemester from "../component/academic/student/currentSemester/CurrentSemester";
import Note from "../component/academic/student/notes/Notes";
import Register from "../component/academic/student/registerSemester/Register";
import { UserContext } from "../context";
import { getNavigateStudent } from "../helpers/linkNavigation";

const RouterStudent = () => {

  const { registerActive } = useContext(UserContext);
  const link = getNavigateStudent(registerActive);

  return (
    <>
      <Navigation links={link} />
      <hr />
      <CurrentSemester />
      <Switch>
          <Route exact path="/student/notes" component={Note}></Route>
          <Route exact path="/student/courses" component={Course}></Route>
          {
            registerActive && <Route exact path="/student/register-semester" component={Register}></Route>
          }
        <Redirect from="/student" to="/student/notes"/>
      </Switch>
    </>
  )
}

export default RouterStudent