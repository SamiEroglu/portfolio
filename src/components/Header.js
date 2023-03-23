import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/header.css";

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="maincont">
      <div className="container1">
        <div className="yazicont"></div>
        <div className="ustmenu-cont">
          <header style={{ justifyContent: "flex-start" }}>
            <nav ref={navRef}>
              <a
                href="https://www.w3schools.com/html/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="menulist">HTML</div>
              </a>
              <a
                href="https://www.w3schools.com/css/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="menulist1">CSS</div>
              </a>
              <a
                href="https://www.javascript.com/learn/strings"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="menulist2">JAVASCRIPT</div>
              </a>
              <a
                href="https://reactjs.org/docs/getting-started.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="menulist3">REACT</div>
              </a>

              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
              </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </header>
        </div>
      </div>
    </div>
  );
}
export default Header;
