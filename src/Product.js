import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product(props) {
  let { url, name, price, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <div className="d-flex Product-layout mb-3 text-secondary">
        <div className="Product-img-container">
          <img src={url} alt={name} className="Product-img" />
        </div>
        <div className="p-2 fw-bold">
          <div className="Product-name text-wrap w-100">{name}</div>
          <div className="Product-price w-100">${price}</div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
