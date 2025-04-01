import { useState } from "react";

const Menu = ({ setShowMenu, setShowHeader }) => {
    const [closingMenu , setClosingMenu] = useState(false);
    const handleCloseMenu = ()=>{
        setClosingMenu(true);
        setTimeout(()=>{
            setShowMenu(false);
            setShowHeader(true);
        },1000);
    }
  return (
    <div className={`menu ${closingMenu ? "hideMenu" : "showMenu"}`}>
      <button
        onClick={handleCloseMenu}
        className="menu-close"
      >
        X
      </button>
    </div>
  );
};
export default Menu;
