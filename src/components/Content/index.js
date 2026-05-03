import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Collapse } from 'react-collapse';
import { ALL_COLLECTIONS } from '../Config/index.js';

import '../../index.scss';
import '../Content/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProgressBar from "../ProgressBar";
import StickyDonate from './ContentComponent/StickyDonate.js';
import AnimatedBlock from './ContentComponent/AnimatedBlock.js';
import GratitudeSection from './ContentComponent/GratitudeSection.js';
import ReceiptsSection from './ContentComponent/ReceiptsSection.js';
import AboutSection from './ContentComponent/AboutSection.js';
import DonationBlock from './ContentComponent/DonationBlock.js';

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const currentProjectKey = 't4_repair';
const project = ALL_COLLECTIONS[currentProjectKey];
const { config, content, parts, receipts, images, videos } = project;

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// progressPercent //
const progressPercent = Math.min((config.currentAmount / config.targetAmount) * 100, 100);
const formatCurrency = (num) => num.toLocaleString('uk-UA');

export default function Content() {
  const [showOther, setShowOther] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeMainSlide, setActiveMainSlide] = useState(0);
  const [showSticky, setShowSticky] = useState(false);

  const {
    accentColor,
    targetAmount,
    currentAmount,
  } = config;

  const [visible, setVisible] = useState(false);

  const progressPercent = useMemo(
      () => Math.min((currentAmount / targetAmount) * 100, 100),
      [currentAmount, targetAmount]
    );
  
    const formatCurrency = (n) =>
      n.toLocaleString("uk-UA", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      });
  
  const donateRef = useRef(null);
  const progressRef = useRef(null);

  const handleMainScroll = useCallback((e) => {
    const index = Math.round(e.target.scrollLeft / (e.target.offsetWidth * 0.9));
    setActiveMainSlide(index);
  }, []);

  const handleSliderScroll = useCallback((e) => {
    const index = Math.round(e.target.scrollLeft / (e.target.offsetWidth * 0.8));
    setActiveSlide(index);
  }, []);

  const handleCardsScroll = useCallback((e) => {
  const slideWidth = e.target.offsetWidth * 0.85;
  const index = Math.round(e.target.scrollLeft / slideWidth);
  setActiveSlide(index);
}, []);


return (
  <div className="content" style={{ overflowX: 'hidden' }}>
    <div className="container py-4">
      
      {/* --- КОНТЕЙНЕР ДЛЯ ОДНОРОДНИХ БЛОКІВ --- */}
      <div 
        className="d-flex flex-column align-items-center gap-5 mb-0" 
        style={{ width: '100%' }}
      >
        
        {/* Блок подяки */}
        <GratitudeSection 
          content={project.content} 
          videos={project.videos} 
        />

        {/* Секція звітів та квитанцій */}
        <ReceiptsSection 
          receipts={project.receipts} 
          driveLink={project.config.driveLink} 
        />

        {/* Секція "Про збір" та список запчастин */}
        <AboutSection 
          images={images} 
          activeMainSlide={activeMainSlide} 
          handleMainScroll={handleMainScroll}
          parts={parts} 
          accentColor={config.accentColor} 
          showOther={showOther} 
          setShowOther={setShowOther} 
        />

        {/* Прогрес збору та основна кнопка донату */}
        <DonationBlock 
          currentAmount={config.currentAmount}
          targetAmount={config.targetAmount}
          progressPercent={progressPercent}
          accentColor={config.accentColor}
          formatCurrency={formatCurrency}
          visible={visible}
          setVisible={setVisible}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          progressRef={progressRef}
          donateRef={donateRef}
        />

        {/* Плаваюча кнопка для швидкого переходу до банку */}
        <StickyDonate 
          show={showSticky} 
          link="" 
          accentColor="" 
          buttonText="Подивитись банку" 
        />

      </div>
    </div>
  </div>
);
}