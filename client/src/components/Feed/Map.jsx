import React from "react";
import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import { Marker } from "react-map-gl";
import { Button } from "react-bootstrap";
import axios from "axios";
//ye page open hote hi user ka current location show hoga

function Map() {
  const id = window.location.pathname.split("/")[2];
  const [lat, setLat] = useState(0);
  const [lon, setLong] = useState(0);
  const [viewport, setViewport] = useState({
    width: "400px",
    height: "400px",
    latitude: lat,
    longitude: lon,
    zoom: 4,
    pitch: 50,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    setViewport({ ...viewport, latitude: lat, longitude: lon });
  }, [lat, lon]);

  const HandleAddMemory = (e) => {
    const link = document.getElementById("imageLink").value;
    console.log(link);
    axios.post(`${process.env.REACT_APP_SERVER_URL}/user/${id}/addphoto`,{
      user_id:id,
      link:link,
    })
    .then((res)=>{
      window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/user/${id}`)
    })
    .catch((err)=>console.log(err))
  }

  const handleClick = (e) => {
    window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/addmemory`);
  };

  const [selectedfile, addfilechange] = useState({ file: null });
  return (
    <>
    {/* Change size of map div */}
      <ReactMapGL
        mapStyle={"mapbox://styles/mapbox/dark-v9"}
        mapboxApiAccessToken={
          "pk.eyJ1IjoibG92ZTMwMDAiLCJhIjoiY2t1MDV6bzBlMXV0czJ1cDh0N3pjdmQ2ZyJ9.4t8lDekYyr4LN86ch-z4vg"
        }
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker
          longitude={lon}
          latitude={lat}
          draggable={false}
          offsetLeft={-15}
          offsetTop={-20}
        >
          <img
            src="https://www.containerrental.com/public/img/marker/free-map-marker-icon-blue.png"
            alt=""
            width={Math.max(viewport.zoom * 5, 30)}
            height={Math.max(viewport.zoom * 5, 30)}
          />
        </Marker>
      </ReactMapGL>
      <div className="AddingMemory">
        <input placeholder="Where you are?" />
        <br />
        {/* <input
          type="file"
          onChange={(e) => {
            addfilechange({ file: URL.createObjectURL(e.target.files[0]) });
          }}
        ></input> */}
        <input type="text" placeholder="Insert Image Link Here" id="imageLink" />
        <img src={selectedfile.file} alt="" />
        <textarea placeholder="How's that place?"  />
        <br />
        <iframe
          src="https://laughing-dijkstra-7b47ad.netlify.app/"
          title="Imgur Uploader"
          width="500px"
          height="800px"
          id="iframeId"
        ></iframe>
        <button onClick={HandleAddMemory}>Add Memory</button>
      </div>
    </>
  );
}

export default Map;
