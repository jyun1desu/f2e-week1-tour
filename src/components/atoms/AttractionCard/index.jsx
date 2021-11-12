import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as LocationIcon } from "images/icon/location.svg";
import { ReactComponent as NextIcon } from "images/icon/next-arrow.svg";
import { ReactComponent as ClockIcon } from "images/icon/clockIcon.svg";
import { ReactComponent as TagIcon } from "images/icon/tagIcon.svg";

import style from "./index.module.scss";

const AttractionCard = ({ className, styles, type = "brief" }) => {
  const renderContent = () => (
    <div className={style.content}>
      <div className={style.left}>
        <div className={style.cover}>
          <img
            src="https://cdn04.pinkoi.com/pinkoi.site/event/miffy-2020/03_Theme%20shop_content.png"
            alt="cover"
          />
        </div>
      </div>
      <div className={style.right}>
        <div className={style.info}>
          <h3 className={style.name}>景美溪河濱自行車道</h3>
          <p className={style.address}>
            <LocationIcon />
            <span>台北市 大安區</span>
          </p>
          <ul className={style.tags}>
            <li>自然風景</li>
            <li>自然風景</li>
            <li>自然風景</li>
          </ul>
          {type === "detail" && (
            <>
              <p className={style.description}>
                四草綠色隧道，有著「臺版亞馬遜河」的美譽!波光瀲灩的綠色秘境、叢林般的自然生態，吸引眾多國內外觀光客到訪，為近年臺南必訪熱門景點。
              </p>
              <div className={style.bottom}>
                <div className={style.left}>
                  <p>
                    <ClockIcon />
                    <span>營業時間：00:00 - 24:00</span>
                  </p>
                  <p>
                    <TagIcon />
                    <span>票價：免費</span>
                  </p>
                </div>
                <div className={style.right}>
                  <Link className={style.more} to="/">
                    <span>了解詳情</span>
                    <NextIcon />
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  if (type === "brief") {
    return (
      <Link
        style={styles}
        className={classnames(style.attractionCard, style[type], className)}
        to="/"
      >
        {renderContent()}
      </Link>
    );
  }

  return (
    <div
      style={styles}
      className={classnames(style.attractionCard, style[type], className)}
    >
      {renderContent()}
    </div>
  );
};

export default AttractionCard;
