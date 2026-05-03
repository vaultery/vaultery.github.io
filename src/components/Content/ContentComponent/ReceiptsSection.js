import React from "react";
import Carousel from "../../Carousel/index.js"; 
import SectionHeader from "../ContentComponent/SectionHeader.js";

const ReceiptsSection = ({ receipts, driveLink }) => {
  // Формуємо дані для карток
  const receiptCards = Object.values(receipts).map((src, index) => ({
    id: index,
    image: src,
    title: `Звіт №${index + 1}`,
    description: "", 
    hideButtons: true,
    imageStyle: { borderRadius: '0' } 
  }));

  return (
    <div className="w-100 px-3 mb-5">
      {/* ЛІНІЯ ТА ЗАГОЛОВОК */}
      <SectionHeader title="Звітність" />    

      {/* КАРУСЕЛЬ */}
      <div className="receipts-carousel-wrapper mb-4">
        <Carousel cards={receiptCards} />
      </div>

      {/* ГОЛОВНА КНОПКА DRIVE ЗНИЗУ */}
      <div className="d-flex justify-content-center mt-4">
        <a
          href={driveLink}
          target="_blank"
          rel="noreferrer"
          className="btn d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #e67e22',
            color: 'white',
            fontWeight: 'bold',
            padding: '12px 28px',
            borderRadius: '12px',
            minWidth: '240px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(230, 126, 34, 0.1)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0px)';
          }}
        >
          <span style={{ marginRight: '12px', fontSize: '1.2rem' }}>📂</span> 
          ПЕРЕГЛЯНУТИ В DRIVE
        </a>
      </div>
    </div>
  );
};

export default ReceiptsSection;