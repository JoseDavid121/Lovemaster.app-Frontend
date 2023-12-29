import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const [message, setMessage] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const tokenFromURL = urlSearchParams.get('token');
    setResetToken(tokenFromURL || '');
  }, []);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      setMessage('The password must be at least 6 characters');

      setTimeout(() => {
        setMessage('');
      }, 6000);

      return;
    }

    if (newPassword !== confirmationPassword) {
      setMessage('Passwords do not match');;
      setTimeout(() => {
        setMessage('');
    }, 6000);
      return;
    }

    try {
      const token = localStorage.getItem('token');

      const api = axios.create({
        url: '/',
        baseURL: 'https://apilovemaster.com/api',
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const response = await api.post('/reset-password', {
        resetToken,
        newPassword,
      });
      if (response.data.message === 'Password reset successfully') {
        setRedirectToLogin(true);
      }
    } catch (error) {
      setMessage('Password reset error');

      setTimeout(() => {
        setMessage('');
        }, 6000);
    }

  };

  if (redirectToLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
        <div class="containe">
          <div class="box1">
            <section class="section">
              <h3 className='ml-1'>
                Welcome back to{" "}
                <Link className="orgafarm" to="/">
                  Lovemaster
                </Link>
              </h3>
              <div class="login">
                <h2 className=''>Restore password</h2>
                <form onSubmit={handleResetPassword}>
                    <label htmlFor="newPassword">New Password:</label>
                    <div>
                    
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="newPassword"
                        className="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    </div>
                    <label htmlFor="confirmationPassword">Confirm Password:</label>
                    <div>
                    
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="confirmationPassword"
                        className="password"
                        value={confirmationPassword}
                        onChange={(e) => setConfirmationPassword(e.target.value)}
                    />
                    </div>
                    <div className="show-password-container">
                        <label htmlFor="showPassword">Show password</label>
                        <input
                            type="checkbox"
                            id="showPassword"
                            className='ml-3'
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        /> 
                    </div>
                    <button type="submit" className="login-btn">
                    Restore password
                    </button>

                    {message && <p className='text-light'>{message}</p>}
                </form>
              </div>
            </section>
  
            <footer class="foote">
              <p class="copyright">
                Copyright &copy; 2023 <Link to="/">Lovemaster</Link> All rights
                reserved
              </p>
            </footer>
          </div>
  
          <div class="box2">
            <div class="sentence">
              <h4 className="">become a love master</h4>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ResetPasswordForm;
