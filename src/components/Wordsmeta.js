import React from "react";
import "../styles/wordsmeta.css";
import Carousel from "better-react-carousel";

const Gallery = () => {
  return (
    <Carousel cols={1} rows={1} gap={10} loop>
      <Carousel.Item>
        <a
          href="https://wordsmeta.xyz/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img width="85%" src="img/wm1.png" alt="" />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href="https://wordsmeta.xyz/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img width="84.5%" src="img/wm2.png" alt="" />
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

const handleClickScroll = () => {
  const element = document.getElementById("section-4");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function Wordsmeta() {
  return (
    <div className="wwcont">
      <div id="section-4" className="wmyazi" onClick={handleClickScroll}>
        WORDSMETA
      </div>
      <div className="container4">
        <div className="gallerywidth">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default Wordsmeta;
