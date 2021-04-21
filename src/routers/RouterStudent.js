import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { UserContext } from "../context";

const RouterStudent = () => {

  const { registerActive } = useContext(UserContext);

  return (
    <>
      <h1>soy student</h1>

      <Switch>
          {/* <Route exact path="/student/notes" component={Note}></Route>
          <Route exact path="/student/courses" component={Course}></Route>
          {
            registerActive && <Route exact path="/student/register-semester" component={Register}></Route>
          }
        <Redirect from="/student" to="/student/notes"/> */}
      </Switch>
    </>
  )
}

export default RouterStudent