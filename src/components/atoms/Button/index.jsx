import React from "react";
import style from "./index.module.scss";

const Button = ({
    children,
    onClick = () => { }
}) => {
    return (
        <button
            type="submit"
            className={style.button}
            onClick={onClick}
        >
            {children || '確認'}
        </button>
    );
};

export default Button;
