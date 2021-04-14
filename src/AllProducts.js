import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import products from "./products";

function AllProducts() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-column ">
        <h1 className="text-secondary">All Products</h1>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-around">
        {products.map((x) => {
          return (
            <Product id={x.id} url={x.url} name={x.name} price={x.price} key={x.name} />
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
