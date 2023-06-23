import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberError('Please enter a valid phone number.');
      return;
    }

    if (!validateEmail()) {
      return;
    }

    
    send();
  };

  const validatePhoneNumber = (phoneNumber) => {
    const digitsOnly = phoneNumber.replace(/\D/g, '');

    if (digitsOnly.length !== 10) {
      return false;
    }

    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberError('');
  };

  const send = () => {
    alert('Sent Successfully');
  };
  
  
  return (
    <section id="contact">
      <h2>CONTACT</h2>
      <div className="contact-content">
        <p>
          Feel free to reach out to me with any questions, inquiries, or collaboration opportunities. I'm always excited to connect with fellow developers, clients, and like-minded individuals.
        </p>
        <p>
          You can contact me using the following methods:
        </p>
        <ul>
          <li>Email: DSPortfolioWebsite@gmail.com</li>
          <li>Phone:<br/> +91-9876543218</li>
          <li>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/selva-lakshmi-d-638899243/">linkedin.com/in/selva-lakshmi-d-638899243/</a>
          </li>
          
       </ul>
        <div className="contact">
    
      <form onSubmit={handleSubmit}>
        <div className="form-name">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <br />
        <div className="mail">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            required
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <br />
        <div className="form-phno">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <br />
          <input
            type="text"
            maxLength="10"
            size="10"
            id="phoneNumber"
            name="phoneNumber"
            className={`form-control ${phoneNumberError && 'error'}`}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          {phoneNumberError && <div className="error-message">{phoneNumberError}</div>}
        </div>
        <br />
        <div className="msg">
          <label>Your Message:</label>
          <br />
          <input type="text" />
        </div>
        <br />

        <div className="btn">
          <button type="send">Send</button>
        </div>
      </form>
    </div>
    </div>
    </section>
 
  );
  }


export default Contact;

    
  


