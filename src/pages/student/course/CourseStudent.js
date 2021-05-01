import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Chat from "../../../components/chat/Chat";
import FormChat from "../../../components/chat/FormChat";
import HeaderCourse from "../../../components/headerCourse/HeaderCourse";
import NavigationCourse from "../../../components/navigationCourse/navigationCourse";
import { CourseContext, StudentContex } from "../../../context";
import { linkNavigateCourseStudent } from "../../../helpers/linksCourse";
import { useStateCourse } from "../../../hooks/useCourseCustom";
import RouterCourseS from "./components/routerCourse/RouterCourseS";

const CourseStudent = ({ data }) => {

    const { course } = data;
    const { student } = useContext(StudentContex);

    const {
        socket,
        chat,
        chatRef,
        otherRef,
        handleHiddenChat,
        handleShowChat,
    } = useStateCourse(student.id);    

    return (
        <CourseContext.Provider value={{ course, user: student, socket }}>
            <Router basename={`student/${course.code}`}>
                <div className="course-component">
                    <HeaderCourse />
                    <div className="btn-chat">
                        {
                            (chat)
                                ? (<span className="hidden" onClick={handleHiddenChat}>Ocultar Chat</span>)
                                : (<span className="show" onClick={handleShowChat}>Mostrar Chat</span>)
                        }
                        <NavigationCourse linkNavigateCourse={linkNavigateCourseStudent} />
                    </div>
                    <div className='content-course'>
                        {
                            (chat) && (
                                <div className="chat" ref={chatRef}>
                                    <div className='chat-content'>
                                        <Chat />
                                    </div>
                                </div>
                            )
                        }
                        <div className="other other-show-chat" ref={otherRef}>
                            <div className='other-content'>
                                <RouterCourseS />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </CourseContext.Provider>
    )
}

export default CourseStudent;