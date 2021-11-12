import React, { useState } from "react";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import useRouter from "util/useRouter";

import Input from "components/atoms/Input";
import Button from "components/atoms/Button";
import Selector from "components/atoms/Selector";

import { ReactComponent as SearchIcon } from "images/icon/search-icon.svg";

import { cititesList, typeList } from "config/filter";

import style from "./index.module.scss";

const SearchBox = ({ className, type }) => {
  const {
    queries: { keyword, city, type: dataType },
  } = useRouter();
  const navigate = useNavigate();
  const [selectedCity, setCity] = useState(cititesList[0]);
  const [selectedType, setType] = useState(typeList[0]);
  const [inputKeyWord, setInput] = useState(keyword);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        let params = {
          city: selectedCity.value,
          type: selectedType.value,
        };

        if (inputKeyWord) {
          params = { ...params, keyword: inputKeyWord };
        }

        const queries = new URLSearchParams(params).toString();
        navigate(`/search?${queries}`);
      }}
      className={classnames(style.searchBox, className, style[type])}
    >
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
      <div className={classnames(style.search, style[type])}>
        <Input
          value={inputKeyWord}
          placeholder="輸入關鍵字"
          onChange={setInput}
        />
        <Button>
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
};

export default SearchBox;
