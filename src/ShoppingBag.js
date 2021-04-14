import React from "react";
import { Link } from "react-router-dom";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ShoppingBag.css";
import PrimaryBtn from "./PrimaryBtn";

function ShoppingBag() {
  return (
    <div className="d-flex w-100 align-items-center flex-column">
      <div className="text-grey SB-sadface">
        <FontAwesomeIcon icon={faSadTear} />
      </div>
      <div className="fw-bold">it's empty here</div>
      <span className="fst-italic text-secondary">
        Start shopping to add items to your bag
      </span>
      <div className="mt-4">
        <Link to="/">
          <PrimaryBtn name="Back to homepage" />
        </Link>
      </div>
    </div>
  );
}

export default ShoppingBag;
