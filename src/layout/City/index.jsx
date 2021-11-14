/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { bannersState } from "store/banner";
import RecentRecommendCarousel from "components/molecules/Slides";
import AttractionCarousel from "components/molecules/AttractionCarousel";

import { ReactComponent as NextIcon } from "images/icon/next-arrow.svg";
import { getRandomNumbers } from "util/helper";

import { cititesList } from "config/filter";
import { getCityData } from "api/fetahAPI";

import style from "./index.module.scss";

const GoMore = ({ type, city }) => {
  return (
    <Link className={style.more} to={`/search?city=${city}&type=${type}`}>
      <span>查看更多</span>
      <NextIcon />
    </Link>
  );
};

const FieldTitle = ({ type, city, title }) => {
  return (
    <div className={style.fieldTitle}>
      <h2 className={style.title}>{title}</h2>
      <GoMore type={type} city={city} />
    </div>
  );
};
const City = () => {
  const { city: cityParam } = useParams();
  const city = cititesList.find((c) => c.value === cityParam);
  const navigate = useNavigate();
  const otherCityList = useMemo(() => {
    const random = getRandomNumbers(cititesList.length, 5, [0]);
    return cititesList.filter((_, i) => {
      return random.includes(i);
    });
  }, [cititesList]);

  const banners = useRecoilValue(bannersState(city?.value || ""));
  const [cityData, setCityData] = useState({
    spotData: [],
    hotelData: [],
    restaurantData: [],
  });

  useEffect(() => {
    const getData = async () => {
      const data = await getCityData(city.value);
      setCityData(data);
    };

    if (city?.value) {
      getData();
    } else {
      navigate("/");
    }
  }, [cityParam]);

  return (
    <div className={style.city}>
      <div className={style.top}>
        <section className={style.banner}>
          <img src={city?.image} alt="key visual" />
          <div className={style.slogan}>
            <p>{city?.label}</p>
            <p>{city?.label_en}</p>
          </div>
        </section>
      </div>
      <div className={style.bottom}>
        <section className={style.block}>
          <h2 className={style.title}>即將開始</h2>
          <div className={style.content}>
            <div className={style.content}>
              <RecentRecommendCarousel sliderData={banners} autoPlay showInfo />
            </div>
          </div>
        </section>
        <section className={style.block}>
          <FieldTitle
            city={city.value}
            type="ScenicSpot"
            title={`${city.label}熱門景點`}
          />
          <div className={style.content}>
            <AttractionCarousel
              attractionData={cityData.spotData}
              key="go-out"
            />
          </div>
        </section>
        <section className={style.block}>
          <FieldTitle
            city={city.value}
            type="Restaurant"
            title={`${city.label}美食熱搜`}
          />
          <div className={style.content}>
            <AttractionCarousel
              attractionData={cityData.restaurantData}
              key="foodie"
            />
          </div>
        </section>
        <section className={style.block}>
          <FieldTitle
            city={city.value}
            type="Hotel"
            title={`${city.label}人氣住宿`}
          />
          <div className={style.content}>
            <AttractionCarousel
              attractionData={cityData.hotelData}
              key="culture"
            />
          </div>
        </section>
        <section className={style.block}>
          <h2 className={style.title}>探索其他城市</h2>
          <div className={style.content}>
            <div className={style.otherCityList}>
              {otherCityList.map((city) => {
                return (
                  <Link className={style.city} to={`/city/${city.value}`}>
                    <div className={style.cover}>
                      <img src={city.image} alt={city.label} />
                    </div>
                    <p>{city.label}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default City;
