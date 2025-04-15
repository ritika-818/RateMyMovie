import { useState } from "react";
import { useNavigate } from "react-router";

const SearchList = ({ images, setSearchVal, searchVal }) => {
  const navigate = useNavigate();
  return (searchVal !== "" && (
      <div className="search-list">
        {images.map((elem, i) => (
          <div
            key={i}
            className="search-item"
            onClick={() => {
            setSearchVal("");
              navigate(`/movie/${elem.title}`, { state: elem });
            }}
          >
            <div className="search-img-container">
              <img src={elem.large_cover_image} className="search-img"></img>
            </div>
            <div className="search-title">{elem.title}</div>
          </div>
        ))}
      </div>
    )
  );
};
export default SearchList;
