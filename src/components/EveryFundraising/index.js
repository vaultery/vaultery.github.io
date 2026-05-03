import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss"; 
import SectionHeader from '../Content/ContentComponent/SectionHeader.js';

import Carousel from '../Carousel/index.js';
import Noise from '../img/noise.png';
import Poster from '../img/poster.png';
import Poster2 from '../img/poster2.jpg';


export default function EveryFundraising() {

const headerCards = [
  { 
    id: 101, 
    title: "На деталі та ремонт VW T4", 
    description: "Для ремроти 152-ї ОЄБр", 
    image: Poster, 
    tags: ["Закрито"],              
    buttonDonateText: "ЗВІТ 📂",
    buttonDonateLink: "https://music.youtube.com/playlist?list=OLAK5uy_ntr7rK3elMa7EjGxoZDgc-Bac1R6puMeg",
    buttonMoreText: "Детальніше 🔍",
    buttonMoreLink: ""
  },
  { 
    id: 102, 
    title: "На інструменти", 
    description: "Для ремроти 152-ї ОЄБр", 
    image: Poster2, 
    tags: ["Закрито"], 
    buttonDonateText: "ЗВІТ 📂",
    buttonDonateLink: "https://music.youtube.com/playlist?list=OLAK5uy_ntr7rK3elMa7EjGxoZDgc-Bac1R6puMeg",
    buttonMoreText: "Детальніше 🔍",
    buttonMoreLink: ""

  },
];

  return (
    <header className="header-container">
        <div className="container">
        <SectionHeader title="Попередні Збори" />    
        <Carousel cards={headerCards} />
      </div>
    </header>
  );
}