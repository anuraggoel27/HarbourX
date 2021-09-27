import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./PublicFeed.css"
const PublicFeed = () => {
    const [users,setUsers]=useState([])
    const [profile,setProfile]=useState([]);
    const [photos,setPhotos]=useState([]);
    const getInfo=()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/`)
        .then((res)=>{
            setUsers(...users,res.data);
        })
        .catch((err)=>console.log(err))
    }
    const getPhotos=(e)=>{
        const id=e.target.id;
        // axios.get(`${process.env.REACT_APP_SERVER_URL}/user/${id}`)
        // .then((res)=>setProfile(...profile,res.data))
        // .catch((err)=>console.log(err))

        // console.log(profile)
        window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/public/user/${id}`);
    }
    useEffect(()=>{
        getInfo();
    },[])
    
    return (
        <div className="public__container">
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
    )
}

export default PublicFeed
