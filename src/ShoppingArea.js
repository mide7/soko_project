import React from "react";
import { useLocation } from "react-router";

function ShoppingArea(props) {
  let location = useLocation();
  let title = location.pathname.slice(1);
  return (
    <div className="p-2 text-capitalize">
      <div>
        <h1>{title}</h1>
      </div>
      <div>{title}</div>
    </div>
  );
}

export default ShoppingArea;
