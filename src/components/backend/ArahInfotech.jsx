import React from 'react';
import { motion } from 'framer-motion';
import {
  Target, Eye, CheckCircle
} from 'lucide-react';
import './ArahInfotech.css';

const ArahInfotech = () => {
  const values = [
    "Innovation First",
    "Client-Centric Approach",
    "Excellence & Integrity",
    "Collaboration & Trust"
  ];

  return (
    <div className="company-page">
      {/* --- HERO SECTION --- */}
      <header className="hero-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="container hero-container"
        >
          <h1>Empowering Businesses Through <span className="highlight">Intelligent Tech</span></h1>
          <p className="txt_info">
            We build cutting-edge software and AI-driven solutions to help global 
            organizations innovate and scale confidently.
          </p>
          <div className="hero-btns">
            <a href="#about" className="btn-primary">Who We Are</a>
             <a href="/services" className="btn-secondary">Our Expertise</a>
          </div>
        </motion.div>
      </header>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="section about-section">
        <div className="container grid-2 align-center">
          <div className="about-text">
            <h2>About <span className="blue">Arah Infotech</span></h2>
            <p>
              Arah Infotech is a forward-thinking software development and AI solutions company. 
              We specialize in building intelligent, custom-tailored platforms that enhance 
              operational efficiency and deliver measurable business value.
            </p>
            <div className="values-list">
              {values.map((v, i) => (
                <div key={i} className="value-item">
                  <CheckCircle size={20} className="blue" /> <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-stats-grid">
            <div className="stat-card">
              <h3>100%</h3>
              <p>Innovation Driven</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Expert Support</p>
            </div>
            <div className="stat-card">
              <h3>Global</h3>
              <p>Service Reach</p>
            </div>
            <div className="stat-card">
              <h3>Secure</h3>
              <p>Data Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section className="vision-mission-section">
        <div className="container grid-2 gap-large">
          <motion.div whileHover={{ y: -10 }} className="info-card-large vision">
            <div className="card-icon-wrapper"><Eye size={40} /></div>
            <h3>Our Vision</h3>
            <p>To be a global leader in innovative software and AI solutions, shaping the future of business through technology.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="info-card-large mission">
            <div className="card-icon-wrapper"><Target size={40} /></div>
            <h3>Our Mission</h3>
            <p>To empower organizations through intelligent technology solutions that solve real-world problems and unlock new opportunities.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArahInfotech;