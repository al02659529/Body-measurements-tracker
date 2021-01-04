import React from 'react';
import './TopBar.css'
import { UserCircle, CaretDown } from "phosphor-react";
import Avatar from '@material-ui/core/Avatar';
import {useSelector} from "react-redux";
//TODO: Make all of this really usable
const TopBar = () => {
    const user = useSelector(state => state.user)
    const clicked = (e) => {
        console.log("you clicked me!", e)
    }
    return (
        <div className="topBar">
            <div className="TopBar_container" onClick={clicked}>
                <div className="TopBar_container-avatar">
                    <Avatar alt="Test"  />
                </div>
                <div className="TopBar_container-arrow">
                    <CaretDown size={22} />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
