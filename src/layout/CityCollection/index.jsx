import React from "react";
import { Link } from "react-router-dom";

import RecentRecommendCarousel from "components/molecules/Slides";
import AttractionCarousel from "components/molecules/AttractionCarousel";

import { ReactComponent as NextIcon } from "images/icon/next-arrow.svg";
import keyVisual from "images/explore-city-banner.png";

import { cititesListWithArea as area } from "config/filter";

import style from "./index.module.scss";

const AreaCollection = ({ areaData }) => {
  return (
    <div className={style.area}>
      <div className={style.left}>
        <p>{areaData.area}</p>
      </div>
      <div className={style.right}>
        <p className={style.introduce}>{areaData.introduce}</p>
        <div className={style.cities}>
          {areaData.cities.map((c) => {
            return (
              <Link key={c.label} to={c.path} className={style.city}>
                <div className={style.wrapper}>
                  <img src={keyVisual} alt="s" />
                  <div className={style.mask} />
                  <span>{c.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CityCollection = () => {
  return (
    <div className={style.cityCollection}>
      <div className={style.top}>
        <section className={style.banner}>
          <img src={keyVisual} alt="key visual" />
          <div className={style.slogan}>
            <p>探索城市</p>
            <p>Discover</p>
          </div>
        </section>
      </div>
      <div className={style.bottom}>
        {area.map((area) => (
          <AreaCollection key={area.area} areaData={area} />
        ))}
      </div>
    </div>
  );
};

export default CityCollection;
