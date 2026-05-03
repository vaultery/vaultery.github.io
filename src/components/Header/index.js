import React, { useState, useEffect, useRef, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "../ProgressBar";
import './index.scss';

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
const DONATION_CONFIG = {
  cardNumber: "4874 1000 2255 9192",
  accentColor: "#e67e22ff",
  // accentColor: "#ffc107",
  targetAmount: 25000,
  currentAmount: 25000.00,
  donationLink: "https://send.monobank.ua/jar/7XZ8RWV88L",
  title: "Збір",
  subtitle: "На деталі та ремонт Volkswagen T4",
  // statusLabel: "ЗАКРИТО",
  buttonViewBank: "Перевірити банку",
  copySuccessText: "Скопійовано ✓",
  cardLabel: "Номер картки банки",
  footerText: {
    top: "",
    bottom: ""
  }
};
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

export default function Header() {
  const {
    cardNumber,
    accentColor,
    targetAmount,
    currentAmount,
    donationLink,
    title,
    subtitle,
    // statusLabel,
    buttonViewBank,
    copySuccessText,
    cardLabel,
    footerText
  } = DONATION_CONFIG;

  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  const progressPercent = useMemo(
    () => Math.min((currentAmount / targetAmount) * 100, 100),
    [currentAmount, targetAmount]
  );

  // 2. Функція копіювання
  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(cardNumber);
        setCopied(true);
        // Повертаємо початковий стан через 1.2 секунди
        setTimeout(() => setCopied(false), 1200);
      }
    } catch (err) {
      console.error("Помилка копіювання", err);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="hero-container">
      <div
        ref={cardRef}
        className={`glass-card ${visible ? "show" : ""}`}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out",
          display: "flex",        
          flexDirection: "column",
          justifyContent: "space-between" 
        }}
      >
        {/* <div className="closed-badge">{statusLabel}</div> */}

        <div>
          <h5 className="glass-title">{title}</h5>
          <p className="glass-subtitle">{subtitle}</p>

          <ProgressBar
            currentAmount={currentAmount}
            targetAmount={targetAmount}
            progressPercent={progressPercent}
            accentColor={accentColor}
            visible={visible}
          />
        </div>

        <div style={{ marginTop: "5px" }}>
          {/* Кнопка переходу на банку */}
          <a
            href={donationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-100 fw-bold mb-2 mt-1 p-2"
            style={{
              backgroundColor: `${accentColor}`,
              border: `1px solid ${accentColor}`, 
              color: "white",
              borderRadius: "10px",
            }}
          >
            {buttonViewBank}
          </a>

          {/* 3. Кнопка копіювання картки */}
          <button
            onClick={handleCopy}
            className={`btn w-100 d-flex align-items-center justify-content-center gap-2 ${
              copied ? "btn-success text-white" : "btn-outline-light"
            }`}
            style={{ borderRadius: "10px", fontSize: "0.9rem", border: copied ? "none" : "1px solid rgba(255,255,255,0.3)" }}
          >
            <span style={{ minWidth: "150px", textAlign: "center" }}>
              {copied ? copySuccessText : cardNumber}
            </span>
            {!copied && (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
              </svg>
            )}
          </button>

          <p style={{
            fontSize: "0.75rem",
            color: "white",
            opacity: 0.4,
            margin: "8px 0",
            textAlign: "center",
          }}>
            {cardLabel}
          </p>

          <p style={{
            fontSize: "0.85rem",
            color: "#ffffff",
            textAlign: "center",
            lineHeight: "1.3",
            margin: "10px 0 0 0",
            opacity: 0.9
          }}>
            <span style={{ fontSize: "0.8rem", opacity: 0.8 }}>
              {footerText.top}<br />
              {footerText.bottom}
            </span>
          </p>
        </div>
      </div>

      <div className="double-arrow-down" style={{ marginTop: "20px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" viewBox="0 0 24 24" fill={accentColor}>
          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
          <path d="M7.41 13.59 12 18.17l4.59-4.58L18 15l-6 6-6-6z" />
        </svg>
      </div>
    </header>
  );
}