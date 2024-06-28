import React from 'react';
import LandingPageHeader from '../components/LandingPageHeader'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="landing-page">

      <LandingPageHeader />

      <div className="landing-page-buttons">
        <a className="btn btn-grey" href="/register" role="button">Register</a>
        <a className="btn btn-blue" href="/login" role="button">Login</a>
      </div>

      <Footer />

    </div>
  );
}

export default HomePage;
