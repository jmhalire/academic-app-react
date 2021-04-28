import React from 'react';
import PropTypes from "prop-types";
import { Redirect, Route, Switch } from 'react-router';
import { CourseContext } from '../../../../../context';
import WorksS from '../WorksS';
import StudentList from '../../../../../components/listStudents/StudentsList';


const RouterCourseS = ({ idCourse }) => {

    const url = sessionStorage.getItem('pathname');

    return (
        <CourseContext.Provider value={{ idCourse }}>
            <div className='sub-main-course-teacher'>
                <Switch >
                    <Route exact path={`/works`} render={(props) => (<WorksS {...props} />)}></Route>
                    <Route exact path={`/students-list`} render={(props) => (<StudentList {...props} />)}></Route>
                    {
                        (url)
                            ? <Redirect from={`/`} to={`${url}`} />
                            : <Redirect from='/' to='/works' />
                    }
                </Switch>
            </div>
        </CourseContext.Provider>
    )
}

RouterCourseS.propTypes = {
    idCourse : PropTypes.number.isRequired
}

export default RouterCourseS;

