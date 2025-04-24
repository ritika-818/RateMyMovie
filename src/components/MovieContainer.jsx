import { useState, useEffect, useRef} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MovieContainer = () => {
  const images = useSelector((state) => state.movies.list);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  console.log("images in movieContainer" , images);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 20);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: currentIndex * scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="movie-container">
      <div className="movie-carousel" ref={carouselRef}>
        {images.map((elem, i) => (
          <div key={i} className="movie-img-container" onClick={()=>navigate(`/movie/${elem.title}`, { state: elem })}>
            <img className="movie-img" src={elem.large_cover_image} alt={`img-${i}`} />
          </div>
        ))}
      </div>
      <div className="up-next-container">
        UP Next
        <div className="movie-suggestion-container">
          {images.map(
            (elem, i) =>
              i > currentIndex && (
                <div className="movie-suggestion" key={i} onClick={()=>navigate(`/movie/${elem.title}`, { state: elem })}>
                  <div className="movie-suggestion-img">
                    <img src={elem.large_cover_image} className="movie-img"></img>
                  </div>
                  <div className="movie-suggestion-content">{elem.title}</div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieContainer;
