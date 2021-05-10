import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderCourse from "../../../components/headerCourse/HeaderCourse";
import NavigationCourse from "../../../components/navigationCourse/navigationCourse";
import Room from "../../../components/salaVirtual/Room";
import { CourseContext, StudentContext } from "../../../context";
import { linkNavigateCourseStudent } from "../../../helpers/linksCourse";
import RouterCourseS from "./components/routerCourse/RouterCourseS";

const CourseStudent = ({ data }) => {

    const { course } = data;
    const { student } = useContext(StudentContext);
    const [showHiddenRoom, setShowHiddenRoom] = useState(false)

    return (
        <CourseContext.Provider value={{ course, user: student }}>
            <Router basename={`student/${course.code}`}>
                <div className="course-component">
                    <HeaderCourse setShowHiddenRoom={setShowHiddenRoom} showHiddenRoom={showHiddenRoom} />
                    {
                        (showHiddenRoom) && <Room setShowHiddenRoom={setShowHiddenRoom} />
                    }
                    <NavigationCourse linkNavigateCourse={linkNavigateCourseStudent} />
                    <RouterCourseS />
                </div>
            </Router>
        </CourseContext.Provider>
    )
}

export default CourseStudent;