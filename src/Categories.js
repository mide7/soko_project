import React from "react";
import Category from "./Category";

function Categories() {
  let arr = ["All", "face-masks", "fresh-food", "grocery", "home", "kids"];
  return (
    <div>
      {arr.map((i) => {
        return <Category key={i}>{i}</Category>;
      })}
    </div>
  );
}

export default Categories;
