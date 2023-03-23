import React from "react";
import "../styles/newslink.css";
import Carousel from "better-react-carousel";

const Gallery = () => {
  return (
    <Carousel cols={2} rows={2} gap={5} loop>
      <Carousel.Item>
        <a href="https://n3ws.link/" rel="noopener noreferrer" target="_blank">
          <img width="85%" src="img/news1.png" alt="" />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href="https://n3ws.link/crypto/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img width="85%" src="img/news2.png" alt="" />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href="https://n3ws.link/nft/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img width="85%" src="img/news3.png" alt="" />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href="https://n3ws.link/metaverse/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img width="85%" src="img/news4.png" alt="" />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href="https://n3ws.link/blockchain/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img width="85%" src="img/news5.png" alt="" />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href="https://n3ws.link/ai/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img width="85%" src="img/news6.png" alt="" />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href="https://n3ws.link/web3/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img width="85%" src="img/news7.png" alt="" />
        </a>
      </Carousel.Item>
    </Carousel>
  );
};
const handleClickScroll = () => {
  const element = document.getElementById("section-5");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function Newslink() {
  return (
    <div className="loremwnews">
      <div id="section-5" className="nwyazi" onClick={handleClickScroll}>
        N3WSLINK : Wordpress
      </div>
      <div className="container5">
        <div className="gallerywidth">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default Newslink;
