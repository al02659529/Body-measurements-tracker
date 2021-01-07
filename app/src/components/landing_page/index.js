import React from 'react';
import NavBar from "./NavBar";
import Description from "./Description";
import './index.css'
import Features from "./Features";
import Footer from "./Footer";

const LandingPage = () => {
    return (
        <div className="landing_page">
            <NavBar />
            <Description />
            <Features />
            <Footer />
        </div>
    );
};

export default LandingPage;
