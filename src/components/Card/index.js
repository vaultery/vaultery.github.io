import React from "react";
import "./index.scss";

export default function Card({
  title,
  description,
  image,
  tags = [],
  buttonDonateText,
  buttonDonateLink,
  buttonMoreText = "Переглянути 📸",
  buttonMoreLink,
  hideDonateButton = false,
  hideMoreButton = false,
  imageStyle = {}
}) {
  const isClosed = tags.includes("Закрито");

  return (
    <div className={`card ${isClosed ? "card--status-closed" : ""}`}>
      <div className="card__image-wrapper">
        <img 
          src={image} 
          className={`card__image ${isClosed ? "card__image--grayscale" : ""}`} 
          alt={title}
          style={imageStyle} 
        />
      </div>

      <div className="card__body" style={{ display: 'flex', flexDirection: 'column' }}>
        <h5 className="card__title">{title}</h5>
        
        {description && <p className="card__description">{description}</p>}

        {tags.length > 0 && (
          <div className="card__tags">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className={`card__badge card__badge--${tag.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* КОНТЕЙНЕР КНОПОК: РОЗТЯГУВАННЯ НА ВСЮ ШИРИНУ */}
        <div 
          className="card__actions" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', // Кнопки будуть одна під одною і на всю ширину
            gap: '10px',             // Відступ між кнопками, якщо їх дві
            width: '100%', 
            marginTop: 'auto', 
            paddingTop: '15px' 
          }}
        >
          {!hideDonateButton && buttonDonateLink && (
            <a 
              href={buttonDonateLink} 
              className="card__button_donate"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ width: '100%', textAlign: 'center', display: 'block' }}
            >
              {buttonDonateText}
            </a>
          )}

          {!hideMoreButton && buttonMoreLink && (
            <a 
              href={buttonMoreLink} 
              className="card__button_more"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                width: '100%', 
                textAlign: 'center', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}
            >
              {buttonMoreText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}