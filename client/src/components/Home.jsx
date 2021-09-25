import React from "react";
import { Header, Footer } from "./";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home__container">
        <h1 className="home__title">Welcome to Mapify!</h1>
        <div className="home__welcome_para">
          <a href="/signup">
            <p>New Here? Sign Up Now</p>
          </a>
          <a href="/login">
            <p>Already a member? Sign In</p>
          </a>
          <a href="/">
            <p>Continue as guest</p>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
