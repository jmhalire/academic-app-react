import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CourseContext, TeacherContext } from "../../../context";
import { UseStateCourseTeacher } from "../../../hooks/teacherHooks/courseHook/useCourseTeacher";
import { linkNavigateCourseTeacher } from "../../../helpers/linksCourse";
import HeaderCourse from "../../../components/headerCourse/HeaderCourse";
import NavigationCourse from "../../../components/navigationCourse/navigationCourse";
import RouterCourseT from "./components/routerCourse/RouterCourseT";
import Room from "../../../components/salaVirtual/Room";

const CourseTeacher = ({ data }) => {

    const { teacher } = useContext(TeacherContext);
    const [showHiddenRoom, setShowHiddenRoom] = useState(false)

    const {
        myCourse,
    } = UseStateCourseTeacher(data.code);


    return (
        <CourseContext.Provider value={{ course: myCourse, user: teacher }}>
            <Router basename={`teacher/${data.code}`}>
                <div className="course-component">
                    <HeaderCourse setShowHiddenRoom={setShowHiddenRoom} showHiddenRoom={showHiddenRoom} />
                    {
                        (showHiddenRoom) && <Room setShowHiddenRoom={setShowHiddenRoom} />
                    }
                    <NavigationCourse linkNavigateCourse={linkNavigateCourseTeacher} />
                    <RouterCourseT />
                </div>
            </Router>
        </CourseContext.Provider>
    )
}

export default CourseTeacher;