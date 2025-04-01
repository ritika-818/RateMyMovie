import { useState, useEffect, useRef } from "react";

const MovieContainer = ({images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

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
          <div key={i} className="movie-img-container">
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
                <div className="movie-suggestion" key={i}>
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
