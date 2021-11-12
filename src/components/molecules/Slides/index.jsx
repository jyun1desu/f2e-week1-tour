import React, { useState, useRef, useMemo, useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import useResize from "util/useResize";

import style from "./index.module.scss";

const Sliders = ({ sliderData = [1, 2, 3, 4, 5], autoPlay = false }) => {
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
          if (pre === sliderData.length - 1) {
            return 0;
          }
          return pre + 1;
        });
      }, 4000);
    }

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [autoPlay, currentIndex, isHover, sliderData]);

  return (
    <div className={style.slides}>
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
          {sliderData.map((s) => {
            return (
              <Link key={"slider" + s} to="/" className={style.item}>
                <img
                  src="https://cdn04.pinkoi.com/pinkoi.site/event/miffy-2020/03_Theme%20shop_content.png"
                  alt="play"
                />
                <div className={style.info}>
                  <p>臺北大稻埕煙火2021跨年晚會</p>
                  <p>2021.12.31</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={style.indicators}>
        {sliderData.map((_, i) => {
          return (
            <button
              onClick={() => {
                setCurrentIndex(i);
              }}
              className={classnames({
                [style.active]: currentIndex === i,
              })}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sliders;
