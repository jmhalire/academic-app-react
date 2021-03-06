import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import NoteEntry from '../noteEntry/NoteEntry';
import NoteStudents from '../NoteStudents';
import WorksT from '../WorksT';
import StudentList from '../../../../../components/listStudents/StudentsList';


const RouterCourseT = () => {

    const url = sessionStorage.getItem('pathname')

    return (
        <div style={{padding:'15px'}}>
            <Switch >
                <Route exact path={`/works`} render={(props) => (<WorksT {...props} />)}></Route>
                <Route exact path={`/students-list`} render={(props) => (<StudentList {...props} />)}></Route>
                <Route exact path={`/student-notes`} render={(props) => (<NoteStudents {...props} />)}></Route>
                <Route exact path={`/note-entry`} render={(props) => (<NoteEntry {...props} />)}></Route>
                {
                    (url)
                        ? <Redirect from={`/`} to={`${url}`} />
                        : <Redirect from='/' to='/works' />
                }
            </Switch>
        </div>
    )
}


export default RouterCourseT;

