import './App.css';
import "antd/dist/antd.css";
import AddEntry from "./components/AddEntry";
import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SideBar from "./components/SideBar";

function App() {
  return (
      <Router>
          {/*TODO: Make components sideBar and TopBar available for all components and just change inner component depending on URL*/}
          <Switch>
             <Route path="/all">
                 <div>hello</div>
             </Route>
             <Route path="/">
                 <AddEntry />
             </Route>
         </Switch>

      </Router>
  );
}

export default App;