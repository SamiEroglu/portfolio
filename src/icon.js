import React from 'react'
import "./App.css"

const handleClickScroll = () => {
    const element = document.getElementById('backtotop');
    if (element) {
    
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
  };

const Wm1 = () => {
    
    return(
        <img className='Wm1' src='img/wm1.png' alt=''></img>
    )
}
const Wm2 = () => {
    
    return(
        <img className='Wm2' src='img/wm2.png' alt=''></img>
    )
}
const Blocknotelogo= () =>{
    return (
        <div>
            <img src='img/Blocknote_Logo.png' alt='' className="blocknotelogo" />
        </div>
    );
}
const Connectwallet= () =>{
    return (
        <div>
            <img src='img/connectwallet.png' alt='' className="cnwallet" />
        </div>
    );
}
const Profilfoto= () =>{
    return (
        <div>
            <img src='img/profilfoto.png' alt='' className="pfoto" />
        </div>
    );
}
const Bnb= () =>{
    return (
        <div>
            <img src='img/bnb.png' alt='' className="solicon" />
        </div>
    );
}
const Btc= () =>{
    return (
        <div>
            <img src='img/btc.png' alt='' className="solicon" />
        </div>
    );
}
const Eth= () =>{
    return (
        <div>
            <img src='img/eth.png' alt='' className="solicon" />
        </div>
    );
}
const Mft= () =>{
    return (
        <div>
            <img src='img/mft.png' alt='' className="solicon" />
        </div>
    );
}
const Search= () =>{
    return (
        <div>
            <img src='img/search.png' alt='' className="solicon" />
        </div>
    );
}
const Command= () =>{
    return (
        <div>
            <img src='img/command.png' alt='' className="solalticon" />
        </div>
    );
}
const Flag= () =>{
    return (
        <div>
            <img src='img/flag.png' alt='' className="solalticon" />
        </div>
    );
}
const Menu= () =>{
    return (
        <div>
            <img src='img/menu.png' alt='' className="solalticon" />
        </div>
    );
}
const Emoji= () =>{
    return (
        <div>
            <img src='img/emoji.png' alt='' className="solalticon" />
        </div>
    );
}
const Pen= () =>{
    return (
        <div>
            <img src='img/pen.png' alt='' className="pen" />
        </div>
    );
}
const Instalogo= () =>{
    return (
        <div>
            <img src='img/instalogo.png' alt='' className="instalogo" />
        </div>
    );
}
const Twlogo= () =>{
    return (
        <div>
            <img src='img/twitterlogo.png' alt='' className="twlogo" />
        </div>
    );
}
const N3c4yazi= () =>{
    return (
        <div>
            <img src='img/n3c4yazi.png' alt='' className="n3c4yazi" />
        </div>
    );
}
const N3c4kucukyazi= () =>{
    return (
        <div>
            <img src='img/n3c4kucukyazi.png' alt='' className="n3c4kucukyazi" id='backtotop' onClick={handleClickScroll}/>
        </div>
    );
}
const Newslink1= () =>{
    return (
        <div>
            <img src='img/newslink1.png' alt='' className="newslink1"/>
        </div>
    );
}
const Newslink2= () =>{
    return (
        <div>
            <img src='img/newslink2.png' alt='' className="newslink2"/>
        </div>
    );
}


export{
    Wm1,Wm2, Blocknotelogo ,Connectwallet,Profilfoto,Bnb,Btc,Eth,Mft,Search,Emoji,Menu,Flag,Command,Pen,Instalogo,Twlogo,N3c4yazi,N3c4kucukyazi,Newslink1,Newslink2
}