import React from 'react';
import './style.css';
import {HelmetProvider, Helmet} from 'react-helmet-async';

export default function App() {
  return (
    <div>
      <Helmet prioritizeSeoTags>
        <meta property="og:type" content="website">
        <meta property="og:title" content="Airtel Black">
        <meta property="og:description" content="Airtel Black's description of meta tag test website">
        <meta property="og:image" content="https://assets.airtel.in/static-assets/safo/dth/images/jpg/img_stb_2.jpg">
      </Helmet>
    </div>
  );
}
