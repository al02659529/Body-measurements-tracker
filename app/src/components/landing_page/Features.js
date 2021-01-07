import React from 'react';
import "./Features.css"
import {ChartLineUp, CloudCheck, PaperPlaneTilt, ShieldCheck, DeviceMobile, UserGear} from "phosphor-react";

const Features = () => {
    const iconSize = 65
    return (
        <div className="lp-features" id="lp-features">
                <div className="lp-features-content">
                    <div className="lp-features-content-text">
                        <h2 className="header-1">An intuitive body changes tracker solution</h2>
                        <p className="p-text">Forget about your old and inefficient spreadsheets, trackr is the all in one solution for tracking your fitness goals.</p>
                    </div>

                    <div className="lp-features-content-icons">
                        <div className="lp-features-content-icons-container">
                            <div className="lp-features-content-icons-container-icon"><ShieldCheck size={iconSize} /></div>
                            <div className="lp-features-content-icons-container-title">Reliable & secure</div>
                            <div className="lp-features-content-icons-container-description p-text">Encryption of data, secure software.</div>
                        </div>
                        <div className="lp-features-content-icons-container">
                            <div className="lp-features-content-icons-container-icon"><CloudCheck size={iconSize} /></div>
                            <div className="lp-features-content-icons-container-title">Cloud based</div>
                            <div className="lp-features-content-icons-container-description p-text">Access your application anywhere you want.</div>
                        </div>
                        <div className="lp-features-content-icons-container">
                            <div className="lp-features-content-icons-container-icon"><ChartLineUp size={iconSize} /> </div>
                            <div className="lp-features-content-icons-container-title">Reporting & analytics</div>
                            <div className="lp-features-content-icons-container-description p-text">Analyze your progress.</div>
                        </div>
                        <div className="lp-features-content-icons-container">
                            <div className="lp-features-content-icons-container-icon"><UserGear size={iconSize} /></div>
                            <div className="lp-features-content-icons-container-title">Tailored to your needs</div>
                            <div className="lp-features-content-icons-container-description p-text">You choose what to track.</div>
                        </div>
                        <div className="lp-features-content-icons-container">
                            <div className="lp-features-content-icons-container-icon"><PaperPlaneTilt size={iconSize} /> </div>
                            <div className="lp-features-content-icons-container-title">Easy accountability</div>
                            <div className="lp-features-content-icons-container-description p-text">Get email remainders of your progress.</div>
                        </div>
                        <div className="lp-features-content-icons-container">
                            <div className="lp-features-content-icons-container-icon"><DeviceMobile size={iconSize} /></div>
                            <div className="lp-features-content-icons-container-title">Responsive</div>
                            <div className="lp-features-content-icons-container-description p-text">Mobile and desktop accessible.</div>
                        </div>
                    </div>
                    <button className="btn btn--red rm-a-default-styles"><a href="#lp-features">Start using the app</a></button>
                </div>
        </div>
    );
};

export default Features;
