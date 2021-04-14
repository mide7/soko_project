import { faShoppingBag, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./HeaderIcons.css";

function HeaderIcons() {
  let location = useLocation();
  let active = location.pathname === "/cart" ? "HI-active" : null;
  let active1 = location.pathname === "/account" ? "HI-active" : null;
  return (
    <div className="w-100 d-flex justify-content-end">
      <div className={`HI-icon d-flex align-self-center me-3 ${active}`}>
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingBag} /> Bag
        </Link>
      </div>
      <div className={`HI-icon d-flex align-self-center  ${active1}`}>
        <Link to="#">
          <FontAwesomeIcon icon={faUserAlt} /> Account
        </Link>
      </div>
    </div>
  );
}

export default HeaderIcons;
