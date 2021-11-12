import React from "react";
import classnames from "classnames";

import BreadCrumbs from "components/atoms/BreadCrumbs";
import Slides from "components/molecules/Slides";
import AttractionCarousel from "components/molecules/AttractionCarousel";

import { ReactComponent as ClockIcon } from "images/icon/info-icon/clock.svg";
import { ReactComponent as GloablIcon } from "images/icon/info-icon/global.svg";
import { ReactComponent as LocationIcon } from "images/icon/info-icon/locationTag.svg";
import { ReactComponent as PhoneIcon } from "images/icon/info-icon/phone.svg";
import { ReactComponent as TagIcon } from "images/icon/info-icon/tag.svg";

import style from "./index.module.scss";

const Spot = () => {
  return (
    <div className={style.spot}>
      <BreadCrumbs
        crumbs={[
          { label: "臺北市", path: "/123" },
          { label: "景美溪河濱自行車道", path: "/123" },
        ]}
      />
      <section className={style.title}>
        <h2>景美溪河濱自行車道</h2>
        <ul className={style.tags}>
          <li>自然風景</li>
          <li>自然風景</li>
          <li>自然風景</li>
        </ul>
      </section>
      <section className={style.sildes}>
        <Slides autoPlay />
      </section>
      <section className={style.introduce}>
        <div className={style.left}>
          <div className={style.infoBlock}>
            <p className={style.title}>景點介紹</p>
            <div className={style.content}>
              <p>
                四草綠色隧道，有著「臺版亞馬遜河」的美譽!波光瀲灩的綠色秘境、叢林般的自然生態，吸引眾多國內外觀光客到訪，為近年臺南必訪熱門景點。
              </p>
            </div>
          </div>
          <div className={classnames(style.infoBlock, style.traffic)}>
            <p className={style.title}>交通資訊</p>
            <div className={style.content}>
              <p>
                {`火車
臺北火車站→基隆火車站→基隆客運（791）→鼻頭
瑞芳火車站→臺灣好行黃金福隆線（856）→鼻頭
宜蘭線火車→福隆站→基隆客運（791）、臺灣好行黃金福隆線(856)→鼻頭

客運
瑞芳火車站→基隆客運（886）→鼻頭
臺北火車站北一門→國光客運(1811) →鼻頭
臺北火車站北一門→國光客運(1812) →鼻頭`}
              </p>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={classnames(style.infoBlock, style.info)}>
            <p className={style.title} />
            <div className={style.content}>
              <ul className={style.infoList}>
                <li>
                  <LocationIcon />
                  <span>臺南市725將軍區平沙里13鄰平沙140號</span>
                </li>
                <li>
                  <ClockIcon />
                  <span>全年無休</span>
                </li>
                <li>
                  <TagIcon />
                  <span>免費</span>
                </li>
                <li>
                  <PhoneIcon />
                  <a href="tel:00-0000-0000">00-0000-0000</a>
                </li>
                <li>
                  <GloablIcon />
                  <a href="www.aaaaaa.tw" target="_blank">
                    www.aaaaaa.tw
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={style.nearBy}>
        <div className={style.infoBlock}>
          <p className={style.title}>附近景點</p>
          <div className={style.content}>內容</div>
        </div>
      </section>
      <section className={style.hot}>
        <div className={style.infoBlock}>
          <p className={style.title}>熱門推薦</p>
          <div className={style.content}>
            <AttractionCarousel />
          </div>
        </div>
      </section>
      <section className={style.food}>
        <div className={style.infoBlock}>
          <p className={style.title}>附近美食</p>
          <div className={style.content}>
            <AttractionCarousel />
          </div>
        </div>
      </section>
      <section className={style.hotel}>
        <div className={style.infoBlock}>
          <p className={style.title}>附近住宿</p>
          <div className={style.content}>
            <AttractionCarousel />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Spot;
