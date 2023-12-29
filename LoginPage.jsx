import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";
import { Link } from 'react-router-dom';

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, isAuthenticated, errors: signinErrors } = useAuth();
  const [localSigninErrors, setLocalSigninErrors] = useState([]);
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await signin(data);
  });

  useEffect(() => {
    if (signinErrors && signinErrors.length > 0) {
      setLocalSigninErrors(signinErrors);
    }
  }, [signinErrors]);

  useEffect(() => {
    if (localSigninErrors.length > 0) {
      const timer = setTimeout(() => {
        setLocalSigninErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [localSigninErrors]);

  useEffect(() => {
    async function checkSubscription() {
      const token = Cookies.get('token');
      if (!token) {
        console.log("No hay token disponible.");
        return false;
      }

      const api = axios.create({
        baseURL: 'https://apilovemaster.com/api',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      try {
        const response = await api.get('/check-subscription');
        return response.data.hasSubscription;
      } catch (error) {
        console.error('Error checking subscription:', error);
        return false;
      }
    }

    async function checkLogin() {
      const hasSubscription = await checkSubscription();
      if (hasSubscription) {
        navigate('/members');
      } else {
        navigate('/');
      }
    }

    if (isAuthenticated) {
      checkLogin();
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return null;
  }

  return (
    <div>
        <div class="containe">
          <div class="box1">
            <section class="section">
              <h3>
                Welcome back to{" "}
                <Link className="orgafarm" to="/">
                  Lovemaster
                </Link>
              </h3>
              <div class="login">
                <h2>Login</h2>
                <form className="form" onSubmit={onSubmit}>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="email"
                    id="email"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-white"> Email is required </p>
                  )}
  
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    className="password"
                    id="password"
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-white"> Password is required </p>
                  )}
  
                  <button className="login-btn" type="submit">
                    Login
                  </button>
  
                  {localSigninErrors &&
                    localSigninErrors.map((error, index) => (
                      <p key={index} className="text-white">
                        {error.message || "Your email or password is incorrect."}
                      </p>
                  ))}
  
                  <p className="account">
                    <Link to="/send-reset-password">Did you forget your password?</Link>
                    <br />
                    Don't have an account? <Link to="/register">Sign up</Link>
                  </p>
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
  }
  
  export default LoginPage;