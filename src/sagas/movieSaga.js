import { call, put, takeLatest } from "redux-saga/effects";
import { setMovies } from "../slice/movieSlice";

function fetchMovieApi(){
    const url = "https://hp-api.onrender.com/api/characters"
    const options = {
      method: "GET",
    };
    return fetch(url, options).then((res)=>res.json());
};
function* fetchMovieWorker(){
    try{
    const result = yield call(fetchMovieApi);
    const characterArray = [];
    for(let i=0;i<100; i++){
      characterArray.push(result[i]);
    }
    console.log("result",characterArray);
    yield put(setMovies(characterArray));
    } catch(error){
        console.log(error);
    }
}
export default function* movieSaga(){
    yield takeLatest("movies/fetchMovies", fetchMovieWorker);
}