import React from "react";
import {Home,Login,SignUp,Feed } from "./components/index.js";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Map from './components/Feed/Map'
import AddMemory from "./components/Feed/AddMemory.jsx";
const App = () => {
  return (
    //Main Body
<<<<<<< HEAD:client/src/app.js
    // <div className="app__wrapper">
    //   <Route exact path="/" component={Home} />
    //   <Route exact path="/login" component={Login} /> 
    //   <Route exact path="/signup" component={SignUp} /> 
    // </div>
    <div className="app">
      <Map />
      {/* <AddMemory latitude="100" longitude="100"/> */}

=======
    <div className="app__wrapper">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} /> 
      <Route exact path="/signup" component={SignUp} /> 
      <Route exact path="/user/:id" component={Feed} /> 
>>>>>>> a4e19fbc30d287526cf6fc02c96bdf72f177fa44:client/src/App.js
    </div>
  );
};

export default App;
