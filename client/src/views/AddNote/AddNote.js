import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddNote.css';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
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
    } else {
      console.error('User ID not found in session storage');
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
      setNote(''); // Clear the textarea after successful confirmation
    } catch (err) {
      console.error('Failed to create deal', err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div>
          <div className='deal-quotes'>This is the final step. Please confirm your deal!!</div>
        </div>
        <div>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add your note here..."
            rows={4}
            cols={50}
          />
        </div>
        <div>
          <button onClick={handleConfirm} className='confirm-button'>Confirm</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddNote;
