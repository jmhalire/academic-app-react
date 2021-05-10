import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import { StudentContext } from "../context";
import { useRouterStudent } from "../hooks/studentHooks/routerStudentHook";
import { useStateSidenavHook } from "../hooks/useSidenavHook";
import CourseStudent from "../pages/student/course/CourseStudent";
import HomeStudent from "../pages/student/home/HomeStudent";
import NotesStudent from "../pages/student/notes/NotesStudent";
import Register from "../pages/student/register/Register";
import SidenavStudent from "../pages/student/sidenav/SidenavStudent";

const RouterStudent = () => {

  const { courses, student } = useRouterStudent();

  const {
    url,
    handleSidenav
  } = useStateSidenavHook()
  return (
    <>
      <Navigation handleSidenav={handleSidenav} />
      <StudentContext.Provider value={{ courses, student }} >
        <Router basename='student'>
          <div className="page-user">
            <SidenavStudent />
            <div id='main' className='main'>
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
          </div>
        </Router>
      </StudentContext.Provider>
    </>
  )
}

export default RouterStudent