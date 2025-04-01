import { useLocation } from "react-router-dom";

const Movie = ()=>{
    const location = useLocation();
    const movieItem = location?.state;
    console.log("movieItem", movieItem);
    return(<>I'm movie</>)
}
export default Movie;