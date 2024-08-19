import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = ({ data, onSubmit }) => {
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
    navigate('/contact'); // Navigate to contact page
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>About</h2>
      <label>
        Description:
        <input type="text" name="description" value={formData.description || ''} onChange={handleChange} />
      </label>
      <button type="submit">Next</button>
    </form>
  );
};

export default About;
