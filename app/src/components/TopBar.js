import React from 'react';
import './TopBar.css'
import { UserCircle, CaretDown } from "phosphor-react";
//TODO: Make all of this really usable
const TopBar = () => {
    return (
        <div className="topBar">
            <div className="TopBar_container">
                <div className="TopBar_container-avatar">
                    <UserCircle size={22} />
                </div>
                <div className="TopBar_container-name">
                    Juano Ruano
                </div>
                <div className="TopBar_container-arrow">
                    <CaretDown size={22} />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
