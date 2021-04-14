import React from "react";
import Product from "./Product";
import products from "./products";

function FaceMasks() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-column ">
        <h1 className="text-secondary">Face Masks</h1>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-around">
        {products.map((x) => {
          if (x.category === "facemask") {
            return (
              <Product
                id={x.id}
                url={x.url}
                name={x.name}
                price={x.price}
                key={x.name}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FaceMasks;
