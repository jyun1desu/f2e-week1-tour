import React, { useState, useMemo, useRef, useEffect } from "react";
import classnames from "classnames";
import { parse, stringify } from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as PrevIcon } from "images/icon/prev-arrow.svg";
import { ReactComponent as NextIcon } from "images/icon/next-arrow.svg";

import useRouter from "util/useRouter";

import style from "./index.module.scss";

const Pagination = ({
  onePageAmount = 15,
  totalLength = 0,
  onChange = () => {},
  className,
}) => {
  const firstUpdate = useRef(true);
  const [page, setPage] = useState(1);
  const pages = Math.floor(totalLength / onePageAmount) + 1;
  const navigate = useNavigate();
  const location = useLocation();
  const { queries: { keyword, city, type } } = useRouter();
  const renderPageButtons = useMemo(() => {
    const pagesArray = Array.from(Array(pages), (_, x) => x + 1);
    const currentRow = Math.ceil(page / 10) - 1;
    const startIndex = currentRow * 10;
    const endIndex =
      startIndex + 10 > pagesArray.length ? pagesArray.length : startIndex + 10;

    return pagesArray.slice(startIndex, endIndex);
  }, [page, pages]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    onChange(page);

    const queries = parse(location.search);
    const newQuries = "?" + stringify({ ...queries, page });
    navigate(location.pathname + newQuries);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [type, city, keyword]);

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
            [style.active]: page == n,
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
