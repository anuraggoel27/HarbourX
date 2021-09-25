import React from "react";
import {Home,Login,SignUp,Feed } from "./components/index.js";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
const App = () => {
  return (
    //Main Body
    <div className="app__wrapper">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} /> 
      <Route exact path="/signup" component={SignUp} /> 
      <Route exact path="/user/:id" component={Feed} /> 
    </div>
  );
};

export default App;
