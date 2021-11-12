import React from "react";
import classnames from "classnames";
import { typeList } from "config/filter";

import { ReactComponent as CheckedIcon } from "images/icon/checked.svg";
import { ReactComponent as UncheckIcon } from "images/icon/uncheck.svg";

import style from "./index.module.scss";

const TypeSelector = ({
  className,
  onSelect,
  value = [],
}) => {
  return (
    <div className={classnames(style.typeSelector, className)}>
      <ul className={style.options}>
        {typeList.map((type) => {
          const active = value.map((v) => v.label).includes(type.label);
          return (
            <li className={style.option} key={type.label}>
              {active ? <CheckedIcon /> : <UncheckIcon />}
              <span
                className={classnames(style.label, {
                  [style.active]: active,
                })}
              >
                {type.label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TypeSelector;
