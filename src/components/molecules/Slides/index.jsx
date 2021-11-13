import React, { useState, useRef, useMemo, useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import useResize from "util/useResize";

import style from "./index.module.scss";

const Sliders = ({ sliderData = [], autoPlay = false, showInfo = false }) => {
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
          {sliderData.map((s, i) => {
            const startTime = s?.startTime
              ? s.startTime.split("T")[0].split("-").join(".")
              : null;
            const picture = s?.picture;
            const pictureDesc = s?.picture?.pictureDescription1;

            if (showInfo && !startTime) return null;

            if (showInfo) {
              return (
                <Link
                  key={"slider" + s.id}
                  to={`/${s.type.toLowerCase()}/${s.id}`}
                  className={style.item}
                >
                  <img src={picture} alt={pictureDesc || s?.name} />
                  {showInfo && (
                    <div className={style.info}>
                      <p>{s?.name}</p>
                      <p>{startTime}</p>
                    </div>
                  )}
                </Link>
              );
            }

            return (
              <div
                key={"slider" + s.id + i}
                className={style.item}
              >
                <img src={picture} alt={pictureDesc || s?.name} />
                {showInfo && (
                  <div className={style.info}>
                    <p>{s?.name}</p>
                    <p>{startTime}</p>
                  </div>
                )}
              </div>
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
