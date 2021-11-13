import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import Slides from "components/molecules/Slides";
import AttractionCarousel from "components/molecules/AttractionCarousel";
import SearchBox from "components/organisms/SearchBox";

import { bannersState } from "store/banner";
import { artActivityListState } from "store/activity";
import { natureListState } from "store/scenicSpot";
import { recommandRestaurantListState } from "store/restaurant";

import keyVisual from "images/key-visual.png";

import style from "./index.module.scss";

const Home = () => {
  const banners = useRecoilValue(bannersState);
  const natureList = useRecoilValue(natureListState);
  const restaurantList = useRecoilValue(recommandRestaurantListState);
  const artActivityList = useRecoilValue(artActivityListState);

  return (
    <div className={style.home}>
      <div className={style.top}>
        <section className={style.banner}>
          <img src={keyVisual} alt="key visual" />
          <div className={style.slogan}>
            <p>探索臺灣</p>
            <p>Taiwan is here.</p>
          </div>
          <SearchBox className={style.searchBox} type="big" />
        </section>
      </div>
      <div className={style.bottom}>
        <section className={style.block}>
          <h2 className={style.title}>即將開始</h2>
          <div className={style.content}>
            <div className={style.content}>
              <Slides sliderData={banners} autoPlay showInfo />
            </div>
          </div>
        </section>
        <section className={style.block}>
          <h2 className={style.title}>踏青郊遊</h2>
          <div className={style.content}>
            <AttractionCarousel attractionData={natureList} key="go-out" />
          </div>
        </section>
        <section className={style.block}>
          <h2 className={style.title}>美食饗宴</h2>
          <div className={style.content}>
            <AttractionCarousel attractionData={restaurantList} key="foodie" />
          </div>
        </section>
        <section className={style.block}>
          <h2 className={style.title}>文化之旅</h2>
          <div className={style.content}>
            <AttractionCarousel
              attractionData={artActivityList}
              key="culture"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
