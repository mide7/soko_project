import React from "react";
import './PrimaryBtn.css'

function PrimaryBtn(props) {
  return <button className='btn primarybtn'>{props.name}</button>;
}

export default PrimaryBtn;
