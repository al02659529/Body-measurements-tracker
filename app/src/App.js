import './App.css'
import AddEntry from "./components/AddEntry";
import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import SideBar from "./components/SideBar";
import Application from "./components/Application";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {setUser} from "./reducers/user/userReducer";
import LandingPage from "./components/landing_page";

function App() {
    const dispatch = useDispatch()
    let isUserLogged = useSelector(store => store.user)

    useEffect(() => {
        dispatch(setUser({firstName: "Daniel"}))
        // dispatch(setUser(null))
    }, [])
  return (
      <Router>
          {/*TODO: Make components sideBar and TopBar available for all components and just change inner component depending on URL*/}
          <Switch>
              <Route path="/logging">
                  {isUserLogged ? <Redirect to="/"/> : <h1>Logging</h1>}
              </Route>
              <Route path="/register">
                  {isUserLogged ? <Redirect to="/"/> : <h1>Register page</h1>}
              </Route>
              <Route path="/">
                  {isUserLogged ? <Application /> : <LandingPage />}
              </Route>
         </Switch>

      </Router>
  );
}

export default App;