import React from "react";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";

import Users from "./app/layouts/users";
import NavBar from "./app/components/ui/navbar";
import Main from "./app/layouts/main";
import Login from "./app/layouts/login";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?" component={Users} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
