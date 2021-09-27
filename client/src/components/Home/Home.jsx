import React from "react";
import { Header} from "../";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home__container" id="body">
        <h1 className="home__title">Welcome to Mapify!</h1>
        <div className="home__welcome_para">
          <a href="/signup">
            <p>New Here? Sign Up Now</p>
          </a>
          <a href="/login">
            <p>Already a member? Sign In</p>
          </a>
          <a href="/public">
            <p>Continue as guest</p>
          </a>{" "}
        </div>
      </div>
    </>
  );
};

export default Home;
