import React from 'react';
import SectionHeader from '../ContentComponent/SectionHeader.js';

const GratitudeSection = ({ content, videos }) => {
  return (
    <div 
      className="container-fluid px-4" 
      style={{ 
        minHeight: '80vh', // Змінив на minHeight, щоб не було зайвого порожнього простору на великих екранах
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '2rem'
      }}
    >
      {/* Універсальний заголовок розділу */}
      <SectionHeader title="Подяка" titleColor="#e67e22" />    

      <div className="row align-items-center justify-content-center w-100 mt-4">
        
        {/* ЛІВА КОЛОНКА (ВІДЕО): Тепер займає більше місця по центру */}
        <div className="col-12 col-lg-6 d-flex justify-content-center px-lg-4">
          <div className="video-frame">
            <video
              playsInline
              controls
              preload="metadata"
              style={{
                width: '100%',
                maxWidth: '440px',
                height: 'auto',
                display: 'block',
                borderRadius: '0', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                backgroundColor: '#000'
              }}
            >
              <source src={videos.video1} type="video/mp4" />
              Ваш браузер не підтримує відео.
            </video>
          </div>
        </div>

        {/* ПРАВА КОЛОНКА (ТЕКСТ): Опис результату */}
        <div className="col-12 col-lg-4 text-center text-lg-start mt-4 mt-lg-0">
          <div className="gratitude-text-block">
            {/* <h3 style={{ color: '#e67e22', fontWeight: 'bold', marginBottom: '1rem' }}>
              Звітність за проектом
            </h3> */}
            <p className="lead fw-normal" style={{ color: 'white', opacity: 0.9, lineHeight: '1.6' }}>
              <span style={{ fontSize: '1.1rem' }}>
                {content.gratitudeText}
              </span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GratitudeSection;