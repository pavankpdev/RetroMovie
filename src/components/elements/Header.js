import React from "react";
import RMDBlogo from "../images/reactMovie_logo.png";
import TMDBlogo from "../images/tmdb_logo.svg";
import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo
} from "../styles/StyledHeader";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <StyledRMDBLogo src={RMDBlogo} alt="RMDBlogo" />
      <StyledTMDBLogo src={TMDBlogo} alt="TMDBlogo" />
    </div>
  </StyledHeader>
);
export default Header;
