import "./Button.css";
import React from "react";

const Button = ({ id, text, action }) => {
  const handleAction = (e) => {
    action(e);
  };
  return <button id={id} onClick={}>{text}</button>;
};

export default Button;
