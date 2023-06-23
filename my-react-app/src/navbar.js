import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
function Navbar() {
  
return (
    <div className="hero">
     <nav className="nav1">
        <ul id="links12">
          <div className='heros'>
          <img src="DS (2).png" width="200" alt="Logo" />
</div>
          <li>
            <Link to="/Portfolio">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/About">ABOUT</Link>
          </li>
          <li>
            <Link to="/Contact">CONTACT</Link>
          </li>
          <li><Link to="/Skills">SKILLS</Link></li>
          <li>
          <Link to="/BlogPage">BLOG</Link></li>
          
          <li className="instalink">
            <a
               href="https://www.instagram.com/selva_lakshmi_1308/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li  className="linkdinlink">
            <a
             href="https://www.linkedin.com/in/selva-lakshmi-d-638899243/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;