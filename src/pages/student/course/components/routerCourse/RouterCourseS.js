import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import WorksS from '../WorksS';
import StudentList from '../../../../../components/listStudents/StudentsList';


const RouterCourseS = () => {

    const url = sessionStorage.getItem('pathname');

    return (
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
    )
}


export default RouterCourseS;

