import React from 'react';
import './homeTeacher.css';

const HomeTeacher = () => {

    sessionStorage.removeItem('pathname');

    return (
        <>
            <h1>ESTOY EN EL HOME</h1>
        </>
    )
}


export default HomeTeacher;