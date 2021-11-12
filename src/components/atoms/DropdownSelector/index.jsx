import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";

import style from "./index.module.scss";

const Selector = ({
  className,
  value = "",
  placeholder = "",
  panel: PanelContent,
}) => {
  const selectorRef = useRef(null);
  const [showPanel, setShowPanel] = useState(false);

  const toggle = () => {
    setShowPanel((pre) => !pre);
  };

  useEffect(() => {
    const closePanel = (e) => {
      if (!selectorRef.current?.contains(e.target)) {
        setShowPanel(false);
      }
    };

    window.addEventListener("click", closePanel);

    return () => {
      window.removeEventListener("click", closePanel);
    };
  }, []);

  return (
    <div
      ref={selectorRef}
      onClick={(e) => {
        toggle();
      }}
      className={classnames(style.selector, className)}
    >
      <div
        className={classnames(style.inputField, {
          [style.chosen]: !!value.length,
        })}
      >
        <input type="text" value={value} placeholder={placeholder} disabled />
        <span>&#9662;</span>
      </div>
      {showPanel && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={style.panel}
        >
          <PanelContent />
        </div>
      )}
    </div>
  );
};

export default Selector;
