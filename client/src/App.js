import React from "react";
import {
  Home,
  Login,
  SignUp,
  Feed,
  PublicFeed,
  PublicViewFeed,
} from "./components/index.js";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import dotenv from "dotenv";
import "./App.css";
const App = () => {
  return (
    <div className="app_wrapper">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/user/:id" component={Feed} />
      <Route exact path="/public" component={PublicFeed} />
      <Route exact path="/public/user/:id" component={PublicViewFeed} />
    </div>
  );
};

export default App;
