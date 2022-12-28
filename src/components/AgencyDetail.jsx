import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { data1 } from '../assets/json/export.js';
import { address } from '../assets/json/address.js';
import ScratchCard from "react-scratchcard";
import confetti from "canvas-confetti";

const AgencyDetail = () => {
    const { id } = useParams();
    const [agency, setAgency] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (address) {
            setAgency(address.filter((item) => item.id.toString() === id)[0]);
        } else {
            console.log('no address');
        }
    }, [id]);

    useEffect(() => {
        if (data1) {
            setData(data1.filter((item) => item.name.split('(')[1].split(')')[0] === id));
        } else {
            console.log('no data');
        }
    }, [agency, id]);

    const settings = {
        width: 320,
        height: 300,
        image: 'https://i.imgur.com/4tzVMNv.png',
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
            <h2 className="text-center pt-5" >Bonjour l'équipe { agency.name }</h2>
            <h3 className="text-center" >Combien de flyers ont été scannées dans votre agence ?</h3>
            <p className="text-center h3">Grattez ce ticket pour le savoir !</p>
            <div className="d-flex justify-content-center">
                <ScratchCard {...settings} >
                    <div className="h1 text-center m-5">{ data.length } flyers ont été scannés à date !</div>
                </ScratchCard>
            </div>
        </div>
    );
};

export default AgencyDetail;