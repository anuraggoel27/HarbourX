import React from "react";
import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import { Marker } from "react-map-gl";
import { Button } from "react-bootstrap";
import axios from "axios";
//ye page open hote hi user ka current location show hoga

function Map() {
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
    const iframe=document.getElementById('iframeId');
    var elmnt = iframe.contentWindow.document.getElementsByTagName("input");
    console.log(elmnt);
  }

  const handleClick = (e) => {
    window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/addmemory`);
  };

  const [selectedfile, addfilechange] = useState({ file: null });
  return (
    <>
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

          {/* the following button will redirect to a page where you can enter details and upload picture and add the memory to your timeline */}
          <button
            onClick={handleClick}
            style={({ padding: "5px" }, { backgroundColor: "tortquise" })}
          >
            Add to your Timeline
          </button>
        </Marker>
      </ReactMapGL>
      <div className="AddingMemory">
        <p>
          Longitude: {lat} Latitude : {lon}
        </p>
        <input placeholder="Name of the place" />
        <br />
        <p>Wanna add some memories?</p>
        <input
          type="file"
          onChange={(e) => {
            addfilechange({ file: URL.createObjectURL(e.target.files[0]) });
          }}
        ></input>
        <img src={selectedfile.file} alt="" />
        <p>Write something about this place !</p>
        <input placeholder="How was your experience?" />
        <br />
        <button onClick={HandleAddMemory}>Add Memory</button>
        <iframe
          src="https://cors.io/?https://deprov447.github.io/Imgur-Upload/"
          title="W3Schools Free Online Web Tutorials"
          width="500px"
          height="800px"
          id="iframeId"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
