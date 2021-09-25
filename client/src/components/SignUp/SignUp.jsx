import React,{useState} from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./SignUp.css";
import axios from "axios";
const SignUp = () => {
  const [name,setName]= useState("");
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [home,setHome]=useState("");
  const [bio,setBio]=useState("");
  const [hometown, setHometown]=useState("");
  const onNameChange=(e)=>{
    setName(e.target.value);
  }
  const onUsernameChange=(e)=>{
    setUsername(e.target.value);
  }
  const onEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const onPasswordChange=(e)=>{
    setPassword(e.target.value);
  }
  const onHomeChange=(e)=>{
    setHome(e.target.value);
  }
  const onHometownChange=(e)=>{
    setHometown(e.target.value);
  }
  const onBioChange=(e)=>{
    setBio(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,password,username,home,hometown,bio);
    axios.post(`${process.env.REACT_APP_SERVER_URL}/user/signup`,{
      name:name,
      email:email,
      password:password,
      username:username,
      home:home,
      bio:bio,
      hometown:hometown,
    })
  }
  return (
    
    <div className="signup__container">
      <div className="signup__form">
        <h2>Sign Up</h2>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" onChange={onNameChange} type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Username"
                onChange={onUsernameChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={onEmailChange} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col}  controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={onPasswordChange} type="password" placeholder="Password" />
          </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridHome">
            <Form.Label>Home Address</Form.Label>
            <Form.Control onChange={onHomeChange} name="home" placeholder="Apartment, studio, or floor" />
          </Form.Group>
          <Form.Group controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={onHometownChange} name="city" type="text" placeholder="Your City"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              onChange={onBioChange}
              as="textarea"
              rows={3}
              placeholder="Write Something About Yourself"
            />
          </Form.Group>
          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
