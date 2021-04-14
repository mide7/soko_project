import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import HeaderIcons from "./HeaderIcons";
import SearchBox from "./SearchBox";
import "./MainHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingBag,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import Categories from "./Categories";

function MainHeader() {
  const [showNav, setshowNav] = useState(false);
  let location = useLocation();
  let active = location.pathname === `/cart` ? "Cat-active" : null;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center MH-layout w-100">
        <div className="m-2 fs-3 MH-navIcon" onClick={setshowNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="text-secondary mx-2">
          <Link to="/">
            <h1 className="text-secondary mb-0">LOGO</h1>
          </Link>
        </div>
        <div className="d-flex flex-grow-1 justify-content-center mx-2 MH-search">
          <SearchBox />
        </div>
        <div className="MH-icon">
          <HeaderIcons />
        </div>
      </div>
      <div className={showNav ? `MH-navbar active` : `MH-navbar`}>
        <div>
          <button
            className="MH-navbar-btn"
            onClick={() => setshowNav(!showNav)}
          >
            x
          </button>
        </div>
        <div className="ps-2 w-100 margin-top-cat">
          <Categories navbar={true} showNav={showNav} setshowNav={setshowNav} />
          <div className="text-secondary MH-subIcon">
            <Link to="/cart" onClick={() => setshowNav(!showNav)}>
              <div className={`d-flex overflow-hidden my-width text-capitalize align-items-center py-2 pl-1 text-left  Cat-layout ${active}`}>
                <FontAwesomeIcon icon={faShoppingBag} /> <span className='ms-1'>Bag </span>
              </div>
            </Link>
            <Link to="#" onClick={() => setshowNav(!showNav)}>
              <div className="d-flex overflow-hidden my-width text-capitalize align-items-center py-2 pl-1 text-left  Cat-layout">
                <FontAwesomeIcon icon={faUserAlt} /> <span className='ms-1'>Account</span> 
              </div>
            </Link>
          </div>
        </div>
      </div>
      <button
        className={showNav ? `MH-navbar-fullbtn active` : `MH-navbar-fullbtn `}
        onClick={() => setshowNav(!showNav)}
      ></button>
    </>
  );
}

export default MainHeader;
