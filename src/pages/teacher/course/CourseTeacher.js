import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CourseContext, TeacherContext } from "../../../context";
import { UseStateCourseTeacher } from "../../../hooks/teacherHooks/courseHook/useCourseTeacher";
import { linkNavigateCourseTeacher } from "../../../helpers/linksCourse";
import HeaderCourse from "../../../components/headerCourse/HeaderCourse";
import NavigationCourse from "../../../components/navigationCourse/navigationCourse";
import { useStateCourse } from "../../../hooks/useCourseCustom";
import RouterCourseT from "./components/routerCourse/RouterCourseT";
import Chat from "../../../components/chat/Chat";
import FormChat from "../../../components/chat/FormChat";


const CourseTeacher = ({ data }) => {

    const { teacher } = useContext(TeacherContext);

    const {
        socket,
        chat,
        chatRef,
        otherRef,
        handleHiddenChat,
        handleShowChat
    } = useStateCourse()

    const {
        myCourse,
    } = UseStateCourseTeacher(data.code);


    return (
        <CourseContext.Provider value={{ course: myCourse, user: teacher, socket }}>
            <Router basename={`teacher/${data.code}`}>
                <div className="course-component">
                    <HeaderCourse />
                    <div className="btn-chat">
                        {
                            (chat)
                                ? (<span className="hidden" onClick={handleHiddenChat}>Ocultar Chat</span>)
                                : (<span className="show" onClick={handleShowChat}>Mostrar Chat <i className="fas fa-toggle-on" aria-hidden='true'></i></span>)
                        }
                        <NavigationCourse linkNavigateCourse={linkNavigateCourseTeacher} />
                    </div>
                    <div className='content-course'>
                        {
                            (chat) && (
                                <div className="chat" ref={chatRef}>
                                    <div className='chat-content'>
                                        <Chat />
                                        <FormChat />
                                    </div>
                                </div>
                            )
                        }
                        <div className="other other-show-chat" ref={otherRef}>
                            <div className='other-content'>
                                <RouterCourseT />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </CourseContext.Provider>
    )
}

export default CourseTeacher;