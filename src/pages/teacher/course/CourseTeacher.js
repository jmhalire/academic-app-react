import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TeacherContext } from "../../../context";
import { UseStateCourseTeacher } from "../../../hooks/teacherHooks/courseHook/useCourseTeacher";
import { linkNavigateCourseTeacher } from "../../../helpers/linksCourse";
import ChatTeacher from "./components/chatTeacher/ChatTeacher";
import FormChatTeacher from "./components/chatTeacher/FormChat";
import HeaderCourse from "../../../components/headerCourse/HeaderCourse";
import NavigationCourse from "../../../components/navigationCourse/navigationCourse";
import { useStateCourse } from "../../../hooks/useCourseCustom";
import RouterCourseT from "./components/routerCourse/RouterCourseT";


const CourseTeacher = ({ data }) => {

    const { teacher } = useContext(TeacherContext);

    const { 
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
        <>
            <div className="course-component">
                <HeaderCourse course={myCourse} />
                <Router basename={`teacher/${data.code}`}>
                    <div className="btn-chat">
                        {
                            (chat)
                                ? (<span className="hidden" onClick={handleHiddenChat}>Ocultar Chat</span>)
                                : (<span className="show" onClick={handleShowChat}>Mostrar Chat</span>)
                        }
                        <NavigationCourse linkNavigateCourse={linkNavigateCourseTeacher} />
                    </div>
                    <div className='content-course'>
                        {
                            (chat) && (
                                <div className="chat" ref={chatRef}>
                                    <div className='chat-content'>
                                        <ChatTeacher course={myCourse} teacher={teacher} />
                                        <FormChatTeacher />
                                    </div>
                                </div>
                            )
                        }
                        <div className="other other-show-chat" ref={otherRef}>
                            <div className='other-content'>
                                <RouterCourseT idCourse={myCourse.idCourse} />
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        </>
    )
}

export default CourseTeacher;