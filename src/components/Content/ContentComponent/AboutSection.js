import React from 'react';
import { Collapse } from 'react-collapse'; 
import AnimatedBlock from '../ContentComponent/AnimatedBlock.js';
import Carousel from '../../Carousel/index.js'; 
import SectionHeader from '../ContentComponent/SectionHeader.js';

const AboutSection = ({ 
  images, 
  parts, 
  accentColor, 
  showOther, 
  setShowOther 
}) => {

  // Формуємо дані для карток каруселі
  const aboutCards = [
    {
      id: "description",
      image: images.image4,
      title: "Забезпечення ремонтної роти 152-ї ОЄБр",
      description: "Автомобіль необхідний для оперативного підвезення особового складу, запчастин та евакуації пошкодженої техніки.",
      hideDonateButton: true, // Вмикаємо логіку приховування кнопок, яку ми додали раніше
      hideMoreButton: true, // Вмикаємо логіку приховування кнопок, яку ми додали раніше

    },
    {
      id: "instagram",
      image: images.image5,
      title: "Допис в Instagram",
      buttonDonateText:"Переглянути 📸",
      buttonDonateLink: "https://www.instagram.com/p/DSp-s4gCDoQ/",
    }
  ];

  return (
    <div className="w-100 mt-5">
      {/* 1. ЗАГОЛОВОК ТА КАРУСЕЛЬ */}
      <SectionHeader title="Про Збір" />   

      <div className="carousel-wrapper mb-5">
        <Carousel cards={aboutCards} />
      </div>

      {/* 2. ІНФОРМАЦІЙНИЙ БЛОК ТА СПИСОК ЗАПЧАСТИН */}
      <div className="table-report-container faq-item p-4 d-flex flex-column align-self-center">
        <h5 style={{ color: "white", fontWeight: "bold", marginBottom: "15px", textAlign: "center" }}>
          T4 - перевірене рішення для щоденної роботи
        </h5>

        <p style={{ 
          color: "rgba(255, 255, 255, 0.8)", fontSize: "0.95rem", lineHeight: "1.6",
          textAlign: "justify", hyphens: "auto", width: "100%" 
        }}>
          Це автомобіль, який підходить для постійного використання та виконання різнопланових завдань у складних умовах, без привʼязки до місця й часу.
        </p>

        <p style={{ 
          color: "white", fontWeight: "500", margin: 0, marginBottom: "20px",
          textAlign: "justify", hyphens: "auto", width: "100%" 
        }}>
          Від справності цього авто залежить швидкість виконання технічних процесів і здатність підрозділу діяти без затримок.
        </p>

        <div className="d-grid gap-2 col-md-6 mx-auto">
          <button
            className="btn fw-bold text-white py-3"
            onClick={() => setShowOther(!showOther)}
            style={{
              backgroundColor: '#e67e22', borderRadius: '8px', border: 'none',
              boxShadow: showOther 
                ? 'inset 0px 4px 8px rgba(0,0,0,0.3)' 
                : '0px 4px 15px rgba(230, 126, 34, 0.3)',
              textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem',
              transition: 'all 0.3s ease', position: 'relative', top: showOther ? '2px' : '0px'
            }}
          >
            <span style={{ marginRight: '10px', fontSize: '1.1rem' }}>
              {showOther ? '✕' : '⚙️'} 
            </span>
            {showOther ? 'Згорнути список' : 'Список запчастин'}
          </button>
        </div>

        <Collapse isOpened={showOther}>
          <div className="card card-body border-0 shadow-sm mt-4" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '0px', borderRadius: '0px',
            overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ 
              maxHeight: '400px', overflowY: 'auto', scrollbarWidth: 'thin', 
              scrollbarColor: `${accentColor} transparent` 
            }} className="custom-scrollbar">
              <table className="parts-table table table-striped table-hover mb-0" style={{ width: '100%', tableLayout: 'fixed' }}>
                <thead className="table-dark">
                  <tr>
                    <th style={{ width: '50px', whiteSpace: 'nowrap' }}>№</th>
                    <th style={{ width: '60%' }}>Назва деталі</th>
                    <th style={{ width: '100px', maxWidth: '100px', whiteSpace: 'nowrap', textAlign: 'center' }}>Кількість</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: 'rgba(230, 126, 34, 0.15)' }}>
                    <td colSpan="3" style={{ 
                      textAlign: 'center', fontWeight: 'bold', color: '#ff9800',
                      textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px',
                      borderBottom: '1px solid rgba(255, 152, 0, 0.3)', padding: '10px 0'
                    }}>
                      * Згідно із запитом підрозділу
                    </td>
                  </tr>
                  {parts && parts.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.n}</td>
                      <td className="text-end">{item.q}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default AboutSection;