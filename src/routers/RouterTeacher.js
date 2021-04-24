import React from "react";
import { Switch } from "react-router-dom";
import { TeacherContext } from "../context";
import { useRouterTeacher } from "../hooks/teacherHooks/routerTeacherHook";

const RouterTeacher = () => {


  const {
    Courses
  } = useRouterTeacher();

  return (
    <>
      <h1>soy teacher</h1>

      <Switch>
        <TeacherContext.Provider value={{ Courses }}>
          {/* <Route exact path="/teacher/chat-with-student" component={Chat} ></Route>
          <Route exact path="/teacher/student-note" component={StudentNote} ></Route>
          <Route exact path="/teacher/student-for-course" component={StudentCourse}></Route>
          <Route exact path="/teacher/note-entry" component={NoteEntry}></Route>
          <Redirect from="/teacher" to="/teacher/chat-with-student" /> */}
        </TeacherContext.Provider>
      </Switch>
    </>
  )
}

export default RouterTeacher
