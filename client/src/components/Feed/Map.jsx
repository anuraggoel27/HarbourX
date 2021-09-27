import React from "react";
import { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import { Marker } from "react-map-gl";
import { Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Fab from "@material-ui/core/Fab";
import axios from "axios";
//ye page open hote hi user ka current location show hoga

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 4, 5),
  },
}));

function Map() {
  const id = window.location.pathname.split("/")[2];
  const [lat, setLat] = useState(0);
  const [lon, setLong] = useState(0);
  const [nameOfPlace, setNameOfPlace] = useState("");
  const [viewport, setViewport] = useState({
    width: "400px",
    height: "400px",
    latitude: lat,
    longitude: lon,
    zoom: 4,
    pitch: 50,
  });
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/user/${id}/addphoto`, {
        user_id: id,
        link: link,
        nameOfPlace: nameOfPlace,
        latitude:lat,
        longitude:lon
      })
      .then((res) => {
        window.location.replace(
          `${process.env.REACT_APP_CLIENT_URL}/user/${id}`
        );
      })
      .catch((err) => console.log(err));
  };

  const handleClick = (e) => {
    window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/addmemory`);
  };
  const onLocationChange = (e) => {
    setNameOfPlace(e.target.value);
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
      <button className="add-new-memory" onClick={handleOpen}>
        Add New Memory
      </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add new Memories</h2>
            <div id="transition-modal-description">
              <div className="AddingMemory">
                <input
                  onChange={onLocationChange}
                  placeholder="Name of the place"
                />
                <br />
                {/* <input
          type="file"
          onChange={(e) => {
            addfilechange({ file: URL.createObjectURL(e.target.files[0]) });
          }}
        ></input> */}
                <input
                  type="text"
                  placeholder="Insert Image Link Here"
                  id="imageLink"
                />
                <img src={selectedfile.file} alt="" />
                
                <br />
                <iframe
                  src="https://laughing-dijkstra-7b47ad.netlify.app/"
                  title="Imgur Uploader"
                  width="100%"
                  height="250px"
                  id="iframeId"
                ></iframe>
                <button className="add-memory" onClick={HandleAddMemory}>
                  Add Memory
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default Map;
