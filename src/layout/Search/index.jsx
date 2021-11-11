import React from "react";

import AttractionCard from "components/atoms/AttractionCard";
import Pagination from "components/atoms/Pagination";

import style from "./index.module.scss";

export default function index() {
  return (
    <div className={style.search}>
      search
      <div className={style.results}>
        {[1, 2, 3, 4, 5].map((attraction) => {
          return <AttractionCard type="detail" />;
        })}
      </div>
	  <Pagination className={style.pagination}/>
    </div>
  );
}
