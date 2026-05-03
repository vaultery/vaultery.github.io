import React, { useState, useEffect } from "react";
import './index.scss';

export default function ProgressBar({ currentAmount, targetAmount, progressPercent, accentColor, visible }) {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const [animatedAmount, setAnimatedAmount] = useState(0);

  const formatCurrency = (n) =>
    Math.round(n).toLocaleString("uk-UA", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const markers = [25, 50, 75];

  useEffect(() => {
    if (!visible) return;

    let startTimestamp = null;
    const duration = 2000; // 3 секунди

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Функція плавного сповільнення (EaseOutQuart)
      const ease = 1 - Math.pow(1 - progress, 4);

      setAnimatedPercent(ease * progressPercent);
      setAnimatedAmount(ease * currentAmount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animationId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationId);
  }, [progressPercent, currentAmount, visible]);

  return (
    <div className="glass-progress mb-3">
      <div className="glass-labels d-flex align-items-center mb-1" style={{ gap: "12px", justifyContent: "space-between" }}>
        {/* Числа округлюємо при виводі, щоб не було десятих */}
        <strong style={{ color: accentColor, textAlign: "left", fontVariantNumeric: "tabular-nums" }}>
          {formatCurrency(animatedAmount)} ₴
        </strong>

        <span style={{ fontSize: "0.85rem", opacity: 0.6, fontWeight: 600, color: "white", fontVariantNumeric: "tabular-nums" }}>
          {Math.round(animatedPercent)}%
        </span>

        <span style={{ opacity: 0.7, textAlign: "right", fontSize: "0.9rem", color: "white" }}>
          з {formatCurrency(targetAmount)} ₴
        </span>
      </div>

      <div className="glass-track" style={{ height: "8px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "10px", position: "relative", overflow: "hidden" }}>
        {markers.map((marker) => (
          <div key={marker} style={{ position: "absolute", left: `${marker}%`, top: "20%", bottom: "20%", width: "1px", backgroundColor: "rgba(255,255,255,0.25)", zIndex: 3 }} />
        ))}

        <div
          className="glass-fill"
          style={{
            // Використовуємо progressPercent напряму для смужки
            width: visible ? `${progressPercent}%` : "0%",
            height: "100%",
            backgroundColor: accentColor,
            borderRadius: "10px",
            // CSS зробить рух смужки ідеальним
            transition: visible ? "width 4s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
            boxShadow: `0 0 10px ${accentColor}44`,
            position: "relative",
            zIndex: 2,
          }}
        />
      </div>
    </div>
  );
}
