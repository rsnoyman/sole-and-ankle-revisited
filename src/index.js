import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import GlobalStyles from "./components/GlobalStyles";

import { ThemeProvider } from "styled-components";
import { QUERIES } from "./constants";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={QUERIES}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
