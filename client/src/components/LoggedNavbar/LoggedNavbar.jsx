import React, { useState, useRef} from "react";
import "./LoggedNavbar.css";
import { AiOutlineMinus } from "react-icons/ai";
import { layoutGenerator } from "react-break";

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 1250,
});

const OnAtMostTablet = layout.isAtMost("tablet");
const OnDesktop = layout.is("desktop");
const LoggedNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const loggednavbarRef=useRef();
  const handleClick = (event) => {
    setCollapsed((prev) => !prev);
    if (collapsed) {
      document.getElementById("body").classList.add("disabled");
      
    } else {
      document.getElementById("body").classList.remove("disabled");
      
    }
  };
  const id = window.location.pathname.split("/")[2];
  const user_site=`${process.env.REACT_APP_CLIENT_URL}/user/${id}`;
  return (
    <div>
      <div ref={loggednavbarRef}
      id="loggednavbar"
        className={
          collapsed
            ? "custom-loggednavbar loggednavbar-collapsed"
            : "custom-loggednavbar loggednavbar-expanded"
        }
      >
        <div className="loggednavbar__content">
        <a href="/"><div className="loggednavbar__navlink">Home</div></a>
        <a href="/public"><div className="loggednavbar__navlink">Public Feed</div></a>
        <a href={user_site}><div className="loggednavbar__navlink">Profile</div></a>
          
        </div>
      </div>
      <OnAtMostTablet>
        <button id="toggle-button" className="toggler-button" onClick={handleClick}>
          <AiOutlineMinus className={collapsed ? "top" : "top top-expanded"} />
          <AiOutlineMinus
            className={collapsed ? "middle" : "middle middle-expanded"}
          />
          <AiOutlineMinus
            className={collapsed ? "bottom" : "bottom bottom-expanded"}
          />
        </button>
      </OnAtMostTablet>

      <OnDesktop>
        <div className="desktop-loggednavbar">
        <a href="/"><div className="desktop-loggednavbar__link">Home</div></a>
          <a href="/public"><div className="desktop-loggednavbar__link">Public Feed</div></a>
          <a href={user_site}><div className="desktop-loggednavbar__link">Profile</div></a>
        </div>
      </OnDesktop>
    </div>
  );
};

export default LoggedNavbar;
