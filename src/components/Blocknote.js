import React from "react";
import "../styles/blocknote.css";
import {
  Blocknotelogo,
  Eth,
  Bnb,
  Btc,
  Connectwallet,
  Mft,
  Profilfoto,
  Search,
  Emoji,
  Command,
  Flag,
  Pen,
} from "../icon";
import Dropdown from "react-bootstrap/Dropdown";
import { ButtonGroup } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";

const handleClickScroll = () => {
  const element = document.getElementById("section-3");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function Blocknote() {
  return (
    <div className="blockcont">
      <div id="section-3" className="baslik2" onClick={handleClickScroll}>
        BLOCKNOTE - Under Construction
      </div>
      <div className="loremwblockcont">
        <div className="container3">
          <div className="enustmenu-container">
            <div className="enustmenu">
              <div className="blocknotelogo">
                <Blocknotelogo />
              </div>
              <div className="cnwallet">
                <Connectwallet />
              </div>
            </div>
          </div>
          <div className="enustmenu-alt-container"></div>
          <div className="body">
            <div className="en-sol">
              <Profilfoto />
              <div className="ppisim">Lexaria</div>
              <div className="icons">
                <Eth />
                <Mft />
                <Btc />
                <Bnb />
                <Search />
              </div>
              <div className="alticons">
                {["up"].map((direction) => (
                  <DropdownButton
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="secondary"
                    title={` Drop ${direction} `}
                  >
                    <Dropdown.Item eventKey="1">
                      <Emoji />
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2">
                      <Command />
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      <Flag />
                    </Dropdown.Item>
                  </DropdownButton>
                ))}
              </div>
            </div>
            <div className="en-sol-1">
              <div className="inputbutton">
                <textarea
                  className="input"
                  id="ileti"
                  name="textarea"
                  rows="10"
                  cols="100"
                ></textarea>
                <button className="buttonpen">
                  <Pen />
                </button>
              </div>
            </div>
            <div className="en-sag-1"></div>
            <div className="en-sag"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blocknote;
