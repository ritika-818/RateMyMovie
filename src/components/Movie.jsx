import { useLocation } from "react-router-dom";

const Movie = ()=>{
    const location = useLocation();
    const movieItem = location?.state;
    console.log("movieItem", movieItem);
    return(<div className="movie-item">
        <img src = {movieItem.image} className="movie-img"></img>
    </div>)
}
export default Movie;