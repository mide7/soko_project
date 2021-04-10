import React from "react";
import Catergory from "./Catergory";

function Categories() {
  let arr = ["All", "face masks", "fresh food", "grocery", "home", "kids"];
  return (
    <div>
      {arr.map((i) => {
        return <Catergory key={i}>{i}</Catergory>;
      })}
    </div>
  );
}

export default Categories;
