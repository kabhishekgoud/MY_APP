import React from "react";
import "./Footer.css";
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" >

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-col">
          <h2 className="logo">
            <span>AI</span> Arah Infotech
          </h2>

          <p>
            Arah Infotech Pvt Ltd <br />
            2nd Floor, Spline Arcade, <br />
            Ayyappa Society Main Rd Sri Sai Nagar, Madhapur, <br />
            Hyderabad, Telangana-500081
          </p>

          <p><strong>Phone:</strong> +91 8919801095 / +91 6304244117</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:ops@arahinfotech.net">ops@arahinfotech.net</a>
          </p>

          {/* Social Icons */}
         <div className="social-icons">
  <a href="https://www.youtube.com/@arahinfotech-g5f" aria-label="YouTube">
    <FaYoutube />
  </a>
  <a href="https://www.facebook.com/people/Arah-Infotech-Pvt-Ltd/61577138489848/?rdid=DahZdiU1tQpIyHSi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16cg2pZ2vQ%2F" aria-label="Facebook">
    <FaFacebookF />
  </a>
  <a href="#" aria-label="Instagram">
    <FaInstagram />
  </a>
  <a href="https://www.linkedin.com/company/arah-infotech-pvt-ltd/" aria-label="LinkedIn">
    <FaLinkedinIn />
  </a>
</div>
        </div>

        {/* Useful Links */}
        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul className="txt_color">
            <li><a href='./'>HOME</a></li>
            <li><a  href='./about'>ABOUT</a></li>
            <li><a  href='/services'>SERVICES</a></li>
             <li><a  href='/contact'>CONTACT</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Our Services</h3>
          {/* <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Digital Marketing</li>
            <li>Cloud
             Security</li>
          </ul> */}
          <ul className="txt_color" >
            <li><a href='/services'>Web Development</a></li>
            <li><a  href='/services'>App Development</a></li>
            <li><a  href='/services'>Artificial Intelligence</a></li>
             <li><a  href='/services'>Digital Marketing</a></li>
             <li><a  href='/services'>Cloud
             Security</a></li>

          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h3>Our Newsletter</h3>
          <p>
            Subscribe to our newsletter and receive the latest news about our
            products and services!
          </p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© Copyright 2025 Arah Infotech All Rights Reserved</p>
        <p>
          Designed by <span>Arah Infotech</span>
        </p>
      </div>

      {/* Scroll to Top */}
      <a href="#top" className="scroll-top">↑</a>

    </footer>
  );
};

export default Footer;
