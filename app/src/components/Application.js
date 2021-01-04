import React from 'react';
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import {
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import {useSelector} from "react-redux";
import AddEntry from "./AddEntry";

const Application = () => {
    let isUserLogged = useSelector(state => state.user)

    return (
        <div className="container">
            <SideBar />
            <div className="content">
                <TopBar />
                <Switch>
                    <Route path="/settings">
                        {isUserLogged ? <h1>settings</h1> : <h1> hey there</h1>}
                    </Route>
                    <Route path="/progress">
                        {isUserLogged ? <h1>progress</h1> : <h1> hey there</h1>}
                    </Route>
                    <Route path="/pictures">
                        {isUserLogged ? <h1>pictures</h1> : <h1> hey there</h1>}
                    </Route>
                    <Route path="/entries">
                        {isUserLogged ? <h1>entries</h1> : <h1> hey there</h1>}
                    </Route>
                    <Route path="/register">
                        {isUserLogged ? <h1>register</h1>: <h1>hey there</h1>}
                    </Route>
                    <Route path="/">
                        {isUserLogged ? <AddEntry />: <h1>sup friend</h1>}
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Application;
