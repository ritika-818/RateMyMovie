import { useEffect, useState, createContext } from "react";
import Header from "./components/Header";
import MovieContainer from "./components/MovieContainer";
import { useDispatch } from "react-redux";
import { setMovies } from "./slice/movieSlice";

const Imdb = () => {
  const dispatch = useDispatch();
  async function fetchMovies(){
    const url =
      "https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=20&page=1&quality=all&genre=all&minimum_rating=0&query_term=0&sort_by=date_added&order_by=desc&with_rt_ratings=false";
    const options = {
      method: "GET",
      headers: {
        'x-rapidapi-key': 'e0e12970ffmshd7d37df82b0ac75p18053ajsn450fee9f2143',
        'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com'
      },
    };
    try{
      const response = await fetch(url, options);
      const result = await response.json();
      dispatch (setMovies(result.data.movies));
    } catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchMovies();
  },[dispatch]);
    return (
      <>
      <Header/>
      <MovieContainer/>
      </>
    )
};
export default Imdb;
