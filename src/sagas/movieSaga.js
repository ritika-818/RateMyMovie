import { call, put, takeLatest } from "redux-saga/effects";
import { setMovies } from "../slice/movieSlice";

function fetchMovieApi(){
    const url =
      "https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=20&page=1&quality=all&genre=all&minimum_rating=0&query_term=0&sort_by=date_added&order_by=desc&with_rt_ratings=false";
    const options = {
      method: "GET",
      headers: {
        'x-rapidapi-key': 'e0e12970ffmshd7d37df82b0ac75p18053ajsn450fee9f2143',
        'x-rapidapi-host': 'movie-database-api1.p.rapidapi.com'
      },
    };
    return fetch(url, options).then((res)=>res.json());
};
function* fetchMovieWorker(){
    try{
    const result = yield call(fetchMovieApi);
    yield put(setMovies(result.data.movies));
    } catch(error){
        console.log(error);
    }
}
export default function* movieSaga(){
    yield takeLatest("movies/fetchMovies", fetchMovieWorker);
}