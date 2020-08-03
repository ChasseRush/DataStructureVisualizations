import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContainer from "./Containers/AppContainer";
import LandingContainer from "./Containers/LandingContainer";

function App() {
  return (
    <BrowserRouter basename="/DataStructureVisualizations">
      <div className="content">
        <Switch>
          <Route path="/" exact component={LandingContainer} />
          <Route path="/:dataStructure" component={AppContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
