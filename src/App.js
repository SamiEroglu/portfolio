import React from "react";
import "./App.css";
import Header from "../src/components/Header";
import NFT from "./components/NFT";
import Larvabg from "./components/Larvabg";
import Wordsmeta from "./components/Wordsmeta";
import Blocknote from "./components/Blocknote";
import Footer from "./components/Footer";
import Yanmenu from "./components/Yanmenu";
import Newslink from "./components/Newslink";
import Newcraftcom from "./components/Newcraftcom";
import Slidertext from "./components/Slidertext";

function App() {
  return (
    <div className="App">
      <Yanmenu />
      <React.Fragment>
        <Header />
      </React.Fragment>
      <Newcraftcom />
      <NFT />
      <Larvabg />
      <Blocknote />
      <Wordsmeta />
      <Newslink />
      <Slidertext />
      <Footer />
    </div>
  );
}

export default App;
