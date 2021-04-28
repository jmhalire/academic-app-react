import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Chat from "../../../components/chat/Chat";
import HeaderCourse from "../../../components/headerCourse/HeaderCourse";
import NavigationCourse from "../../../components/navigationCourse/navigationCourse";
import { StudentContex } from "../../../context";
import { linkNavigateCourseStudent } from "../../../helpers/linksCourse";
import { useStateCourse } from "../../../hooks/useCourseCustom";
import RouterCourseS from "./components/routerCourse/RouterCourseS";


const CourseStudent = ({ data }) => {

    const { course } = data;
    const {student} = useContext(StudentContex);

    const {
        chat,
        chatRef,
        otherRef,
        handleHiddenChat,
        handleShowChat,
    } = useStateCourse();

    return (
        <>
            <div className="course-component">
                <HeaderCourse course={course} />
                <Router basename={`student/${course.code}`}>
                    <div className="btn-chat">
                        {
                            (chat)
                                ? (<span className="hidden" onClick={handleHiddenChat}>Ocultar Chat</span>)
                                : (<span className="show" onClick={handleShowChat}>Mostrar Chat</span>)
                        }
                        <NavigationCourse linkNavigateCourse={linkNavigateCourseStudent}/>
                    </div>
                    <div className='content-course'>
                        {
                            (chat) && (
                                <div className="chat" ref={chatRef}>
                                    <div className='chat-content'>
                                        <Chat course={course} user={student} />
                                        {/* <FormChatTeacher /> */}
                                    </div>
                                </div>
                            )
                        }
                        <div className="other other-show-chat" ref={otherRef}>
                            <div className='other-content'>
                                <RouterCourseS idCourse={course.id} />
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        </>
    )
}

export default CourseStudent;