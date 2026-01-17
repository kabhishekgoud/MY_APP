import React from 'react';
import { color, motion } from 'framer-motion';
import { 
  Globe, Smartphone, Brain, Cpu, 
  BarChart3, ShieldCheck, Palette, Cloud,
  ArrowRight, Layers, Zap, Search
} from 'lucide-react';
import './ServicesPage.css'; // Import the new CSS file

const ServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      icon: <Globe size={32} />,
      description: "Crafting high-performance enterprise websites and SPAs using modern frameworks for ultimate scalability.",
      tech: ["React", "Next.js", "Node.js", "Laravel"],
      gradient: "linear-gradient(135deg, #3b82f6, #22d3ee)"
      
    },
    {
      title: "App Development",
      icon: <Smartphone size={32} />,
      description: "Native and cross-platform mobile solutions designed with a focus on UX/UI and seamless performance.",
      tech: ["Flutter", "React Native", "Swift", "Kotlin"],
      gradient: "linear-gradient(135deg, #6366f1, #a855f7)",
      id:'#web_development'
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain size={32} />,
      description: "Integrating intelligent algorithms and NLP models to automate workflows and extract business insights.",
      tech: ["Python", "TensorFlow", "OpenAI", "PyTorch"],
      gradient: "linear-gradient(135deg, #38bdf8, #2563eb)"
    },
    {
      title: "UI/UX Design",
      icon: <Palette size={32} />,
      description: "User-centric designs that prioritize accessibility, aesthetic appeal, and intuitive navigation flows.",
      tech: ["Figma", "Adobe XD", "Sketch", "Protopie"],
      gradient: "linear-gradient(135deg, #ec4899, #f43f5e)"
    },
    {
      title: "Digital Marketing",
      icon: <BarChart3 size={32} />,
      description: "Data-driven strategies including SEO, SEM, and social media management to maximize ROI.",
      tech: ["Google Ads", "Meta Ads", "SEO", "Analytics"],
      gradient: "linear-gradient(135deg, #fbbf24, #f97316)"
    },
    {
      title: "Cloud & Security",
      icon: <ShieldCheck size={32} />,
      description: "Robust cloud infrastructure and cybersecurity protocols to protect your business assets.",
      tech: ["AWS", "Azure", "Docker", "CyberSec"],
      gradient: "linear-gradient(135deg, #34d399, #0d9488)"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="services-page">
      
      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="blob-1"></div>
        <div className="blob-2"></div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="expertise-badge">Our Expertise</span>
            <h1 className="hero-title">
              Transforming Ideas Into <br />
              <span className="gradient-text">Digital Excellence</span>
            </h1>
            <p className="hero-description">
              We leverage cutting-edge technologies to build scalable, secure, and intelligent 
              solutions that drive global business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="services-grid-container">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="services-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              className="service-card"
            >
              <div className="icon-wrapper" style={{ background: service.gradient }}>
                {service.icon}
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="tech-stack">
                {service.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- WHY CHOOSE US / PROCESS --- */}
      <section className="why-us-section">
        <div className="why-us-content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="why-us-text"
          >
            <h2 style={{color:"white"}}>
              We Build Solutions That <br />
              <span className="blue-span">Scale With Your Vision</span>
            </h2>
            <p className="hero-description" style={{margin: '0 0 2rem 0'}}>
              Our approach goes beyond coding. We analyze your business ecosystem to 
              ensure our technology integrates perfectly and delivers measurable ROI.
            </p>
            
            <div className="feature-grid">
              {[
                { title: "Agile Sprints", icon: <Zap color="#fbbf24" /> },
                { title: "Quality QA", icon: <ShieldCheck color="#34d399" /> },
                { title: "Scalable Core", icon: <Layers color="#3b82f6" /> },
                { title: "Data Insights", icon: <Search color="#a855f7" /> }
              ].map((item, i) => (
                <div key={i} className="feature-item">
                  {item.icon}
                  <span style={{fontWeight: '600'}}>{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="image-container"
          >
            <div className="image-glow"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
              alt="Tech Innovation" 
              className="why-us-image"
            />
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="cta-section">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="cta-box"
        >
          <h2 style={{position: 'relative', zIndex: 10,color:' white'}}>
            Ready to Start Your <br /> Digital Journey?
          </h2>
          <p className="hero-description" style={{color: '#bfdbfe', marginBottom: '3rem', position: 'relative', zIndex: 10}}>
            Contact Arah Infotech today for a free technical consultation. Let's build 
            the future of your business together.
          </p>
           <motion.button href="http://localhost:5173/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-btn"
           

          >
           <a href="http://localhost:5173/contact"> Talk to an Expert</a> <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
};

export default ServicesPage;