import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss"; 

import Carousel from '../Carousel/index.js';
import Noise from '../img/noise.png';
import Poster from '../img/poster.png';

export default function Header() {

  const headerCards = [
    { id: 1, title: "Header 1", description: "Desc 1", image: Poster, badges: ["Триває"] },
    { id: 2, title: "Header 2", description: "Desc 2", image: Poster },
  ];

  return (
    <header className="header-container">
      <div className="container">
        <Carousel cards={headerCards} />
      </div>
    </header>
  );
}