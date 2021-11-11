import React, { useState, useRef, useMemo, useEffect } from "react";

import { ReactComponent as PrevIcon } from "images/icon/prev-arrow.svg";
import { ReactComponent as NextIcon } from "images/icon/next-arrow.svg";

import AttractionCard from "components/atoms/AttractionCard";

import useResize from "util/useResize";

import style from "./index.module.scss";

const Carousel = ({ autoPlay = false }) => {
  const { width: windowWidth } = useResize();
  const itemRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const translateX = useMemo(() => {
    if (!itemRef.current?.offsetWidth) return 0;
    const itemWidth = (itemRef.current?.offsetWidth - 25 * 2) / 3;
    const oneSlide = itemWidth + 25;
    return currentIndex * oneSlide;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, windowWidth]);

  return (
    <div className={style.carousel}>
      {currentIndex !== 0 && (
        <button
          className={style.indicator}
          onClick={() =>
            setCurrentIndex((pre) => {
              if (pre === 0) return 0;
              return pre - 1;
            })
          }
        >
          <PrevIcon />
        </button>
      )}
      <div ref={itemRef} className={style.windowWrapper}>
        <div
          className={style.itemList}
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          <AttractionCard className={style.item} />
          <AttractionCard className={style.item} />
          <AttractionCard className={style.item} />
          <AttractionCard className={style.item} />
          <AttractionCard className={style.item} />
        </div>
      </div>
      {currentIndex < 2 && (
        <button
          className={style.indicator}
          onClick={() =>
            setCurrentIndex((pre) => {
              if (pre === 4) return pre;
              return pre + 1;
            })
          }
        >
          <NextIcon />
        </button>
      )}
    </div>
  );
};

export default Carousel;
