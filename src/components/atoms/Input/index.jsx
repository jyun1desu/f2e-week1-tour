import React from "react";
import style from "./index.module.scss";

const Input = ({
  value = "",
  type = "text",
  placeholder = "",
  onChange = () => {},
}) => {
  return (
    <input
      className={style.input}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
