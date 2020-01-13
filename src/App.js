import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Button from "@material-ui/core/Button";
import { css } from "@emotion/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          css={css`
            display: flex;
            width: 100%;
            justify-content: center;
            padding: 0 40px;
          `}
        >
          adsadad
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
