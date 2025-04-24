import { useLocation } from "react-router-dom";

const Movie = ()=>{
    const location = useLocation();
    const movieItem = location?.state;
    console.log("movieItem", movieItem);
    return(<div className="movie-item" style={{background: `url(${movieItem.background_image}) no-repeat 0% 0%/cover`}}>

    </div>)
}
export default Movie;