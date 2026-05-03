import React from 'react';

const SectionHeader = ({ 
  title, 
  titleColor = '#ffffff',   // Колір заголовку (за замовчуванням білий)
  // lineColor = '#FFD700'     // Колір ліній (за замовчуванням жовтий)
  lineColor = '#ffffff',
}) => {
  return (
    <div className="d-flex align-items-center gap-3 mb-4 w-100">
      {/* ЛІВА ЛІНІЯ */}
      <hr 
        className="flex-grow-1" 
        style={{ 
          borderTop: `2px solid ${lineColor}`, 
          opacity: 1,
          margin: 0 
        }} 
      />
      
      {/* ЗАГОЛОВОК */}
      <h2 style={{ 
        color: titleColor, 
        margin: 0, 
        textTransform: 'uppercase', 
        letterSpacing: '2px', 
        fontSize: '1.5rem',
        whiteSpace: 'nowrap',
        fontWeight: 'bold'
      }}>
        {title}
      </h2>
      
      {/* ПРАВА ЛІНІЯ */}
      <hr 
        className="flex-grow-1" 
        style={{ 
          borderTop: `2px solid ${lineColor}`, 
          opacity: 1,
          margin: 0 
        }} 
      />
    </div>
  );
};

export default SectionHeader;