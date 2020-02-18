import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from "../src/components/Menu"
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

const MainRouter = () => {

  return (
    <div>
      <Menu />
      <div style={{ marginLeft: "15px", marginRight: "15px" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </div>
    </div>
  )

}

export default MainRouter
