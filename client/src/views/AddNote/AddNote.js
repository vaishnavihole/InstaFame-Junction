import React, { useState } from 'react';
import './AddNote.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const AddNote = () => {
  const [note, setNote] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
    // You can perform any action here when the confirm button is clicked
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
      {confirmed && <p className='confirmation-message'>Your Deal has been confirmed!</p>}
    </div>
    <Footer />
    
    </div>
  );
};

export default AddNote;
