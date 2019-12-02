import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";
const MovieThumb = ({ image, movieId, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <img className="clickable" src={image} alt="MovieThumb" />
    ) : (
      <img  src={image} alt="MovieThumb" />
    )}
  </StyledMovieThumb>
);

export default MovieThumb;
