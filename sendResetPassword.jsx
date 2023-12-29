import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SendResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRequestReset = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://apilovemaster.com/api/request-reset', { email });
      setMessage('Password reset request sent successfully. Please check your email.');

      setTimeout(() => {
        setMessage('');
      }, 6000);
    } catch (error) {
      setMessage('There was a problem submitting the password reset request.');

      setTimeout(() => {
        setMessage('');
      }, 6000);
    }
  };

  return (
    <div>
      <div className="containe">
        <div className="box1">  
          <section className="section">
            <h3 className='ml-1'>
              Welcome back to{" "}
              <Link className="orgafarm" to="/login">
                Login
              </Link>
            </h3>
            <div className="login">
              <h2 className=''>Restore password</h2>
              <form onSubmit={handleRequestReset}>
                <label htmlFor="email">Email:</label>
                <div>
                  <input type="email" id="email" className='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="login-btn">
                  Request Reset
                </button>
                {<p className='text-light'>{message}</p>}
              </form>
            </div>
          </section>

          <footer className="foote">
            <p className="copyright">
              Copyright &copy; 2023 <Link to="/">Lovemaster</Link> All rights reserved
            </p>
          </footer>
        </div>

        <div className="box2">
          <div className="sentence">
            <h4 className="">become a love master</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendResetPasswordPage;
