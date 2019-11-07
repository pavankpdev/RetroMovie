import React from "react";

import HeroImage from "./elements/HeroImage";
import SearchImage from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import Spinner from "./elements/Spinner";
import LoadMoreBtn from "./elements/LoadMoreBtn";


const Home = ()=> (
    <>
        <HeroImage/>
        <SearchImage/>
        <Grid/>
        <MovieThumb/>
        <Spinner/>
        <LoadMoreBtn/>
    </>
);


export default Home;