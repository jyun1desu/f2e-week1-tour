import React, { useState, useRef, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as PrevIcon } from "images/icon/prev-arrow.svg";
import { ReactComponent as NextIcon } from "images/icon/next-arrow.svg";

import useResize from "util/useResize";

import style from "./index.module.scss";

const Carousel = ({ autoPlay = false }) => {
  const { width: windowWidth } = useResize();
  const itemRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const translateX = useMemo(() => {
    return currentIndex * itemRef.current?.offsetWidth;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, windowWidth]);

  useEffect(() => {
    let timeout;
    if (autoPlay && !isHover) {
      timeout = window.setTimeout(() => {
        setCurrentIndex((pre) => {
          if (pre === 2) {
            return 0;
          }
          return pre + 1;
        });
      }, 5000);
    }

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [autoPlay, currentIndex, isHover]);

  return (
    <div className={style.carousel}>
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
      <div ref={itemRef} className={style.windowWrapper}>
        <div
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          className={style.itemList}
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          <Link to="/" className={style.item}>
            <img
              src="https://cdn04.pinkoi.com/pinkoi.site/event/miffy-2020/03_Theme%20shop_content.png"
              alt="play"
            />
            <div className={style.info}>
              <p>臺北大稻埕煙火2021跨年晚會</p>
              <p>2021.12.31</p>
            </div>
          </Link>
          <Link to="/" className={style.item}>
            <img
              src="https://cdn04.pinkoi.com/pinkoi.site/event/miffy-2020/03_Theme%20shop_content.png"
              alt="play"
            />
            <div className={style.info}>
              <p>臺北大稻埕煙火2021跨年晚會</p>
              <p>2021.12.31</p>
            </div>
          </Link>
          <Link to="/" className={style.item}>
            <img
              src="https://cdn04.pinkoi.com/pinkoi.site/event/miffy-2020/03_Theme%20shop_content.png"
              alt="play"
            />
            <div className={style.info}>
              <p>臺北大稻埕煙火2021跨年晚會</p>
              <p>2021.12.31</p>
            </div>
          </Link>
          <Link to="/" className={style.item}>
            <img
              src="https://cdn04.pinkoi.com/pinkoi.site/event/miffy-2020/03_Theme%20shop_content.png"
              alt="play"
            />
            <div className={style.info}>
              <p>臺北大稻埕煙火2021跨年晚會</p>
              <p>2021.12.31</p>
            </div>
          </Link>
        </div>
      </div>
      <button
        className={style.indicator}
        onClick={() =>
          setCurrentIndex((pre) => {
            if (pre === 2) return pre;
            return pre + 1;
          })
        }
      >
        <NextIcon />
      </button>
    </div>
  );
};

export default Carousel;
