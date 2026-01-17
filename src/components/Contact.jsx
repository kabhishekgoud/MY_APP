
import React, { useState } from 'react';
// Import EmailJS
import emailjs from '@emailjs/browser'; 
import { motion } from 'framer-motion';
import axios from "axios";
 import { FaCheckCircle } from "react-icons/fa";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare
} from 'lucide-react';
import './Contact.css';

const Contact = () => {

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    nda: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setContactData({
      ...contactData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const submitContact = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/contact", contactData)
      .then(res => {
        if (res.data.status) {
          alert("Request sent successfully");
          setContactData({
            name: "",
            email: "",
            phone: "",
            message: "",
           
          });
        } else {
          alert(res.data.msg);
        }
      })
      .catch(err => console.log(err));
  }; 


  const contactDetails = [
    {
      icon: <MapPin />,
      title: "Our Location",
      info: "123 Tech Street, Digital Valley, NY 10001",
      color: "#3b82f6"
    },
    {
      icon: <Phone />,
      title: "Phone Number",
      info: "+1 (234) 567-890",
      color: "#10b981"
    },
    {
      icon: <Mail />,
      title: "Email Address",
      info: "contact@arahinfotech.net",
      color: "#f59e0b"
    },
    {
      icon: <Clock />,
      title: "Working Hours",
      info: "Mon - Fri: 9AM - 6PM",
      color: "#8b5cf6"
    }
  ];

  return (
    <div className="contact-page">
      {/* --- HERO SECTION --- */}
      <section className="contact-hero">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <span className="badge">Get In Touch</span>
          <h1>Contact <span className="blue-text">Our Team</span></h1>
          <p>Have a project in mind? We'd love to hear from you. Send us a message and our team will get back to you within 24 hours.</p>
        </motion.div>
      </section>

      {/* --- INFO CARDS --- */}
      <section className="contact-info-grid">
        <div className="container">
          <div className="info-wrapper">
            {contactDetails.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="info-card"
              >
                <div className="icon-circle" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FORM & MAP SECTION --- */}
      <section className="form-map-section">
        <div className="container split-layout">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="form-container"
          >
            <div className="form-header">
              <MessageSquare className="form-icon" />
              <h2>Send us a Message</h2>
            </div>
            
            <form onSubmit={submitContact}>
  <div className="input-group">
    <input 
      type="text" 
      name="name"              // Added name attribute
      placeholder="Your Name" 
      value={contactData.name} 
      onChange={handleChange} 
      required 
    />
    <input 
      type="email" 
      name="email"             // Added name attribute
      placeholder="Your Email" 
      value={contactData.email} // Fixed value binding
      onChange={handleChange} 
      required
    />
  </div>
  
  <input 
    type="text" 
    name="subject"            // Added name attribute
    placeholder="Subject" 
    className="full-width" 
    value={contactData.subject} // Fixed value binding
    onChange={handleChange} 
    required
  />
  
  <textarea 
    name="message"            // Added name attribute
    placeholder="How can we help you?" 
    rows="5" 
    className="full-width" 
    value={contactData.message} // Fixed value binding
    onChange={handleChange} 
    required
  ></textarea>

  <motion.button 
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    type="submit" 
    className="submit-btn"
  >
    Send Message <Send size={18} />
  </motion.button> 
</form>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="map-container"

          >
            <iframe 
              title="Arah Infotech Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.9537353153166!3d-37.81732767975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1625645233121!5m2!1sen!2sau" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '20px' }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
 
export default Contact;




// import React, { useState } from 'react'
// import "./Contact.css"
// import axios from "axios"
// import { FaCheckCircle } from "react-icons/fa";

// const Contact = () => {

//   const [contactData, setContactData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     nda: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setContactData({
//       ...contactData,
//       [name]: type === "checkbox" ? checked : value
//     });
//   };

//   const submitContact = (e) => {
//     e.preventDefault();

//     axios.post("http://localhost:8080/contact", contactData)
//       .then(res => {
//         if (res.data.status) {
//           alert("Request sent successfully");
//           setContactData({
//             name: "",
//             email: "",
//             phone: "",
//             message: "",
//             nda: false
//           });
//         } else {
//           alert(res.data.msg);
//         }
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <section className="contact-section">
//       <div className="contact-container">

//         {/* LEFT */}
//         <div className="contact-left">
//           <h1>Contact us</h1>

//           <h3>What happens next?</h3>

//           <div className="steps">
//             <div className="step">
//               <span className="step-number">1</span>
//               <p>An expert contacts you after analyzing your requirements;</p>
//             </div>
//             <div className="step">
//               <span className="step-number">2</span>
//               <p>If needed, we sign an NDA;</p>
//             </div>
//             <div className="step">
//               <span className="step-number">3</span>
//               <p>We submit a project proposal.</p>
//             </div>
//           </div>

//           <div className="ratings">
//             <div>
//               Email:<br />
//               <span>ops@arahinfotech.net</span>
//             </div>
//             <div>
//               Call:<br />
//               <span>+91 89198 01095</span><br />
//               <span>+91 63042 44117</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="contact-right">
//           <p className="mandatory">* mandatory fields</p>

//           <form onSubmit={submitContact}>
//             <input
//               type="text"
//               placeholder="Name"
//               name="name"
//               value={contactData.name}
//               onChange={handleChange}
//             />

//             <input
//               type="email"
//               placeholder="* Corporate E-mail"
//               name="email"
//               value={contactData.email}
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="tel"
//               placeholder="* Phone number"
//               name="phone"
//               value={contactData.phone}
//               onChange={handleChange}
//               required
//             />

//             <textarea
//               placeholder="* Describe your project requirements"
//               name="message"
//               value={contactData.message}
//               onChange={handleChange}
//               required
//             />

            

//             <label className="checkbox">
//               <input
//                 type="checkbox"
//                 name="nda"
//                 checked={contactData.nda}
//                 onChange={handleChange}
//               />
//               I want to protect my data by signing an NDA.
//             </label>

//             <div className="submit-row">
//               <button className="submit-btn" type="submit">
//                 Send request
//               </button>
//               <span className="privacy">
//                 <FaCheckCircle /> Your privacy is protected
//               </span>
//             </div>
//           </form>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Contact;

