import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./slice/movieSlice";

const Imdb = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchMovies());
  },[dispatch]);
    return (
      <>
      <Header/>
      <MovieContainer/>
      </>
    )
};
export default Imdb;
