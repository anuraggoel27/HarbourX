import React from "react";
import {Home,Login,SignUp } from "./components/index.js";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Map from './components/Feed/Map'
import AddMemory from "./components/Feed/AddMemory.jsx";
const App = () => {
  return (
    //Main Body
    // <div className="app__wrapper">
    //   <Route exact path="/" component={Home} />
    //   <Route exact path="/login" component={Login} /> 
    //   <Route exact path="/signup" component={SignUp} /> 
    // </div>
    <div className="app">
      <Map />
      {/* <AddMemory latitude="100" longitude="100"/> */}

    </div>
  );
};

export default App;
