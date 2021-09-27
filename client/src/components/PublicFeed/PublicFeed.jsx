import React,{useEffect,useState} from 'react'
import axios from 'axios'
const PublicFeed = () => {
    const [profile,setProfile]=useState([]);
    const getInfo=()=>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/`)
        .then((res)=>{
            console.log(res.data);
            setProfile(...profile,res.data);
        })
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getInfo();
    },[])
    
    return (
        <div className="public__container">
            {profile.map((p,i)=>{
                return(
                <div key={i} className="profile__details">
                    <h1 className="user__name">{p.name}</h1>
                    <p className="user__home">{p.hometown}</p>

                </div>
                )
            })}
        </div>
    )
}

export default PublicFeed
