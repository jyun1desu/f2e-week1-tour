import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

const navigatorLinks = [{ label: "探索城市", path: "city" }];

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/" className={style.brand}>
        <div className={style.logo} />
        <h1>臺灣旅遊</h1>
      </Link>
      <nav className={style.navigation}>
        <ul>
          {navigatorLinks.map((n) => (
            <li key={n.label}>
              <Link to={n.path}>{n.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;