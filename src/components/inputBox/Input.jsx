import React from "react";
import "./style.css"
const Input = ({ placeholder, onchange }) => {
  return <input placeholder={placeholder} style={{minHeight:"50px", minWidth:"250px", borderRadius:"7px", paddingLeft:"10px", fontSize:"17px"}} className="input-box"></input>;
};

export default Input;
