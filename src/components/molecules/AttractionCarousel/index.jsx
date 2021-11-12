import React, { useState, useRef, useMemo, useEffect } from "react";

import { ReactComponent as PrevIcon } from "images/icon/prev-arrow.svg";
import { ReactComponent as NextIcon } from "images/icon/next-arrow.svg";

import AttractionCard from "components/atoms/AttractionCard";

import useResize from "util/useResize";

import style from "./index.module.scss";

const Carousel = ({
  attractionData = [1, 2, 3, 4, 5, 6, 7, 8],
  showAmount = 3,
  oneClickSlideAmount = 3,
}) => {
  const { width: windowWidth } = useResize();
  const itemRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const translateX = useMemo(() => {
    if (!itemRef.current?.offsetWidth) return 0;
    const itemWidth =
      (itemRef.current?.offsetWidth - 25 * (showAmount - 1)) / showAmount;
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
              if (pre - oneClickSlideAmount < 0) return 0;
              return pre - oneClickSlideAmount;
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
          {attractionData.map((attraction) => {
            return (
              <AttractionCard
                key={attraction}
                type="brief"
                className={style.item}
                styles={{
                  flex: `0 0 calc((100% - (25px * ${
                    showAmount - 1
                  })) / ${showAmount})`,
                  marginRight: "25px",
                }}
              />
            );
          })}
        </div>
      </div>
      {attractionData.length > showAmount &&
        currentIndex < attractionData.length - showAmount && (
          <button
            className={style.indicator}
            onClick={() =>
              setCurrentIndex((pre) => {
                return pre + oneClickSlideAmount;
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
