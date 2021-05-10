import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './navigationCourse.css';

const NavigationCourse = ({ linkNavigateCourse }) => {

    return (
        <ul className="option-course" >
            {
                linkNavigateCourse.map((link) => (
                    <NavLink key={link.to} activeClassName='active' className="option-course-link" to={`/${link.to}`}>{link.name}</NavLink>
                ))
            }
        </ul>
    )
}

NavigationCourse.propTypes = {
    linkNavigateCourse: PropTypes.array.isRequired
}

export default NavigationCourse;
