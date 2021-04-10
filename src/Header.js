import React from "react";
import "./Header.css";
import HeaderIcons from "./HeaderIcons";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <div className="Header-layout py-2 p-2 w-100">
      <SearchBox />
      <HeaderIcons />
    </div>
  );
}

export default Header;
