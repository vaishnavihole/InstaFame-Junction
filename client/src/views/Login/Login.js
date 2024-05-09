import React, { useState } from 'react';
import './Login.css'; 
import openEyeImage from './open-eye.jpeg';
import closedEyeImage from './close-eye.jpeg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [role, setRole] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login
      console.log('Logging in with:', email, password);
    } else {
      // Handle signup
      console.log('Signing up with:', name, email, mobile, city, signupPassword, role);
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
  };

  return (
    
   <div>
    <Navbar />
     <div className="login-signup-container">
      <div className="eye-container">
        <img src={isLogin ? openEyeImage : closedEyeImage} alt={isLogin ? "Open eye" : "Closed eye"} className="eye-image" />
      </div>
      <h2 className='signup-login-heading'>{isLogin ? 'Login' : 'Sign Up'}</h2>
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
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="influencer">Influencer</option>
            </select>
          </div>
        )}
        <button className="login-signup-btn" type="btn">{isLogin ? 'Login' : 'Sign Up'}</button>
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
