import React, { useState, useEffect } from "react";
import classnames from "classnames";
import useRouter from "util/useRouter";
import AttractionCard from "components/atoms/AttractionCard";
import Pagination from "components/atoms/Pagination";
import BreadCrumbs from "components/atoms/BreadCrumbs";
import AttractionCarousel from "components/molecules/AttractionCarousel";
import SearchBox from "components/organisms/SearchBox";

import { ReactComponent as ListIcon } from "images/icon/list.svg";
import { ReactComponent as GridIcon } from "images/icon/grid.svg";
import { ReactComponent as HintIcon } from "images/icon/emptyHint.svg";

import style from "./index.module.scss";

const Empty = ({ keyword }) => {
  return (
    <div className={style.empty}>
      <div className={style.hint}>
        <HintIcon />
        <p className={style.highlight}>不好意思，沒有相關結果</p>
        <p>我們找不到「{keyword}」相關結果，請輸入其他關鍵字。</p>
      </div>
      <div className={style.recommends}>
        <p>熱門推薦</p>
        <AttractionCarousel />
      </div>
    </div>
  );
};

const viewTypes = [
  {
    value: "list",
    icon: ListIcon,
  },
  {
    value: "grid",
    icon: GridIcon,
  },
];

const Search = () => {
  const {
    queries: { keyword },
  } = useRouter();
  const [viewMode, setViewMode] = useState(() => {
    const mode = localStorage.getItem("viewMode") || viewTypes[0].value;
    return mode;
  });

  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  return (
    <div className={style.search}>
      <BreadCrumbs crumbs={[{ label: "搜尋結果", path: "" }]} />
      <SearchBox className={style.searchBox} type="small" />
      <div className={style.topBar}>
        <p className={style.brief}>
          <span className={style.highlight}> 20 </span>
          筆和
          <span className={style.highlight}>{keyword}</span>
          相關結果
        </p>
        <div className={style.viewMode}>
          {viewTypes.map((tab) => {
            const Icon = tab.icon;
            const active = viewMode === tab.value;
            return (
              <button
                className={classnames({
                  [style.active]: active,
                })}
                onClick={() => setViewMode(tab.value)}
                key={tab.value}
              >
                <Icon />
              </button>
            );
          })}
        </div>
      </div>
      <Empty keyword={keyword} />
      <div className={classnames(style.results, style[viewMode])}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
          (attraction, index) => {
            return (
              <>
                <AttractionCard
                  key={"dd" + attraction}
                  className={style.item}
                  type={viewMode === "list" ? "detail" : "brief"}
                />
                {(index + 1) % 3 === 0 && viewMode === "grid" && (
                  <div className={style.divided} />
                )}
              </>
            );
          }
        )}
      </div>
      <Pagination className={style.pagination} />
    </div>
  );
};

export default Search;
