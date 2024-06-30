import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    licenseNumber: '',
    resume: null,
    whyHire: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Application</h2>
      <div className="about-role">
        <h3>About the role:</h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
        </p>
      </div>
      <div className="role-details">
        <h3>What you will do:</h3>
        <ul>
          <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
          <li>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</li>
          <li>To know about the Doctor you can visit the Doctor’s profile:</li>
        </ul>
        <a href="#">Dr. Sachin Bansal</a>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name*</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>E-mail*</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile Number*</label>
          <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>License Number*</label>
          <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Your Resume*</label>
          <input type="file" name="resume" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Why should we hire you?</label>
          <textarea name="whyHire" value={formData.whyHire} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
