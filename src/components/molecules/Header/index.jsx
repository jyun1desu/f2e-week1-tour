import React from "react";

import style from "./index.module.scss";

export default function index() {
  return (
    <header className={style.header}>
      <div className={style.brand}>
        <div className={style.logo} />
        <h1>台灣旅遊</h1>
      </div>
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
}
