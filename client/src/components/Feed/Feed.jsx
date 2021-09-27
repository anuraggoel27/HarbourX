import React, { useState,useEffect } from "react";
import "./Feed.css";
import axios from "axios";
import {Map} from "../index";
const Feed = () => {
  const id = window.location.pathname.split("/")[2];
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [home, setHome] = useState("");
  const [hometown, setHometown] = useState("");
  const [photos, setPhotos] = useState([]);
  useEffect(()=>{
    axios
    .get(`${process.env.REACT_APP_SERVER_URL}/user/${id}`)
    .then((res) => {
      const { name, bio, home, hometown, photos } = res.data;
      setName(name);
      setBio(bio);
      setHome(home);
      setHometown(hometown);
      setPhotos(photos);
    })
    .catch((err) => console.log(err));
  },[id])
  

  const handleUpload = (e) => {
    console.log(e.target);
  };

  const handleChange=(e)=>{
      console.log(e.target);
  }
  return (
    
    <div className="ScreenWrapper">
      <div className="feed__container">
        <div className="elementXwrapper">
          <div className="feed__name">
            <h3>{name}</h3>
          </div>
          <div className="feed__bio">
            <p>{bio}</p>
          </div>
          <div className="feed__address">
            <p>{home}</p>
          </div>
          <div className="feed__city">
            <p>{hometown}</p>
          </div>
          <div className="feed_map">
            {photos.map((photo, i) => (
              <img key={i} src={photo} index={i} alt=""></img>
            ))}
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Feed;
