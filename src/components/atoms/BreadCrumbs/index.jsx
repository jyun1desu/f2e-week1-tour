import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as NextIcon } from "images/icon/next-arrow.svg";

import style from "./index.module.scss";

const BreadCrumbs = ({ className, crumbs = [] }) => {
  return (
    <div className={classnames(style.breadCrumbs, className)}>
      <Link className={style.link} to="/">
        首頁
      </Link>
      <NextIcon className={style.icon} />
      {crumbs.map((c, index) => {
        const lastChild = index === crumbs.length - 1;

        if (!c.path) {
          return (
            <React.Fragment key={c.path + c.label}>
              <span lassName={style.nolink}>{c.label}</span>
              {!lastChild && <NextIcon className={style.icon} />}
            </React.Fragment>
          );
        }

        return (
          <React.Fragment key={c.path + c.label}>
            <Link className={style.link} to={c.path}>
              {c.label}
            </Link>
            {!lastChild && <NextIcon className={style.icon} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
