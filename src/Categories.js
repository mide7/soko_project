import React from "react";
import Category from "./Category";

function Categories(props) {
  let { navbar, showNav, setshowNav } = props;
  let arr = ["All", "face-masks", "fresh-food", "grocery", "home", "kids"];
  return (
    <div>
      {navbar ? (
        <>
          {arr.map((i) => {
            return (
              <Category key={i} showNav={showNav} setshowNav={setshowNav} navbar={navbar}>
                {i}
              </Category>
            );
          })}
        </>
      ) : (
        <>
          {arr.map((i) => {
            return <Category key={i}>{i}</Category>;
          })}
        </>
      )}
    </div>
  );
}

export default Categories;
