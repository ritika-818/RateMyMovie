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
              navigate(`/movie/${elem.name}`, { state: elem });
            }}
          >
            <div className="search-img-container">
              <img src={elem.image} className="search-img"></img>
            </div>
            <div className="search-title">{elem.name}</div>
          </div>
        ))}
      </div>
    )
  );
};
export default SearchList;
