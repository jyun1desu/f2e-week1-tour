import React, { useState, useEffect, useMemo } from "react";
import classnames from "classnames";
import { useParams } from "react-router";
import BreadCrumbs from "components/atoms/BreadCrumbs";
import Slides from "components/molecules/Slides";
import AttractionCarousel from "components/molecules/AttractionCarousel";

import { ReactComponent as ClockIcon } from "images/icon/info-icon/clock.svg";
import { ReactComponent as GloablIcon } from "images/icon/info-icon/global.svg";
import { ReactComponent as LocationIcon } from "images/icon/info-icon/locationTag.svg";
import { ReactComponent as PhoneIcon } from "images/icon/info-icon/phone.svg";
import { ReactComponent as TagIcon } from "images/icon/info-icon/tag.svg";

import { getCertainSpot } from "api/fetahAPI";

import style from "./index.module.scss";

const Spot = ({ type }) => {
  const { id: spotId } = useParams();
  const [pageData, setPageData] = useState({});

  const sliderData = useMemo(() => {
    const picturesData = pageData.Picture || {};
    return [
      picturesData.PictureUrl1,
      picturesData.PictureUrl2,
      picturesData.PictureUrl3,
    ]
      .filter((p) => !!p)
      .map((pic) => ({ picture: pic, id: pageData.ID, type: pageData.type }));
  }, [pageData]);

  useEffect(() => {
    const getSpot = async () => {
      const page = await getCertainSpot(type, spotId);
      setPageData(page);
    };

    getSpot();
  }, [type, spotId]);

  return (
    <div className={style.spot}>
      <BreadCrumbs
        crumbs={[
          { label: pageData.City, path: `/city/${pageData.cityId}` },
          { label: pageData.Name, path: `/${pageData.type && pageData.type.toLowerCase()}/${pageData.ID}` },
        ]}
      />
      <section className={style.title}>
        <h2>{pageData?.Name}</h2>
        <ul className={style.tags}>
          {[pageData.Class1, pageData.Class2, pageData.Class3].map((c, i) => {
            if (c) {
              return <li key={pageData.ID + c + i}>{c}</li>;
            }
            return null;
          })}
        </ul>
      </section>
      <section className={style.sildes}>
        <Slides sliderData={sliderData} autoPlay />
      </section>
      <section className={style.introduce}>
        <div className={style.left}>
          <div className={style.infoBlock}>
            <p className={style.title}>景點介紹</p>
            <div className={style.content}>
              <p>{pageData.DescriptionDetail || pageData.Description}</p>
            </div>
          </div>
          <div className={classnames(style.infoBlock, style.traffic)}>
            <p className={style.title}>交通資訊</p>
            <div className={style.content}>
              <p>{pageData.TravelInfo || "請洽相關單位"}</p>
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
                  <span>
                    {pageData.City}
                    {pageData.Address}
                  </span>
                </li>
                {pageData.OpenTime && (
                  <li>
                    <ClockIcon />
                    <span>{pageData.OpenTime}</span>
                  </li>
                )}
                {pageData.duration && (
                  <li>
                    <ClockIcon />
                    <span>{pageData.duration}</span>
                  </li>
                )}
                {pageData.Charge && (
                  <li>
                    <TagIcon />
                    <span>{pageData.Charge}</span>
                  </li>
                )}
                {pageData.Phone && (
                  <li>
                    <PhoneIcon />
                    <a href={`tel:${pageData.Phone}`}>{pageData.Phone}</a>
                  </li>
                )}
                {pageData.WebsiteUrl && (
                  <li>
                    <GloablIcon />
                    <a
                      href={pageData.WebsiteUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {pageData.WebsiteUrl}
                    </a>
                  </li>
                )}
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
