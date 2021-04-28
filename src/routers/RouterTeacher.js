import React, { useContext } from "react";
import { Redirect, Route, Switch, useLocation, BrowserRouter as Router } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { SidenavContext, TeacherContext } from "../context";
import { useRouterTeacher } from "../hooks/teacherHooks/routerTeacherHook";
import CourseTeacher from "../pages/teacher/course/CourseTeacher";
import HomeTeacher from "../pages/teacher/home/HomeTeacher";
import SidenavTeacher from "../pages/teacher/sidenav/SidenavTeacher";

const RouterTeacher = () => {

  const { clase } = useContext(SidenavContext);
  const { courses, teacher } = useRouterTeacher();

  const { pathname } = useLocation()
  let url = pathname.split('/')

  return (
    <>
      <Navigation />
      <TeacherContext.Provider value={{ courses, teacher }}>
        <Router basename='teacher'>
          <SidenavTeacher />
          <div className={'main ' + clase}>
            <Switch>
              <Route path='/home' component={HomeTeacher}></Route>
              {
                courses.map((course) => (
                  <Route key={course.code} path={`/${course.code}`} render={(props) => <CourseTeacher {...props} data={{ code: course.code }} />}></Route>
                ))
              }
              {
                (url[2])
                  ? <Redirect from='/' to={`/${url[2]}`} />
                  : <Redirect from='/' to='/home' />
              }
            </Switch>
          </div>
        </Router>
      </TeacherContext.Provider>
    </>
  )
}

export default RouterTeacher
