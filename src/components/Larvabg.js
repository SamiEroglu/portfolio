import React from "react";
import "../styles/larvabg.css";

const handleClickScroll = () => {
  const element = document.getElementById("section-2");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function Larvabg() {
  return (
    <div className="n3c4container">
      <div id="section-2" className="baslik1" onClick={handleClickScroll}>
        CELL PROJECT - LIVE
      </div>
      <div className="n3c4iframecont">
        <div style={{ width: "5%" }}></div>
        <iframe
          title="n3c4com1"
          className="n3c4com"
          src="https://cell-project.netlify.app/"
          alt=""
        ></iframe>
        <div style={{ width: "5%" }}></div>
      </div>
    </div>
  );
}

export default Larvabg;
