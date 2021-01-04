import React, {useEffect, forwardRef} from "react";
import './SideBar.css';
import { PlusCircle, ClipboardText, Image, ChartLineUp, Gear, PhosphorLogo} from "phosphor-react";
import MediaQuery from "react-responsive/src/Component";
import {
    Link, useLocation
} from "react-router-dom";

// Styling for react router link
const CustomLink = React.forwardRef((props, ref) => (
    <a ref={ref} {...props} style={{width: "100%", height: "100%"}}>{props.children}</a>
))

const SideBar = () => {
    let location = useLocation();

    useEffect(() => {
        switch (location.pathname){
            case '/settings': {
                let selected = document.querySelector('.settings')
                selected.classList.toggle('selected')
                break
            }
            case '/entries': {
                let selected = document.querySelector('.allEntries')
                selected.classList.toggle('selected')
                break
            }
            case '/pictures': {
                let selected = document.querySelector('.pictures')
                selected.classList.toggle('selected')
                break
            }
            case '/progress': {
                let selected = document.querySelector('.myProgress')
                selected.classList.toggle('selected')
                break
            }
            case '/': {
                let selected = document.querySelector('.addEntry')
                selected.classList.toggle('selected')
                console.log("matched add entry")
                break
            }
            default:
                console.log("no match for location")
                break
        }
    }, [location])

    // TODO: Define if onClick attribute should be left or deleted
    const onClick = e => {
        let selected = e.target
        let classes = [...selected.classList]
        while (!classes.includes("nav_block")){
            selected = selected.parentElement
            classes = [...selected.classList]
        }
        console.log(selected, classes)
    }
    return (
        // TODO: Make this responsive
        <nav className="nav" onClick={onClick}>
            <div className="nav_block nav_filler">
                <PhosphorLogo size={40} color="red" />
            </div>
            <div className="nav_block nav_page addEntry">
                <Link to="/" component={CustomLink}>
                        <MediaQuery minWidth={768}>
                            <div className="nav_page-icon"><PlusCircle size={21} /></div>
                            <div className="nav_page-text">Add entry</div>
                        </MediaQuery>
                        <MediaQuery maxWidth={767}>
                            <div className="nav_page-icon"><PlusCircle size={25} /></div>
                            <div className="nav_page-text">Add</div>
                        </MediaQuery>
                </Link>
            </div>
            <div className="nav_block nav_page allEntries">
                <Link to="/entries" component={CustomLink}>
                    <div className="nav_page-icon"><ClipboardText size={21} /></div>
                    <div className="nav_page-text">All entries</div>
                </Link>
            </div>
            <div className="nav_block nav_page pictures">
                <Link to="/pictures" component={CustomLink}>
                    <div className="nav_page-icon"><Image size={21} /></div>
                    <div className="nav_page-text">Pictures</div>
                </Link>
            </div>
            <div className="nav_block nav_page myProgress">
                <Link to="/progress" component={CustomLink}>
                    <div className="nav_page-icon"><ChartLineUp size={21} /></div>
                    <div className="nav_page-text">My progress</div>
                </Link>
            </div>
            <div className="nav_block nav_page settings">
                <Link to="/settings" component={CustomLink}>
                    <div className="nav_page-icon"><Gear size={21} /></div>
                    <div className="nav_page-text">Settings</div>
                </Link>
            </div>
            <div className="nav_block nav_filler">
            </div>
        </nav>
    )
}

export default SideBar;