//src/Components/Register.js

import React, { useEffect, useState } from 'react';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (error || successMessage) {
      const timer = setTimeout(() => {
        setError('');
        setSuccessMessage('');
      }, 3000); // Hide message after 5 seconds
  
      return () => clearTimeout(timer); // Clear timeout if component unmounts or messages change
    }
  },[error, successMessage]);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Password should be at least 6 characters long
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      // Send registration data to backend API
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, role, phoneNumber })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Registration successful! Please log in.');
        setError('');
        setName('');
        setEmail('');
        setPassword('');
        setRole('ngo');
        setPhoneNumber('');
      } else {
        console.log(data.message || data.error);
        setError(data.message || 'Failed to register. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again later.');
    }
    finally {
      setIsLoading(false);
    }
  };

 
  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
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
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
          required
        >
          <option value="ngo">NGO</option>
          <option value="restaurant">Restaurant</option>
        </select>
        <input
          type="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={styles.input}
          required
        />
        {error && <p style={styles.error}>{error}</p>}
        {successMessage && <p style={styles.success}>{successMessage}</p>}
        <button type="submit" disabled={isLoading} style={styles.button}>Register</button>
      </form>
      
      <p style={styles.registerText}>
        Already have an account? <a href="/login" style={styles.link}>Login here</a>
      </p>
    </div>
  );
};

// Updated styles to include success message
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
    backgroundColor: '#76B041',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
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

export default Register;