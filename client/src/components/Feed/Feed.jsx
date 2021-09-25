import React, { useState } from "react";

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

  return (
    <div className="feed_container">
      <h1>{name}</h1>
      <p>{bio}</p>
      <p>{home}</p>
      <p>{hometown}</p>
      {photos.map((photo, i) => (
        <img src={photo} index={i} alt=""></img>
      ))}
    </div>
  );
};

export default Feed;
