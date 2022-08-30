import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Detail from "./Detail";

const App = () => {
  return (
    <>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/welcome/watch/:id">
        <Detail />
      </Route>
    </>
  );
};

export default App;
