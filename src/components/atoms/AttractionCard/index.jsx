import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as LocationIcon } from "images/icon/location.svg";

import style from "./index.module.scss";

const AttractionCard = ({ className, styles }) => {
  return (
    <Link style={styles} className={classnames(style.attractionCard, className)} to="/">
      <div className={style.content}>
        <div className={style.cover}>
          <img
            src="https://cdn04.pinkoi.com/pinkoi.site/event/miffy-2020/03_Theme%20shop_content.png"
            alt="cover"
          />
        </div>
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
        </div>
      </div>
    </Link>
  );
};

export default AttractionCard;
