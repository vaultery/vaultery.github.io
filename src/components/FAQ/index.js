import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Collapse } from 'react-collapse';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss"; 

const accentColor = "#e67e22ff";





const FAQItem = React.memo(({ question, children, accentColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="faq-item mb-3 p-3"
      onClick={() => setIsOpen(!isOpen)}
      style={{ cursor: 'pointer' }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h6 style={{
          color: 'white',
          margin: 0,
          fontSize: '16px',
          fontWeight: '600',
          transition: 'color 0.3s'
        }}>
          {question}
        </h6>
        <span style={{
          color: accentColor,
          fontSize: '20px',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}>
          {isOpen ? '✕' : '+'}
        </span>
      </div>

      <Collapse isOpened={isOpen}>
        <div style={{
          paddingTop: '12px',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          {children}
        </div>
      </Collapse>
    </div>
  );
});



export default function FAQ() {

  return (
    <div className="faq-container">
      <div className="container">


            

{/* --- ОНОВЛЕНИЙ FAQ (Акордеон) --- */}
<div className="d-flex flex-column align-items-center text-center">
  <h5 style={{ color: 'white', marginBottom: '16px' }}>Питання та відповіді</h5>
  <div style={{ width: '100%', maxWidth: '360px', textAlign: 'left' }}>
    
    <FAQItem question="Хто ви?" accentColor={accentColor}>
      Це приватний волонтерський збір, <strong>НЕ благодійний фонд</strong> та <strong>НЕ громадська організація</strong>.
    </FAQItem>

    <FAQItem question="Що це за збір?" accentColor={accentColor}>
      Ми збираємо кошти на потребу родича та його побратимів - <strong>ремонт автомобіля VW T4</strong> для підрозділу.
    </FAQItem>

    <FAQItem question="Чи можна перевірити збір?" accentColor={accentColor}>
      Так. Ми відкриті до перевірки — можете написати нам для уточнень або підтверджень.
    </FAQItem>

    <FAQItem question="Чи будуть звіти?" accentColor={accentColor}>
      Так, після закриття збору будуть опубліковані фото та звіти про використання коштів.
    </FAQItem>

  </div>
</div>


 {/* --- БЛОК ПОШТИ --- */}
          <div className="d-flex flex-column align-items-center mt-5 mb-0 text-center">
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '5px',
                fontSize: '14px',
              }}
            >
              Для питань та уточнень:
            </p>

            <a
              href="mailto:vaultery.info@gmail.com"
              style={{
                color: accentColor,
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                borderBottom: `1px dashed ${accentColor}`,
                paddingBottom: '2px',
                transition: 'opacity 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
            >
              vaultery.info@gmail.com
            </a>

            {/* <p style={{ fontSize: '12px', opacity: 0.5, color: 'white', margin: '15px 0px 0px 0px'}}>
              Останнє оновлення: 20.01.2026
            </p> */}
          </div>



      </div>
    </div>
  );
}