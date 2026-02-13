// import React from "react";
// import "./index.scss";

// export default function Card({ title, description, image }) {
//   return (
//     <div className="card">
//       <img src={image} className="card__image" alt={title} />
//       <div className="card__body">
//         <h5 className="card__title">{title}</h5>
//         <p className="card__description">{description}</p>
//         <a href="#" className="card__button_more">Детальніше 🔍</a>
//         <a href="#" className="card__button">ПІДТРИМАТИ 🍀</a>
//       </div>
//     </div>
//   );
// }


import React from "react";
import "./index.scss";

export default function Card({ title, description, image, badges = [] }) {
  return (
    <div className="card">
      <div className="card__image-wrapper">
        <img src={image} className="card__image" alt={title} />
        <div className="card__badges">
          {badges.map((badge, index) => (
            <span key={index} className={`card__badge card__badge--${badge.toLowerCase()}`}>
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="card__body">
        <h5 className="card__title">{title}</h5>
        <p className="card__description">{description}</p>
        <a href="#" className="card__button_more">Детальніше 🔍</a>
        <a href="#" className="card__button">ПІДТРИМАТИ 🍀</a>
      </div>
    </div>
  );
}
