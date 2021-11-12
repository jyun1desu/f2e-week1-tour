import React from "react";
import classnames from 'classnames';
import SearchInput from "components/atoms/SearchInput";
import CitySelector from "components/molecules/CitySelector";
import TypeSelector from "components/molecules/TypeSelector";

import style from "./index.module.scss";

const SearchBox = ({className}) => {
  return (
    <div className={classnames(style.searchBox, className)}>
      <SearchInput placeholder="搜尋地點、景點、活動" />
      <div className={style.filters}>
        <CitySelector className={style.filter} />
        <TypeSelector className={style.filter} />
      </div>
    </div>
  );
};

export default SearchBox;
