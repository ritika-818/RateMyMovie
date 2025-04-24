import { useEffect, useState, createContext } from "react";
// import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./slice/movieSlice";
import PopularCelebs from "./components/PopularCelebs";

const Imdb = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchMovies());
  },[dispatch]);
    return (
      <>
      <MovieContainer/>
      <PopularCelebs/>
      </>
    )
};
export default Imdb;
