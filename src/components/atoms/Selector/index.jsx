import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";

import style from "./index.module.scss";

const Selector = ({
  className,
  value,
  placeholder = "",
  options = [],
  onSelect = () => {},
  prefix = "",
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
        <input
          type="text"
          value={prefix + value.label}
          placeholder={placeholder}
          disabled
        />
        <span>&#9662;</span>
      </div>
      {showPanel && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={style.panel}
        >
          <div className={style.options}>
            {options.map((option) => {
              return (
                <span
                  key={option.value}
                  className={classnames(style.option, {
                    [style.chosen]: value.value === option.value,
                  })}
                  onClick={() => {
                    onSelect(option);
                    setShowPanel(false);
                  }}
                >
                  {option.label}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Selector;
