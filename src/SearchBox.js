import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchBox.css";

function SearchBox() {
  return (
    <div className="SB-area w-100">
      <form action="" className="SB-form">
        <div className='SB-w-100'>
          <input type="text" className="SB-input" placeholder='Search for products'/>
        </div>
        <button className="SB-btn">
          <FontAwesomeIcon icon={faSearch} className="SB-icon" />
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
