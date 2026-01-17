import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Heart, Award, Users, Rocket } from 'lucide-react';
import './About.css';

const AboutPage = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const stats = [
        { icon: <Users />, label: 'Happy Clients', value: '250+' },
        { icon: <Award />, label: 'Projects Completed', value: '500+' },
        { icon: <Rocket />, label: 'Expert Team', value: '50+' },
    ];

    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="about-hero">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <h1>Empowering Digital Future</h1>
                    <p>Innovation • Excellence • Integrity</p>
                </motion.div>
            </section>

            {/* Who We Are */}
            <section className="section-padding who-we-are">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="image-wrapper"
                >
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Our Office" />
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="content-text"
                >
                    <span className="content-subtitle">Who We Are</span>
                    <h2 className="text-3xl font-bold my-4">Your Partner in Tech Innovation</h2>
                    <p>
                        Inspired by the excellence of leading tech firms like Arah Infotech, we provide cutting-edge 
                        software solutions tailored to your business needs. We specialize in transforming 
                        complex challenges into seamless digital experiences.
                    </p>
                    <p className="mt-4">
                        Our journey started with a simple goal: to make technology accessible and 
                        impactful for businesses of all sizes.
                    </p>
                </motion.div>
            </section>

            {/* Stats Bar */}
            <section className="stats-bar">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <h2>{stat.value}</h2>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </section>

            {/* Vision & Mission Section */}
            <section className="section-padding bg-light">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Our Core Values</h2>
                </div>
                
                <div className="cards-container">
                    <motion.div 
                        whileHover={{ y: -10 }}
                        className="about-card"
                    >
                        <div className="icon-box"><Eye /></div>
                        <h3>Our Vision</h3>
                        <p>To be the world's most trusted partner for technology transformation and creative digital solutions.</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -10 }}
                        className="about-card"
                    >
                        <div className="icon-box"><Target /></div>
                        <h3>Our Mission</h3>
                        <p>To provide high-quality, cost-effective, and innovative IT services that help our clients achieve their business goals.</p>
                    </motion.div>

                    <motion.div 
                        whileHover={{ y: -10 }}
                        className="about-card"
                    >
                        <div className="icon-box"><Heart /></div>
                        <h3>Our Values</h3>
                        <p>Transparency, customer obsession, and constant learning are at the heart of everything we do at our company.</p>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding text-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="cta-box bg-blue-600 text-white p-12 rounded-3xl"
                    style={{backgroundColor: '#007bff', color: 'white', borderRadius: '30px', padding: '60px'}}
                >
                    <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
                   <a href='http://localhost:5173/contact'> <button style={{
                        padding: '15px 40px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        borderRadius: '50px',
                        border: 'none',
                        backgroundColor: 'white',
                        color: '#007bff',
                        cursor: 'pointer'
                    }}>
                        Contact Us Today
                    </button></a>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutPage;