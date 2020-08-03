import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AppContainer from "./Containers/AppContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Route path="/" exact component={<div>welcome</div>} />
        <Route path="/:dataStructure" component={AppContainer} />
      </div>
    </BrowserRouter>
  );
}

export default App;
