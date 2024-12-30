//src/Components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const [isActive, setIsActive] = useState(false); // State for active effect
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      //console.log(data);
      if (response.ok) {
        setSuccessMessage('Login successful!');
        //alert(`Welcome, ${data.user.username}`);


        localStorage.setItem('token',data.token);
        localStorage.setItem('role', data.user.role);
        login(data.user.role);

        if (data.user.role === 'ngo') {
          navigate('/ngo-dashboard');
        } else if (data.user.role === 'restaurant') {
          navigate('/restaurant-dashboard');
        } else {
          navigate('/'); // Fallback redirect
        }
        //console.log(data.user.role);

      } else {
        setError(data.error || 'Failed to log in. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        {error && <p style={styles.error}>{error}</p>}
        {successMessage && <p style={styles.success}>{successMessage}</p>}
        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {}),
            ...(isActive ? styles.buttonActive : {}),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
        >
          Login
        </button>
      </form>
      
      <p style={styles.registerText}>
        Don't have an account? <a href="/register" style={styles.link}>Register here</a>
      </p>
    </div>
  );
};

// Simple styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  form: {
    margin: '10px auto',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.1s ease', 
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  buttonActive: {
    transform: 'scale(0.95)', 
  },
  error: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
  registerText: {
    textAlign: 'center',
    marginTop: '10px',
  },
  link: {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default LoginPage;
