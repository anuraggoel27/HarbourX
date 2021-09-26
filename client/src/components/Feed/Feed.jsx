import React, { useState } from "react";
import "./Feed.css";
import axios from "axios";
const Feed = () => {
  const id = window.location.pathname.split("/")[2];
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [home, setHome] = useState("");
  const [hometown, setHometown] = useState("");
  const [photos, setPhotos] = useState([]);

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

  const handleUpload = (e) => {
    const file= 
    console.log()
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
        {photos.map((photo, i) => (
          <img src={photo} index={i} alt=""></img>
        ))}
      </div>
      <input type="file" onChange={handleChange} id="file"  />
      <button id="button" name="button" value="Upload" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default Feed;
