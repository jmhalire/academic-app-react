import React from "react";
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { TeacherContext } from "../context";
import { useRouterTeacher } from "../hooks/teacherHooks/routerTeacherHook";
import { useStateSidenavHook } from "../hooks/useSidenavHook";
import CourseTeacher from "../pages/teacher/course/CourseTeacher";
import HomeTeacher from "../pages/teacher/home/HomeTeacher";
import SidenavTeacher from "../pages/teacher/sidenav/SidenavTeacher";


const RouterTeacher = () => {

  const { courses, teacher } = useRouterTeacher();

  const {
    url,
    handleSidenav
  } = useStateSidenavHook();

  return (
    <>
      <Navigation handleSidenav={handleSidenav} />
      <TeacherContext.Provider value={{ courses, teacher }}>
        <Router basename='teacher'>
          <div className="page-user">
            <SidenavTeacher />
            <div id='main' className='main'>
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
          </div>
        </Router>
      </TeacherContext.Provider>
    </>
  )
}

export default RouterTeacher
