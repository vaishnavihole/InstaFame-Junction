
import React, { useState } from 'react';
import axios from 'axios';
import './AddPackageForm.css';
import Swal from 'sweetalert2';

const AddPackageForm = () => {
  const [formData, setFormData] = useState({
    packageName: '',
    features: [''],
    price: '',
  });

 
  const getUserId = () => {
    return JSON.parse(sessionStorage.getItem('user'))._id;
  };


  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'features') {
      const updatedFeatures = [...formData.features];
      updatedFeatures[index] = value;
      setFormData({ ...formData, features: updatedFeatures });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddFeature = () => {
    setFormData({ ...formData, features: [...formData.features, ''] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = getUserId(); // Get the user ID
    try {
      const response = await axios.post('/api/v1/addPackage', {
        userId: userId, // Pass user ID in the payload
        packageName: formData.packageName,
        Feature: formData.features,
        price: formData.price,
      });
      Swal.fire({
        icon: 'success',
        title: 'Package Added!',
        text: 'Your package has been added successfully.',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error creating package',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="packageName">Package Name:</label>
        <input
          type="text"
          id="packageName"
          name="packageName"
          value={formData.packageName}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      {formData.features.map((feature, index) => (
        <div key={index}>
          <label htmlFor={`feature${index}`}>Package Feature {index + 1}:</label>
          <input
            type="text"
            id={`feature${index}`}
            name="features"
            value={feature}
            onChange={(e) => handleChange(e, index)}
            required
          />
        </div>
      ))}
      <button type="button" className="add-feature-btn" onClick={handleAddFeature}>Add Another Feature</button>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <button type="submit" className='add-package-button'>Add Package</button>
    </form>
  );
};

export default AddPackageForm;
