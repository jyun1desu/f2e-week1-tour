import React from "react";
import classnames from "classnames";
import Selector from "components/atoms/DropdownSelector";
import { cititesList } from "config/filter";

import { ReactComponent as CheckedIcon } from "images/icon/checked.svg";
import { ReactComponent as UncheckIcon } from "images/icon/uncheck.svg";

import style from "./index.module.scss";

const Panel = ({ value }) => {
  return (
    <div className={style.cityPanel}>
      {cititesList.map((a) => {
        return (
          <section key={a.area} className={style.category}>
            <p className={style.categoryTitle}>{a.area}</p>
            <ul className={style.options}>
              {a.cities.map((city) => {
                const active = value.map((v) => v.label).includes(city.label);
                return (
                  <li className={style.option} key={a.area + city.label}>
                    {active ? <CheckedIcon /> : <UncheckIcon />}
                    <span
                      className={classnames(style.label, {
                        [style.active]: active,
                      })}
                    >
                      {city.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
};

const CitySelector = ({
  className,
  onSelect,
  multiple = false,
  value = [],
}) => {
  return (
    <Selector
      className={className}
      placeholder="城市"
      panel={() => <Panel value={value} />}
    />
  );
};

export default CitySelector;
