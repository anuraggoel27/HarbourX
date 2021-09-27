import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {LoggedHeader} from "../index";
import "./PublicFeed.css"
const PublicFeed = () => {
    const [users,setUsers]=useState([])
    const [profile,setProfile]=useState([]);
    const getInfo=()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/`)
        .then((res)=>{
            setUsers(...users,res.data);
        })
        .catch((err)=>console.log(err))
    }
    const getPhotos=(e)=>{
        const id=e.target.id;
        window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/public/user/${id}`);
    }
    useEffect(()=>{
        getInfo();
    },[])
    
    return (
        <>
        <LoggedHeader/>
        <div className="public__container" id="body">
            {users.map((user,i)=>{
                return(
                <div key={i}  className="profile__details">
                    <h1 className="user__name">{user.name}</h1>
                    <p className="user__home">{user.hometown}</p>
                    <button onClick={getPhotos} id={user._id}>Visit</button>
                    <img src={profile?.photos?.[0]} alt=""></img>
                </div>
                )
            })}
        </div>
        </>
    )
}

export default PublicFeed
