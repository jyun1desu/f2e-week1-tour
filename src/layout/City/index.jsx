import React from "react";
import { Link } from "react-router-dom";

import RecentRecommendCarousel from "components/molecules/Slides";
import AttractionCarousel from "components/molecules/AttractionCarousel";

import { ReactComponent as NextIcon } from "images/icon/next-arrow.svg";
import keyVisual from "images/key-visual.png";

import style from "./index.module.scss";

const GoMore = ({ path }) => {
  return (
    <Link className={style.more} to="/">
      <span>查看更多</span>
      <NextIcon />
    </Link>
  );
};

const FieldTitle = ({ path, title }) => {
  return (
    <div className={style.fieldTitle}>
      <h2 className={style.title}>臺北美食熱搜</h2>
      <GoMore />
    </div>
  );
};
const City = () => {
  return (
    <div className={style.city}>
      <div className={style.top}>
        <section className={style.banner}>
          <img src={keyVisual} alt="key visual" />
          <div className={style.slogan}>
            <p>臺北市</p>
            <p>Taipei City</p>
          </div>
        </section>
      </div>
      <div className={style.bottom}>
        <section className={style.block}>
          <h2 className={style.title}>即將開始</h2>
          <div className={style.content}>
            <div className={style.content}>
              <RecentRecommendCarousel autoPlay />
            </div>
          </div>
        </section>
        <section className={style.block}>
          <FieldTitle>臺北熱門景點</FieldTitle>
          <div className={style.content}>
            <AttractionCarousel key="go-out" />
          </div>
        </section>
        <section className={style.block}>
          <FieldTitle>臺北美食熱搜</FieldTitle>
          <div className={style.content}>
            <AttractionCarousel key="foodie" />
          </div>
        </section>
        <section className={style.block}>
          <FieldTitle>臺北人氣住宿</FieldTitle>
          <div className={style.content}>
            <AttractionCarousel key="culture" />
          </div>
        </section>
        <section className={style.block}>
          <h2 className={style.title}>探索其他城市</h2>
          <div className={style.content}>
            <div className={style.otherCityList}>
              {[1, 2, 3, 4, 5].map((city) => {
                return (
                  <Link className={style.city} to="/">
                    <div className={style.cover}>
                      <img src="https://i.pinimg.com/550x/94/96/cb/9496cb7a85bc3300253c3ff311a5e819.jpg" alt="" />
                    </div>
                    <p>新竹市</p>
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
