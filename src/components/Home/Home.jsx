import React from 'react';
import ScratchCard from 'react-scratchcard';
import confetti from "canvas-confetti";
import "./home.css"

const Home = () => {
    const settings = {
        width: 320,
        height: 280,
        image: 'https://i.imgur.com/NJQGBId.png',
        finishPercent: 50,
        onComplete: () => confetti({particleCount: 150, spread: 60})
    };

    return (
        <div>
            <nav className="d-flex">
                <img src="https://imgur.com/kydL87p.png" alt="merciii"></img>
                <div className="w-100">
                    <h1 className="text-center pt-3 pb-3">CHALLENGE MERCIII du 1.12.2022 AU 28.02.2023</h1>
                </div>
            </nav>
            <div className="header d-flex justify-content-center">
                <img src="https://i.imgur.com/qh8Zmmb.gif" alt="gif" className="gif"></img>
            </div>
            <h2 className="text-center pt-5" >Bonjour l'équipe ...</h2>
            <h3 className="text-center" >Combien de flyers ont été scannées dans votre agence
                ?</h3>
            <p className="text-center h3">Grattez ce ticket pour le savoir !</p>
            <div className="d-flex justify-content-center">
                <ScratchCard {...settings} >
                    <div className="h1 text-center m-5">XXX flyers ont été scannés à date !</div>
                </ScratchCard>
            </div>
        </div>
    );
};

export default Home;