import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Login.css';
import openEyeImage from './open-eye.jpeg';
import closedEyeImage from './close-eye.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import toast from 'react-hot-toast';

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
    toast.loading('Logging in...');
    try {
      const response = await axios.post('/api/v1/login', {
        email: email,
        password: password
      });
      console.log("reached here");
      console.log(response);

      sessionStorage.setItem('user', JSON.stringify(response.data.user));

      toast.dismiss();

      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'You have successfully logged in.',
      });

      if (response.data.user.role === 'user') {
        window.location.href = '/userDashboard';
      } else if (response.data.user.role === 'influencer') {
        window.location.href = '/influncerDasboard';
      }

    

    } catch (error) {
      toast.dismiss();
      toast.error(error.response.data.message || 'Internal server error');
      console.error('Error:', error.response);
      setError(error.response.data.message || 'Internal server error');
    }
  };

  const handleSignup = async () => {
    toast.loading('Signing up...');
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
        toast.dismiss();
        setIsLogin(true);

        Swal.fire({
          icon: 'success',
          title: 'Signup Successful!',
          text: 'You have successfully signed up.',
        });
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error.response.data.message || 'Internal server error');
      console.error('Error:', error.response);
      setError(error.response.data.message || 'Internal server error');
    }
  };



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
      <div className="max-w-md mx-auto mt-24 p-5 text-center">
        <div className="eye-image flex justify-center mb-5">
          <img src={isLogin ? openEyeImage : closedEyeImage} alt={isLogin ? 'Open eye' : 'Closed eye'} className="w-24 h-auto rounded-full animate-shake" />
        </div>
        <h2 className="text-4xl font-bold mb-5 text-center text-blue-500 font-pacifico animate-bounce">{isLogin ? 'Login' : 'Sign Up'}</h2>
        {error && <p className="text-red-500 mb-5">{error}</p>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <input className="w-full p-3 text-lg border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input className="w-full p-3 text-lg border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:border-blue-500"
                  type="tel"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input className="w-full p-3 text-lg border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <input className="w-full p-3 text-lg border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:border-blue-500"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={!isLogin}
            />
          </div>
          <div className="mb-4">
            <input className="w-full p-3 text-lg border border-gray-300 rounded-lg transition duration-300 focus:outline-none focus:border-blue-500"
              type="password"
              placeholder={isLogin ? "Password" : "Signup Password"}
              value={isLogin ? password : signupPassword}
              onChange={(e) => isLogin ? setPassword(e.target.value) : setSignupPassword(e.target.value)}
              required
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 text-lg border border-gray-300 rounded-lg bg-white transition duration-300 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="influencer">Influencer</option>
              </select>
            </div>
          )}
        </form>
        <div className="mt-5">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <span onClick={toggleMode} className="text-blue-500 font-bold cursor-pointer hover:underline">Sign Up</span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span onClick={toggleMode} className="text-blue-500 font-bold cursor-pointer hover:underline">Login</span>
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
