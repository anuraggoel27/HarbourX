import React, { useState,useEffect } from "react";
import "./PublicViewFeed.css";
import axios from "axios";
const Feed = () => {
  const id = window.location.pathname.split("/")[3];
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [home, setHome] = useState("");
  const [hometown, setHometown] = useState("");
  const [photo, setPhoto] = useState([]);
  useEffect(()=>{
      console.log(id);
    axios
    .get(`${process.env.REACT_APP_SERVER_URL}/user/${id}`)
    .then((res) => {
        console.log(res.data)
      const { name, bio, home, hometown, photos } = res.data;
      setName(name);
      setBio(bio);
      setHome(home);
      setHometown(hometown);
      setPhoto(...photo,photos);
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
    <div className="feed__container">

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
        {photo.map((p, i) => (
          <img src={p.link} key={i} alt="" style={{"height":"100px","width":"100px"}}></img>
        ))}
      </div>
    </div>
  );
};

export default Feed;
