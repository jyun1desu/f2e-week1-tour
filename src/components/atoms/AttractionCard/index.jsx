import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as LocationIcon } from "images/icon/location.svg";
import { ReactComponent as NextIcon } from "images/icon/next-arrow.svg";
import { ReactComponent as ClockIcon } from "images/icon/clockIcon.svg";
import { ReactComponent as TagIcon } from "images/icon/tagIcon.svg";

import style from "./index.module.scss";

const AttractionCard = ({
  attractionData = {},
  className,
  styles,
  type = "brief",
}) => {
  const coverPhoto =
    attractionData.Picture?.PictureUrl1 ||
    "https://cdn04.pinkoi.com/pinkoi.site/event/miffy-2020/03_Theme%20shop_content.png";

  const renderContent = () => (
    <div className={style.content}>
      <div className={style.left}>
        <div className={style.cover}>
          <img src={coverPhoto} alt={attractionData.Name} />
        </div>
      </div>
      <div className={style.right}>
        <div className={style.info}>
          <h3 className={style.name}>{attractionData.Name}</h3>
          <p className={style.address}>
            <LocationIcon />
            <span>{attractionData.Address || attractionData.City}</span>
          </p>
          <ul className={style.tags}>
            {[
              attractionData.Class1,
              attractionData.Class2,
              attractionData.Class3,
            ].map((c, i) => {
              if (c) {
                return <li key={attractionData.ID + c + i}>{c}</li>;
              }
              return null;
            })}
          </ul>
          {type === "detail" && (
            <>
              <p className={style.description}>
                {attractionData.Description || attractionData.DescriptionDetail}
              </p>
              <div className={style.bottom}>
                <div className={style.left}>
                  <p>
                    <ClockIcon />
                    <span>
                      營業時間：{attractionData.OpenTime || "請洽相關單位"}
                    </span>
                  </p>
                  <p>
                    <TagIcon />
                    <span>
                      票價：{attractionData.TicketInfo || "請洽相關單位"}
                    </span>
                  </p>
                </div>
                <div className={style.right}>
                  <Link
                    className={style.more}
                    to={`/${attractionData.type.toLowerCase()}/${
                      attractionData.ID
                    }`}
                  >
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
        to={`/${attractionData.type.toLowerCase()}/${attractionData.ID}`}
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
