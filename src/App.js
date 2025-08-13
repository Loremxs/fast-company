import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";

import Users from "./app/layouts/users";
import NavBar from "./app/components/navbar";
import Main from "./app/layouts/main";
import Login from "./app/layouts/login";
import UserPage from "./app/components/userPage";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users" exact component={Users} />
        <Route path="/users/:userId" component={UserPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
