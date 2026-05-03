import React from 'react';
import AnimatedBlock from '../ContentComponent/AnimatedBlock.js';
import ProgressBar from '../../ProgressBar/index.js';

const DonationBlock = ({ 
  currentAmount, 
  targetAmount, 
  progressPercent, 
  accentColor, 
  formatCurrency,
  visible,
  setVisible,
  isHovered,
  setIsHovered,
  progressRef,
  donateRef
}) => {
  return (
    <>
      {/* БЛОК ПРОГРЕСУ ЗБОРУ */}
      <AnimatedBlock
        direction="Y"
        className={`progress-wrapper ${visible ? "show" : ""}`}
        ref={progressRef}
        onVisible={() => setVisible(true)}
      >
        <ProgressBar
          currentAmount={currentAmount}
          targetAmount={targetAmount}
          progressPercent={progressPercent}
          accentColor={accentColor}
          visible={visible}
        />

        <p
          className="text-center mt-2"
          style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px" }}
        >
          Залишилось зібрати: {formatCurrency(targetAmount - currentAmount)} ₴
        </p>
      </AnimatedBlock>

      {/* БЛОК КНОПКИ ДОНАТУ */}
      <AnimatedBlock
        direction="Y"
        style={{ width: '100%' }}
        className="d-flex justify-content-center"
        ref={donateRef}
      >
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <a
            href="https://send.monobank.ua/jar/7XZ8RWV88L"
            target="_blank"
            rel="noreferrer"
            className="btn text-white fw-bold w-100 d-flex align-items-center justify-content-center buttonDonate"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              backgroundColor: accentColor,
              borderRadius: "15px",
              padding: "18px 0",
              fontSize: "18px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              border: "none",
              "--pulse-glow": `${accentColor}80`,
              boxShadow: isHovered
                ? `0 15px 30px -5px ${accentColor}80`
                : undefined,
              transform: isHovered ? "scale(1.05) translateY(-3px)" : "scale(1)",
              transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <span style={{ marginRight: "12px", fontSize: "18px" }}>🐾</span>
            Подивитись банку
          </a>

          <div className="text-center mt-2">
            <small style={{ color: "rgba(255,255,255, 0.5)", fontSize: "12px" }}>
              MonoBank
            </small>
          </div>
        </div>
      </AnimatedBlock>
    </>
  );
};

export default DonationBlock;