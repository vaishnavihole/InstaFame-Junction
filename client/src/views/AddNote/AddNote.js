import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddNote.css';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import allowedRole from '../../utils/auth';
import Swal from 'sweetalert2';

const AddNote = () => {
  const [note, setNote] = useState('');
  const [userId, setUserId] = useState(null);

  const { packageId } = useParams();

  useEffect(() => {
    const temp = sessionStorage.getItem('user');
    const user = temp ? JSON.parse(temp) : null;
    const userId = user ? user._id : null;

    if (userId) {
      setUserId(userId);

      if (!allowedRole('user')) {
        Swal.fire({
          icon: 'error',
          title: 'Unauthorized',
          text: 'You do not have the necessary permissions to access this page.',
        }).then(() => {
          window.location.href = '/influencerDashboard';
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'User not found',
        text: 'Please log in to proceed.',
      }).then(() => {
        window.location.href = '/login';
      });
    }
  }, []);

  const handleConfirm = async () => {
    if (!userId) {
      console.error('User ID is not available');
      return;
    }

    try {
      await axios.post(`/api/v1/addDeal/${packageId}`, { note, userId });
      Swal.fire({
        icon: 'success',
        title: 'Deal created successfully',
      });
      setNote('');
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to create deal',
        text: 'An error occurred while creating the deal. Please try again later.',
      });
      console.error('Failed to create deal', err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="deal-quotes text-center text-lg font-bold mb-6 animate-fadeIn animate-bounce">
          This is the final step. Please confirm your deal!!
        </div>
        <div className="mb-4">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add your note here..."
            rows={4}
            className="w-80 h-36 p-2 border border-gray-300 rounded-md resize-none"
          />
        </div>
        <div>
          <button onClick={handleConfirm} className="confirm-button">
            Confirm
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddNote;
