import React from "react";
import style from "./index.module.scss";

const Input = ({
    type = "text",
    placeholder = "",
    onChange = () => { }
}) => {
    return (
        <input
            className={style.input}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;