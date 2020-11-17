import React from "react";
import './SideBar.css';
import { PlusCircle, ClipboardText, Image, ChartLineUp, Gear, PhosphorLogo} from "phosphor-react";
import MediaQuery from "react-responsive/src/Component";

const SideBar = (props) => {
    const { page } = props;
    const onHover = e => {
        const classes = [...e.target.classList]
        console.log(classes)
    }
    return (
        <nav className="nav" onMouseOver={onHover}>
            <div className="nav_block nav_filler">
                <PhosphorLogo size={40} color="red" />
            </div>
            <div className="nav_block nav_page selected">

                <MediaQuery minWidth={768}>
                    <div className="nav_page-icon"><PlusCircle size={21} /></div>
                    <div className="nav_page-text">Add entry</div>
                </MediaQuery>
                <MediaQuery maxWidth={767}>
                    <div className="nav_page-icon"><PlusCircle size={25} /></div>
                    <div className="nav_page-text">Add</div>
                </MediaQuery>
            </div>
            <div className="nav_block nav_page">
                <div className="nav_page-icon"><ClipboardText size={21} /></div>
                <div className="nav_page-text">All entries</div>
            </div>
            <div className="nav_block nav_page">
                <div className="nav_page-icon"><Image size={21} /></div>
                <div className="nav_page-text">Pictures</div>
            </div>
            <div className="nav_block nav_page">
                <div className="nav_page-icon"><ChartLineUp size={21} /></div>
                <div className="nav_page-text">My progress</div>
            </div>
            <div className="nav_block nav_page">
                <div className="nav_page-icon"><Gear size={21} /></div>
                <div className="nav_page-text">Settings</div>
            </div>
            <div className="nav_block nav_filler">

            </div>

        </nav>
    )
}

export default SideBar;