import Menu from "./Menu";
import AllFilter from "./AllFilter";
import SearchList from "./SearchList";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../Imdb";

const Header = () => {
  const images = useContext(UserContext);
  const [showHeader, setShowHeader] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [allFilter, setAllFilter] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [filterImg , setFilterImg] = useState([]);
  const navigate = useNavigate();
  const handleAllFilter = () => {
    const showFilter = allFilter;
    setAllFilter(!showFilter);
  };
  const handleSingIn = () => {
    navigate("/signIn");
  };
  const handleSearch = (val)=>{
    setSearchVal(val.trim());
    const filterSearch = images.filter((item)=> item.title.toLowerCase().includes(searchVal.toLowerCase()));
    setFilterImg(filterSearch);
  }

  return (
    <>
      {showHeader && (
        <div className="header">
          <div className="header-logo">IMDb</div>
          <div
            className="header-menu"
            onClick={() => {
              setShowMenu(true);
              setShowHeader(false);
            }}
          >
            Menu
          </div>
          <div className="search-all">
            <div className="header-all header-menu" onClick={handleAllFilter}>
              ALL
            </div>
            <input
              className="header-search"
              onChange={(e)=>handleSearch(e.target.value)}
            ></input>
          </div>
          {searchVal !== "" && <SearchList images={filterImg}/>}
          <div className="header-sign-in header-menu" onClick={handleSingIn}>
            SignIn
          </div>
        </div>
      )}
      {showMenu && (
        <Menu setShowMenu={setShowMenu} setShowHeader={setShowHeader} />
      )}
      {allFilter && <AllFilter />}
    </>
  );
};
export default Header;
