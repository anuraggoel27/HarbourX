import React from "react";
import {Home,Login,SignUp,Feed,AddMemory} from "./components/index.js";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
const App = () => {
  return (
    

    <div className="app_wrapper">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} /> 
      <Route exact path="/signup" component={SignUp} /> 
      <Route exact path="/user/:id" component={Feed} /> 
      <Route exact path="/addmemory" component={AddMemory}/>
    </div>
  );
};

export default App;
