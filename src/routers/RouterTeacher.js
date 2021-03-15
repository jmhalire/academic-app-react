import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navigation from "../component/academic/navigation/Navigation";
import Chat from "../component/academic/teacher/chat/chat";
import NoteEntry from "../component/academic/teacher/noteEntry/NoteEntry";
import StudentCourse from "../component/academic/teacher/studentForCourse/StudentCourse";
import StudentNote from "../component/academic/teacher/studentNote/StudentNote";
import { TeacherContext } from "../context";
import { getNavigateTeacher } from "../helpers/linkNavigation";
import { useRouterTeacher } from "../hooks/teacherHooks/routerTeacherHook";

const RouterTeacher = () => {

  let link = getNavigateTeacher();

  const {
    Courses
  } = useRouterTeacher();

  return (
    <>
      <Navigation links={link} />
      <hr />
      <Switch>
        <TeacherContext.Provider value={{Courses}}>
          <Route exact path="/teacher/chat-with-student" component={Chat} ></Route>
          <Route exact path="/teacher/student-note" component={StudentNote} ></Route>
          <Route exact path="/teacher/student-for-course" component={StudentCourse}></Route>
          <Route exact path="/teacher/note-entry" component={NoteEntry}></Route>
          <Redirect from="/teacher" to="/teacher/chat-with-student" />
        </TeacherContext.Provider>
      </Switch>
    </>
  )
}

export default RouterTeacher
