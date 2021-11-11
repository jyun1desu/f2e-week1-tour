import React, { useState, useMemo } from "react";
import classnames from "classnames";
import { ReactComponent as PrevIcon } from "images/icon/prev-arrow.svg";
import { ReactComponent as NextIcon } from "images/icon/next-arrow.svg";

import style from "./index.module.scss";
import { useEffect } from "react/cjs/react.development";

const Pagination = ({
  onePageAmount = 9,
  totalLength = 0,
  onChange = () => {},
  className,
}) => {
  const [page, setPage] = useState(1);
  const pages = Math.floor(totalLength / onePageAmount) + 1;

  const renderPageButtons = useMemo(() => {
    const pagesArray = Array.from(Array(pages), (_, x) => x + 1);
    const currentRow = Math.ceil(page / 10) - 1;
    const startIndex = currentRow * 10;
    const endIndex =
      startIndex + 10 > pagesArray.length ? pagesArray.length : startIndex + 10;

    return pagesArray.slice(startIndex, endIndex);
  }, [page, pages]);

  useEffect(() => {
    onChange(page);
  }, [page]);

  return (
    <div className={classnames(style.pagination, className)}>
      <button
        onClick={() => {
          setPage((pre) => {
            if (pre === 1) return 1;
            return pre - 1;
          });
        }}
        className={style.indicator}
      >
        <PrevIcon />
      </button>
      {!renderPageButtons.includes(1) && (
        <button
          onClick={() => {
            setPage(renderPageButtons[0] - 1);
          }}
          className={style.pageButton}
        >
          {" "}
          ...{" "}
        </button>
      )}
      {renderPageButtons.map((n) => (
        <button
          key={n}
          onClick={() => setPage(n)}
          className={classnames(style.pageButton, {
            [style.active]: page === n,
          })}
        >
          {n}
        </button>
      ))}
      {!renderPageButtons.includes(pages) && (
        <button
          onClick={() => {
            setPage(renderPageButtons[renderPageButtons.length - 1] + 1);
          }}
          className={style.pageButton}
        >
          {" "}
          ...{" "}
        </button>
      )}
      <button
        className={style.indicator}
        onClick={() => {
          setPage((pre) => {
            if (pre === pages) return pages;
            return pre + 1;
          });
        }}
      >
        <NextIcon />
      </button>
    </div>
  );
};

export default Pagination;
