import React from "react";
import style from "./index.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>Taiwan Tourguide ©</p>
      <p className={style.job}>
        <span>design</span>
        <a href="google.com">hsing</a>
      </p>
      <p className={style.job}>
        <span>, code</span>
        <a href="google.com">jyunyi</a>
      </p>
    </footer>
  );
}

export default Footer;
