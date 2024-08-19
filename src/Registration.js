import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = ({ data, onSubmit }) => {
  const [formData, setFormData] = useState(data || {});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    navigate('/about'); // Navigate to about page
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

export default Registration;
