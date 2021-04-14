import React from "react";

function ShoppingArea(props) {
  return (
    <div className="p-2 text-capitalize ">
      <div className="d-flex flex-row">{props.children}</div>
    </div>
  );
}

export default ShoppingArea;
