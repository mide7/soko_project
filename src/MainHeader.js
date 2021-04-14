import React from "react";
import { Link } from "react-router-dom";
import HeaderIcons from "./HeaderIcons";
import SearchBox from "./SearchBox";
import './MainHeader.css'

function MainHeader() {
  return (
    <div className="d-flex justify-content-between align-items-center MH-layout">
      <div className="text-secondary">
        <Link to="/">
          <h1 className="text-secondary">LOGO</h1>
        </Link>
      </div>
      <div className='d-flex flex-grow-1 justify-content-center'>
        <SearchBox />
      </div>
      <div>
        <HeaderIcons />
      </div>
    </div>
  );
}

export default MainHeader;
