import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss"; 

const FAQItem = React.memo(({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`faq-item ${isOpen ? 'active' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      style={{ cursor: 'pointer' }}
    >
      <div className="faq-header">
        <h6>{question}</h6>
        <span className="faq-icon" style={{ 
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          color: '#e67e22' 
        }}>
          {isOpen ? '✕' : '+'}
        </span>
      </div>

      <Collapse isOpened={isOpen}>
        <div className="faq-content">
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
        
        {/* --- FAQ SECTION --- */}
        <div className="d-flex flex-column align-items-center text-center">
          <h5>Питання та відповіді</h5>
          
          <div className="faq-list">
            <FAQItem question="Хто ви?">
              Це приватна ініціатива для організації та поширення зборів для родичів та їх побратимів. Важливо - ми <strong>НЕ благодійний фонд</strong> та <strong>НЕ громадська організація</strong>.
            </FAQItem>
            <FAQItem question="Як перевірити звітність?">
             Фото- та відеозвіти, а також документи про цільове використання коштів, 
              будуть представлені на <strong>цьому сайті</strong> та на 
              <strong> Google Drive за посиланням</strong>.
            </FAQItem>
            
          </div>
        </div>

        {/* --- CONTACT SECTION --- */}
        <div className="contact-section d-flex flex-column align-items-center mt-5 text-center">
          <p className="contact-label">Для питань та уточнень:</p>
          <a href="mailto:vaultery.info@gmail.com" className="contact-email">
            vaultery.info@gmail.com
          </a>
        </div>

      </div>
    </div>
  );
}