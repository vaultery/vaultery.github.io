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
    buttonDonateLink: "https://drive.google.com/drive/folders/1eL9yknp9pf1DlaUmMGwEXNXsFoK2WaXI?usp=sharing",
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
    buttonDonateLink: "https://drive.google.com/drive/folders/1MiQW0NOJB6PrZ-C5SJu4RggWwy5crx1s?usp=drive_link",
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