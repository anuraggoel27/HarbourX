import React from 'react'
import {Header, Footer} from "./";
const Home = () => {
    return (
        <>
        <Header/>
        <div className="home__container">
            <h1 className="home__title">Welcome to Mapify!</h1>
            <div className="home__welcome_para">

            <p>New to the website?<a href="/signup">Sign Up</a></p>
            
            <p>Already a member?<a href="/login">Sign In</a></p>
            
            <p>In a hurry?<a href="/">Continue as a guest</a></p>
            
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Home
