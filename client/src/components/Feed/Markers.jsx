import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { Marker } from "react-map-gl";

function Markers({ latitude, longitude }) {
  return (
    <Marker
      longitude={longitude}
      latitude={latitude}
      draggable={false}
      offsetLeft={-15}
      offsetTop={-20}
    >
      <img
        src="https://www.containerrental.com/public/img/marker/free-map-marker-icon-blue.png"
        alt=""
        width={Math.max(25)}
        height={Math.max(25)}
      />
    </Marker>
  );
}

export default Markers;
