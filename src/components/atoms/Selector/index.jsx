import React, { useState } from "react";
import classnames from 'classnames';

import style from "./index.module.scss";

const Selector = ({
    className,
    value = '',
    placeholder = '',
    panel: Panel,
}) => {
    const [showPanel, setShowPanel] = useState(false);

    const toggle = () => {
        setShowPanel(pre => !pre)
    }

    return (
        <div className={classnames(style.selector, className)}>
            <div className={style.inputField}>
                <input type="text" value={value} placeholder={placeholder} disabled/>
                <span>&#9662;</span>
            </div>
            {showPanel && <Panel />}
        </div>
    );
}

export default Selector;