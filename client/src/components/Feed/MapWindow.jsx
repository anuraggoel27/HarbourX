import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import { Markers } from "../index";
import axios from "axios";
function MapWindow({ latitude, longitude }) {
  const id = window.location.pathname.split("/")[3];
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/user/${id}`)
      .then((res) => {
        console.log(res.data.photos);
        setPhoto(res.data.photos);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const [viewport, setViewport] = useState({
    width: "400px",
    height: "400px",
    latitude: 28.7041,
    longitude: 77.1025,
    zoom: 4,
    pitch: 50,
  });

  return (
    <div className="mapwindow">
      <ReactMapGL
        mapStyle={"mapbox://styles/mapbox/dark-v9"}
        mapboxApiAccessToken={
          "pk.eyJ1IjoibG92ZTMwMDAiLCJhIjoiY2t1MDV6bzBlMXV0czJ1cDh0N3pjdmQ2ZyJ9.4t8lDekYyr4LN86ch-z4vg"
        }
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {photo.map((p, index) => (
          <>
            <Markers
              key={index}
              latitude={p.latitute}
              longitude={p.longitude}
            />
          </>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default MapWindow;
