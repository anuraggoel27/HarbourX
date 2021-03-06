import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import axios from "axios";
const Login = () => {
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login`,{
      email:email,
      password:password
    })
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      const id=res.data.id;
      const isRegistered=res.data.isRegistered;
      const isPassCorrect=res.data.isPassCorrect;
      if(isRegistered && isPassCorrect){
        window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/user/${id}`);
      }
      // window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/user/${id}`);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  return (
    <div className="login__container">
      <div className="login__form">
      <h2>Sign In</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" onChange={handleEmailChange} type="email" placeholder="Enter email"  autoComplete="off"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" onChange={handlePasswordChange} type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
