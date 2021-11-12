import React, { useState } from "react";
import classnames from "classnames";
import SearchInput from "components/atoms/SearchInput";
import Selector from "components/atoms/Selector";

import { cititesList, typeList } from "config/filter";

import style from "./index.module.scss";

const SearchBox = ({ className, type }) => {
  const [selectedCity, setCity] = useState(cititesList[0]);
  const [selectedType, setType] = useState(typeList[0]);

  return (
    <div className={classnames(style.searchBox, className, style[type])}>
      <div className={style.filters}>
        <Selector
          className={style.filter}
          placeholder="探索城市"
          options={cititesList}
          value={selectedCity}
          onSelect={setCity}
          prefix={type === "big" ? "探索" : ""}
        />
        <Selector
          className={style.filter}
          placeholder="探索景點"
          options={typeList}
          value={selectedType}
          onSelect={setType}
          prefix={type === "big" ? "探索" : ""}
        />
      </div>
      <SearchInput
        placeholder="輸入關鍵字"
        type={type === "small" ? "row" : "column"}
      />
    </div>
  );
};

export default SearchBox;
