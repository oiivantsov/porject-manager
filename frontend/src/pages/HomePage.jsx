import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-page-header">
        <h1>Simple Project Manager</h1>
        <p>Collaborate and manage your tasks efficiently</p>
      </header>
      <div className="home-page-buttons">
        <a class="register-button" href="/register" role="button">Register</a>
        <a class="login-button" href="/login" role="button">Login</a>
      </div>
      <footer className="home-page-footer">
        <p>Created by Oleg</p>
      </footer>


    </div>
  );
}

export default HomePage;
