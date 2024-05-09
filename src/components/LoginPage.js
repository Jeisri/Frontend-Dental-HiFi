import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img className="dental-hifi-logo" src="Dental-Hifi.jpg" alt="Dental Hi-Fi" />
      </div>
      <div className="login-box">
        <h2>Log in</h2>
        <div className="social-login">
          <button className="google-btn">
            <img className="google-logo" src="google.png" alt="Google" />
            Log in with Google
          </button>
          <button className="apple-btn">
            <img className="apple-logo" src="apple.png" alt="Apple" />
            Log in with Apple
          </button>
        </div>
        <div className="or">or</div>
        <div className="input-container">
          <input type="text" placeholder="Email or Phone No." />
          <input type="password" placeholder="Password" />
        </div>
        <div className="remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <a href="" className="forgot-password">
          Forgot your password?
        </a>
        <button className="login-btn">Log in</button>
        <a href="" className="create-account">
          Create an account
        </a>
      </div>
    </div>
  );
};

export default LoginPage;