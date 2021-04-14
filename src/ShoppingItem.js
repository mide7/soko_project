import React from "react";
import { useHistory, useLocation } from "react-router";
import MainHeader from "./MainHeader";
import products from "./products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import "./ShoppingItem.css";

function ShoppingItem() {
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  let location = useLocation();
  let ID = Number(location.pathname.slice(9));
  let item = products.find((x) => x.id === ID);
  return (
    <div className="SI-layout">
      <MainHeader />
      <div className="mt-2">
        <button className="btn d-flex align-items-center" onClick={goBack}>
          <FontAwesomeIcon icon={faLessThan} />
          <span className="ms-2 fs-5 fw-bold">Back</span>
        </button>
      </div>
      <div className="container-fluid my-4 justify-content-between">
        <div className="row">
          <div className="col-sm-6">
            <div className="SI-img-container">
              <img src={item.url} alt={item.name} className="SI-img" />
            </div>
          </div>
          <div className="col-sm-6">
            <h1 className="text-grey text-capitalize">{item.name}</h1>
            <p className="text-secondary">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <div className="fs-4 fw-bold">Price: ${item.price}</div>
            <div className="mt-4 me-1">
              <button className="btn btn-outline-secondary btn-lg me-4 ">
                Add to Bag
              </button>
              <button className="btn btn-outline-dark btn-lg ">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingItem;
