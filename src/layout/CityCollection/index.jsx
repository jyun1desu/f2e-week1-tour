import React from "react";
import { Link } from "react-router-dom";

import keyVisual from "images/explore-city-banner.png";

import { cititesListWithArea as area, cititesList } from "config/filter";

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
            const cityData = cititesList.find((city) => city.label === c.label);

            if (!cityData) {
              return null;
            }

            return (
              <Link
                key={c.label}
                to={`/city/${cityData.value}`}
                className={style.city}
              >
                <div className={style.wrapper}>
                  <img src={cityData.image} alt={cityData.label} />
                  <div className={style.mask} />
                  <span>{cityData.label}</span>
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
