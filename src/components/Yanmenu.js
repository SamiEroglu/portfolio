import React from "react";
import "../styles/yanmenu.css";
import { FaInstagram, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
const handleClickScroll = () => {
  const element = document.getElementById("backtotop");
  if (element) {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
};
function Yanmenu() {
  return (
    <div className="yanmenu">
      <nav className="yanmenu-nav">
        <ul className="yanmenu-ul">
          <li>
            <a
              href="https://www.instagram.com/ergl.sami/?hl=de"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i>
                <FaInstagram />
              </i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sami-ero%C4%9Flu-37614b26a/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i>
                <FaLinkedin />
              </i>
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/SamiEroglu"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i>
                <FaGithub />
              </i>
              <span>Github</span>
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <i>
                <FaArrowUp id="backtotop" onClick={handleClickScroll} />
              </i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Yanmenu;
