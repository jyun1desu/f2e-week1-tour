import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.brand}>
        <div className={style.logo} />
        <h1>臺灣旅遊</h1>
      </Link>
      <nav className={style.navigation}>
        <ul>
          <li>
            <a href="#">城市</a>
          </li>
          <li>
            <a href="#">美食</a>
          </li>
          <li>
            <a href="#">活動</a>
          </li>
          <li>
            <a href="#">住宿</a>
          </li>
          <li>
            <a href="#">地圖探索</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
