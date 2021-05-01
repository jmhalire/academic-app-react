import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, useLocation } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { SidenavContext, StudentContex } from "../context";
import { useRouterStudent } from "../hooks/studentHooks/routerStudentHook";
import CourseStudent from "../pages/student/course/CourseStudent";
import HomeStudent from "../pages/student/home/HomeStudent";
import NotesStudent from "../pages/student/notes/NotesStudent";
import Register from "../pages/student/register/Register";
import SidenavStudent from "../pages/student/sidenav/SidenavStudent";

const RouterStudent = () => {

  const { clase } = useContext(SidenavContext);
  const { courses, student } = useRouterStudent();

  const { pathname } = useLocation();
  let url = pathname.split('/');

  return (
    <>
      <Navigation />
      <StudentContex.Provider value={{ courses, student }}>
        <Router basename='student'>
          <SidenavStudent />
          <div className={'main ' + clase}>
            <Switch>
              <Route path='/home' component={HomeStudent}></Route>
              <Route path='/constance-notes' component={NotesStudent}></Route>
              <Route path='/process-register' component={Register}></Route>
              {
                courses.map((course) => (
                  <Route key={course.code} path={`/${course.code}`} render={(props) => <CourseStudent {...props} data={{ course: course }} />}></Route>
                ))
              }
              {
                (url[2])
                  ? <Redirect from='/' to={`/${url[2]}`} />
                  : <Redirect from='*' to='/home' />
              }
            </Switch>
          </div>
        </Router>
      </StudentContex.Provider>
    </>
  )
}

export default RouterStudent