import React from "react";
import style from "./covidDetails.module.scss";

export default function DetailsCard(props) {
  let className;
  switch (props.className) {
    case 1:
      className = style.icon1;
      break;
    case 2:
      className = style.icon2;
      break;
    case 3:
      className = style.icon3;
      break;
    case 4:
      className = style.icon4;
      break;
    case 5:
      className = style.icon5;
      break;
    case 6:
      className = style.icon6;
      break;
    default:
      break;
  }
  return (
    <div className={`${style.icon} `}>
      <div className={`${className} `}>
        <i className={`fas fa-${props.iconName}`}></i>
      </div>
      <div className={`${style.text} `}>
        <h5>{props.Title}</h5>
        <span>{props.number}</span>
      </div>
    </div>
  );
}
