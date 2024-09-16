import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/style.css';
import '../css/reset.css';
import '../css/responsive.css';
import '../css/glightbox.css';

function Herosection() {
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <section className="hero" style={{ backgroundImage: `url(${'../../images/bg-image.webp'})` }}>
      <div className="container">
        <div className="hero_inner">
          <h1>{t('heroSection.heroTitle')}</h1> {/* Translated Title */}
          <p>
            {t('heroSection.heroDescription')} {/* Translated Description */}
          </p>
          <div className="app_store">
            <a href="#"><img src='../../images/App-Store.webp' alt="App Store" /></a>
            <a href="#"><img src='../../images/Play-Store.webp' alt="Play Store" /></a>
          </div>
        </div>
        <div className="hero_img">
          <img src='../../images/images.webp' alt="Rehla App is The Best App image" />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
