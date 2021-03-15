import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import "./Navigation.css"

const Navigation = ({links}) => {
  return (
    <div className="more">
      {
        links.map((value)=>{
          return (<Link key={value.url} className={value.classElement} to={value.url}>{value.nameLink}</Link>)
        })
      }
    </div>
  );
}
Navigation.propTypes = {
  links:PropTypes.array.isRequired
}

export default Navigation
