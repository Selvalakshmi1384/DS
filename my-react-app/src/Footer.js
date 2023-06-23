import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>Contact</h3>
            <p>Email: dsportfoliowebsite@gmail.com</p>
            <p>Phone: +91-9876543218</p>
          </div><br/>
          <div className="footer__section">
            <h3>Navigation</h3>
            <ul>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/skills">Skills</a></li>
            </ul>
          </div><br/>
          <div className="footer__section">
            <h3>Social Media</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/selva-lakshmi-d-638899243">LinkedIn</a></li>
              <li><a href="https://instagram.com/selva_lakshmi_1308">Instagram</a></li>
                </ul>
          </div>
        </div>
        <br/>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} DSPortfolioWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;