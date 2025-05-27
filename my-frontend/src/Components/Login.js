import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SiGoogle } from 'react-icons/si';
import './LoginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Login successful!');
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role);
        login(data.user.role);

        navigate(
          data.user.role === 'ngo'
            ? '/ngo-dashboard'
            : data.user.role === 'restaurant'
            ? '/restaurant-dashboard'
            : '/'
        );
      } else {
        setError(data.error || 'Failed to log in. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login to your account</h2>
        <p className="subtext">Welcome back! Please enter your credentials.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}
          {successMessage && <p className="success">{successMessage}</p>}

          <button type="submit" className="login-btn">Login</button>

          <button type="button" className="social-btn">
            <SiGoogle className="icon" /> Google
          </button>
        </form>

        <p className="register-text">
          Don’t have an account? <a href="/register">Register here</a>
        </p>
      </div>

      <div className="login-image" />
    </div>
  );
};

export default Login;
