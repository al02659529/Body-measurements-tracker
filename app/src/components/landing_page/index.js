import React from 'react';
import NavBar from "./NavBar";
import Description from "./Description";
import './index.css'

const LandingPage = () => {
    return (
        <div className="landing_page">
            <NavBar />
            <Description />
        </div>
    );
};

export default LandingPage;
