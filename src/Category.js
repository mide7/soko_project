import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Category.css";

function Category(props) {
  let { setshowNav,showNav } = props;
  let location = useLocation();
  let active = location.pathname === `/${props.children}` ? "Cat-active" : null;
  let active1 =
    location.pathname === "/" && props.children === "All" ? "Cat-active" : null;
  return (
    <Link to={"/" + props.children} onClick={()=>setshowNav(!showNav)}>
      <div
        className={`d-flex overflow-hidden my-width text-capitalize py-2 pl-1 text-left  Cat-layout ${active} ${active1}`}
      >
        {props.children}
      </div>
    </Link>
  );
}

export default Category;
