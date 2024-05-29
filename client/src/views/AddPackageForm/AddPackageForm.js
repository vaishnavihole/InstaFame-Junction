
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './AddPackageForm.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const AddPackageForm = () => {
  const [formData, setFormData] = useState({
    packageName: '',
    features: [''],
    price: '',
  });

  const getUserId = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user ? user._id : null;
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
    const userId = getUserId();
    if (!userId) {
      Swal.fire({
        icon: 'error',
        title: 'User not found',
        text: 'Please log in to add a package.',
      });
      window.location.href = '/login';
      return;
    }

    try {
      await axios.post('/api/v1/addPackage', {
        userId,
        packageName: formData.packageName,
        features: formData.features,
        price: formData.price,
      });
      Swal.fire({
        icon: 'success',
        title: 'Package Added!',
        text: 'Your package has been added successfully.',
      });

      window.location.href = '/myPackages';

      setFormData({
        packageName: '',
        features: [''],
        price: '',
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="form-title text-center text-4xl font-bold mt-12">Add Package Form</div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 border border-gray-300 rounded-lg bg-white shadow-md">
          <div className="mb-4">
            <label htmlFor="packageName" className="block text-gray-700 font-bold mb-2">Package Name:</label>
            <input
              type="text"
              id="packageName"
              name="packageName"
              value={formData.packageName}
              onChange={(e) => handleChange(e)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          {formData.features.map((feature, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={`feature${index}`} className="block text-gray-700 font-bold mb-2">Package Feature {index + 1}:</label>
              <input
                type="text"
                id={`feature${index}`}
                name="features"
                value={feature}
                onChange={(e) => handleChange(e, index)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddFeature} className="add-feature-btn">Add Another Feature</button>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={(e) => handleChange(e)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button type="submit" className="add-package-button">Add Package</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddPackageForm;
