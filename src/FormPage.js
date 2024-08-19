import React, { useState } from 'react';
import './FormPage.css'
const FormValidation = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validatePhone = () => {
    const phonePattern = /^\d{10}$/; // Adjust the regex pattern based on your requirements
    if (!phonePattern.test(phone)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
    } else {
      setPhoneError('');
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Adjust the regex pattern based on your requirements
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={validatePhone}
        />
        {phoneError && <div className="error-message">{phoneError}</div>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail}
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
