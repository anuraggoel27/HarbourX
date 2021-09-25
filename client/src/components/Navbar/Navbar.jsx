import React, { useState, useRef} from "react";
import "./Navbar.css";
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
const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navbarRef=useRef();
  const handleClick = (event) => {
    setCollapsed((prev) => !prev);
    if (collapsed) {
      document.getElementById("body").classList.add("disabled");
      document.getElementById("footer").classList.add("disabled");
    } else {
      document.getElementById("body").classList.remove("disabled");
      document.getElementById("footer").classList.remove("disabled");
    }
  };
  return (
    <div>
      <div ref={navbarRef}
      id="navbar"
        className={
          collapsed
            ? "custom-navbar navbar-collapsed"
            : "custom-navbar navbar-expanded"
        }
      >
        <div className="navbar__content">
          <a href="/"><div className="navbar__navlink">Sign In</div></a>
          <a href="/"><div className="navbar__navlink">Sign Up</div></a>
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
        <div className="desktop-navbar">
          
          <a href="/login"><div className="desktop-navbar__link">Sign In</div></a>
          <a href="/signup"><div className="desktop-navbar__link">Sign Up</div></a>
        </div>
      </OnDesktop>
    </div>
  );
};

export default Navbar;
