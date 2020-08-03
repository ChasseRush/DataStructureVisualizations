import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContainer from "./Containers/AppContainer";
import LandingContainer from "./Containers/LandingContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Switch>
          <Route
            path="/DataStructureVisualizations"
            exact
            component={LandingContainer}
          />
          <Route
            path="/DataStructureVisualizations/"
            exact
            component={LandingContainer}
          />
          <Route
            path="/DataStructureVisualizations/:dataStructure"
            component={AppContainer}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
