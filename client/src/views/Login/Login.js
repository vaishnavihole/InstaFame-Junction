import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css'; 
import Swal from 'sweetalert2'
import openEyeImage from './open-eye.jpeg';
import closedEyeImage from './close-eye.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import axios from 'axios'; 


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [role, setRole] = useState(''); 
  const [error, setError] = useState('');
  
  const handleLogin = async () => {

    try {
      const response = await axios.post('/api/v1/login', {
         email: email,
        password: password
       });
      console.log("reached here");
      console.log(response);

      if (response.data.user.role === 'user') {
        window.location.href = 'influncerCards';
      } else if (response.data.user.role === 'influencer') {
        window.location.href = '/dashboard';
      }
      
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'You have successfully logged in.',
      });

    } catch (error) {
      console.error('Error:', error.response);
      setError(error.response.data.message || 'Internal server error');
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/v1/signup', {
        name,
        email,
        mobile,
        city,
        password: signupPassword,
        role,
      });
      if (response.status === 201) {
        sessionStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Show success alert using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Signup Successful!',
          text: 'You have successfully signed up.',
        });
      }
    } catch (error) {
      console.error('Error:', error.response);
      setError(error.response.data.message || 'Internal server error');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (isLogin) {
      await handleLogin();
    } else {
      await handleSignup();
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setName('');
    setEmail('');
    setMobile('');
    setCity('');
    setPassword('');
    setSignupPassword('');
    setRole('user'); 
    setError('');
  };

  return (
    <div>
      <Navbar />
      <div className="login-signup-container">
        <div className="eye-container">
          <img src={isLogin ? openEyeImage : closedEyeImage} alt={isLogin ? 'Open eye' : 'Closed eye'} className="eye-image" />
        </div>
        <h2 className="signup-login-heading">{isLogin ? 'Login' : 'Sign Up'}</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group-signup">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          {!isLogin && (
            <div className="form-group-signup">
              <input
                type="tel"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
           
           />
            </div>
          )}
          {!isLogin && (
            <div className="form-group-signup">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group-signup">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={!isLogin}
            />
          </div>
          <div className="form-group-signup">
            {isLogin ? (
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            ) : (
              <input
                type="password"
                placeholder="Signup Password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            )}
          </div>
          {!isLogin && (
            <div className="form-group">
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="influencer">Influencer</option>
              </select>
            </div>
          )}
          <button className="login-signup-btn" type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <div className="toggle-mode">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <span onClick={toggleMode}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span onClick={toggleMode}>Login</span>
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
