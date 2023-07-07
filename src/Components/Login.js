import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (response.ok) {
        navigate('/LiquorList');
      } else {
        console.error('User registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='login-form'>
      <h2>BookApp</h2>
      <h2>Please login to see our products:</h2><br></br>
      <fieldset className='loginjs'>
        <form onSubmit={handleRegistration}>
          <div>
            <label htmlFor="username">Username</label><br></br>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div><br></br>
          <div>
            <label htmlFor="password">Password</label><br></br>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div><br></br>
          <div>
            <label htmlFor="email">Email</label><br></br>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div><br></br>
          <button type="submit">Create Account</button>
        </form>
      </fieldset>
    </div>
  );
}

export default Login;
