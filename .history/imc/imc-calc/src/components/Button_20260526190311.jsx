import "./Button.css";
import React from "react";

const Button = ({id, text, action}) => {

    
  return <button id={id}>{text}</button>;
};

export default Button;
