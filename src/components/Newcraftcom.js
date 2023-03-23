import React from "react";
import "../styles/newcraftcom.css";

const handleClickScroll = () => {
  const element = document.getElementById("section-6");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function Newcraftcom() {
  return (
    <div className="n3c4container">
      <div id="section-6" className="baslik6" onClick={handleClickScroll}>
        N3WCR4FT - Under Maintenance
      </div>
      <div className="n3c4iframecont">
        <div style={{ width: "5%" }}></div>
        <iframe
          title="n3c4com1"
          className="n3c4com"
          src="https://n3c4-website.netlify.app/"
          alt=""
        ></iframe>
        <div style={{ width: "5%" }}></div>
      </div>
    </div>
  );
}

export default Newcraftcom;
