import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navigation from './components/Navigation/index.js'
import Header from './components/Header';
import Content from './components/Content';
import EveryFundraising from './components/EveryFundraising';
import FAQ from './components/FAQ/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navigation /> */}
    <Header />
    <Content />
    <EveryFundraising />
    <FAQ />
  </React.StrictMode>
);