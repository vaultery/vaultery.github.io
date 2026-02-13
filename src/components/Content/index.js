import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Collapse } from 'react-collapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../Carousel/index.js';

import '../../index.scss';
import './index.scss';
import Poster from '../img/poster.png';


export default function Content() {

  const contentCards = [
    { id: 101, title: "Content 1", description: "C Desc 1", image: Poster },
    { id: 102, title: "Content 2", description: "C Desc 2", image: Poster },
  ];

  return (
    <div className='portfolio' style={{ overflowX: 'hidden' }}>
      <div className='container py-4'>
        <Carousel cards={contentCards} />
      </div>
    </div>
  );
}