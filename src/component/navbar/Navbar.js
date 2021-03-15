import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import logo from "../../logo.svg";
import { types } from "../../types/types";
import "./Navbar.css";

const Navbar = ({ user }) => {

  //context
  const { dispatch } = useContext(AuthContext);

  //const [scroll, setscroll] = useState(window.pageYOffset)
  window.onscroll = () => {
    let ele = document.getElementById('nav');
    if (window.pageYOffset > 0) {
      if(ele)ele.classList.add("scroll-navbar")
    } else {
      if(ele)ele.classList.remove("scroll-navbar")
    }
  };

  const { logged, name } = user;


  const logout = () => {
    dispatch({
      type: types.logout
    })
  }
  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav d-flex">
          <img src={logo} className="App-logo" alt="logo" />
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {
            logged
              ? (
                <>
                  <li className="nav-item">
                    <Link to="/user/profile" className="nav-link">
                      {name}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/logout" className="nav-link" onClick={logout}>
                      Log out
                    </Link>
                  </li>
                </>
              )
              : (<li className="nav-item">
                <Link to="/signin" className="nav-link">
                  Log In
              </Link>
              </li>)
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
