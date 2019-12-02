import React from "react";
import Header from "./elements/Header";
import Home from "./Home";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import { StyledSpinner } from "../components/styles/StyledSpinner";
const App = () => (
  <div>
    <Header />
    <Home />
    <GlobalStyle />
    <StyledSpinner />
  </div>
);

export default App;
