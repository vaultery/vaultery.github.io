import React, { useState, useEffect } from 'react';

const StickyDonate = ({ targetRef, link, accentColor, buttonText = "Подивитись банку" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      // 1. Поріг появи (300px від верху)
      const isPastThreshold = window.scrollY > 300;
      
      // 2. Перевірка на кінець сторінки (з буфером у 50px, щоб зникало трохи раніше)
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      // 3. Перевірка, чи ми ще не дійшли до основного блоку (прогрес-бару)
      const targetEl = targetRef?.current;
      const isBeforeTarget = targetEl 
        ? targetEl.getBoundingClientRect().top > window.innerHeight 
        : true;

      // Кнопка видима, якщо: пройшли поріг ТА не дійшли до цілі ТА не в самому низу
      const shouldShow = isPastThreshold && isBeforeTarget && !isAtBottom;
      
      setIsVisible(prev => (prev !== shouldShow ? shouldShow : prev));
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
        } else {
          handleWindowScroll();
        }
      },
      { threshold: 0.1 }
    );

    if (targetRef?.current) {
      observer.observe(targetRef.current);
    }
    
    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    // Викликаємо один раз при монтуванні, щоб встановити початковий стан
    handleWindowScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [targetRef]);

  return (
    <div className={`sticky-donate ${isVisible ? "visible" : ""}`}>
      <div style={{ maxWidth: "240px", margin: "0 auto" }}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn text-white fw-bold d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: accentColor,
            borderRadius: "12px",
            padding: "8px 14px",
            fontSize: "13px",
            boxShadow: `0 4px 15px ${accentColor}60`,
            minHeight: "45px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            transition: "all 0.3s ease"
          }}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default StickyDonate;