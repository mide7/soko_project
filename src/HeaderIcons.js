import { faShoppingBag, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderIcons.css";

function HeaderIcons() {
  return (
    <div className="HI-layout w-100 d-flex justify-content-end">
      <div className="HI-icon d-flex align-self-center px-3">
        <Link>
          <FontAwesomeIcon icon={faShoppingBag} /> Bag
        </Link>
      </div>
      <div className="HI-icon d-flex align-self-center px-3">
        <Link>
          <FontAwesomeIcon icon={faUserAlt} /> Account
        </Link>
      </div>
    </div>
  );
}

export default HeaderIcons;
