import React from "react";
import style from "./navStyle.module.scss";
export default function Nav() {
  return (
    <div className={`${style.nav} `}>
      <div className={`${style.brand} `}>
        <img className={style.logo} src={"/Image/virus.png"} alt='Logo' />
        <span> Covtracker</span>
      </div>
    </div>
  );
}
