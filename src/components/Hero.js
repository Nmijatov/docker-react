import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Dobrodošli na našu stranicu</h1>
        <p className="hero-subtitle">
          Kreirajte neverovatne aplikacije sa React-om i Docker-om
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Početak</button>
          <button className="btn btn-secondary">Saznaj više</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="hero-decoration"></div>
      </div>
    </section>
  );
}

export default Hero;
