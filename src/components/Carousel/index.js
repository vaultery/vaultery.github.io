import React from "react";
import Slider from "react-slick";
import Card from "../Card/index.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

export default function Carousel({ cards = [] }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 1024, settings: { slidesToShow: 2, arrows: true } },
      { breakpoint: 1440, settings: { slidesToShow: 3, arrows: true } },
      { breakpoint: 1920, settings: { slidesToShow: 4, arrows: true } },
    ],
  };

  return (
    <Slider {...settings} className="carousel">
      {cards.map((card) => (
        <div key={card.id}>
          <Card {...card} />
        </div>
      ))}
    </Slider>
  );
}
