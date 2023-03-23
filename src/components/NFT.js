import React from "react";
import "../styles/nft.css";

function NFT() {
  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nftcontwbaslik">
      <div id="section-1" className="baslik" onClick={handleClickScroll}>
        AEYES NFT's - Design v1.2
      </div>
      <div className="nftcontwlorem">
        <div className="nftcont">
          <div className="nfts">
            <iframe
              title="n1"
              className="nft1"
              src="https://editor.p5js.org/BGCRoide/full/jbIKG2-wa"
              rel="noopener noreferrer"
              target="_blank"
            ></iframe>
            <iframe
              title="n1"
              className="nft1"
              src="https://editor.p5js.org/BGCRoide/full/yJmlOsefT"
              rel="noopener noreferrer"
              target="_blank"
            ></iframe>
            <iframe
              title="n1"
              className="nft1"
              src="https://editor.p5js.org/BGCRoide/full/8FGwdkH23"
              rel="noopener noreferrer"
              target="_blank"
            ></iframe>
          </div>
          <div className="nfts1">
            <iframe
              title="n1"
              className="nft1"
              src="https://editor.p5js.org/BGCRoide/full/G1YLcanKX"
              rel="noopener noreferrer"
              target="_blank"
            ></iframe>
            <iframe
              title="n1"
              className="nft1"
              src="https://editor.p5js.org/BGCRoide/full/0La64dJdg"
              rel="noopener noreferrer"
              target="_blank"
            ></iframe>
            <iframe
              title="n1"
              className="nft1"
              src="https://editor.p5js.org/BGCRoide/full/lNXLkVZce"
              rel="noopener noreferrer"
              target="_blank"
            ></iframe>
          </div>
          <div className="nfts">
            <iframe
              title="n1"
              className="nft1"
              src="https://editor.p5js.org/BGCRoide/full/FeytPVn4s"
              rel="noopener noreferrer"
              target="_blank"
            ></iframe>
            <iframe
              title="n1"
              className="nft1"
              src="https://editor.p5js.org/BGCRoide/full/l2wMiubyF"
              rel="noopener noreferrer"
              target="_blank"
            ></iframe>
            <iframe
              title="n1"
              className="nft1"
              src="https://editor.p5js.org/BGCRoide/full/t8x5SnXzc"
              rel="noopener noreferrer"
              target="_blank"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFT;
