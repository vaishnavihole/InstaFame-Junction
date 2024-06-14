import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Picker from 'emoji-picker-react';
import profile from './profile.png';

function ChatPage() {
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [receiverId, setReceiverId] = useState(null);
  const [messages, setMessages] = useState([]); 

  const { id } = useParams();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    

    console.log("User:", storedUser);
  }, []);


  useEffect(() => {
    if (userId && receiverId) {
      loadChatHistory();
    }
  }, [userId, receiverId]);

  const onEmojiClick = (event, emojiObject) => {
    setInput(prevInput => prevInput + emojiObject.emoji);
  };

  const loadChatHistory = async () => {
    try {
      const response = await axios.post('/api/v1/userChat', {
        senderId: user._id,
        receiverId: id,
      });
      if (response.status === 200) {
        setMessages(response.data.messages);
      } else {
        console.error('Error fetching chat history:', response.data);
      }
    } catch (error) {
      console.error('Error fetching chat history:', error.message);
      if (error.response) {
        console.error('Error details:', error.response.data);
      }
    }
  };

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const message = {
      message: trimmedInput,
      senderId: user._id,
      receiverId: id,
    };

    console.log('Sending message:', message);

    try {
      const response = await axios.post('/api/v1/sendMessage', message);

      loadChatHistory();

      if (response.status !== 201) {
        console.error('Error sending message:', response.data);
      } else {
        console.log('Message sent successfully');
        setInput('');
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
      if (error.response) {
        console.error('Error details:', error.response.data);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-[calc(100vh-8rem)] max-w-lg mx-auto border border-gray-300 bg-white mt-4 mb-4">
        <div className="flex items-center p-4 bg-gray-100 border-b border-gray-300">
          <img src={profile} alt="Profile" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <h3 className="text-lg font-semibold">{user ? user.name : 'Chat Name'}</h3>
            <p className="text-sm text-gray-500">Active now</p>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start mb-4 ${msg.sender === userId ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg p-3 shadow-sm ${msg.sender === userId ? 'bg-blue-100 border border-blue-300' : 'bg-white border border-gray-300'}`}>
                <p>{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center p-4 bg-gray-100 border-t border-gray-300 relative">
          <input 
            type="text" 
            placeholder="Message..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="ml-3 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            😊
          </button>
          <button
            className="ml-3 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={sendMessage}
          >
            Send
          </button>
          {showEmojiPicker && (
            <div className="absolute bottom-14 right-0">
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ChatPage;
