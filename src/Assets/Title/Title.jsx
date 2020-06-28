import React from "react";
import style from "./title.module.scss";
export default function Title(props) {
  return (
    <div className={`${style.Title} row container-fluid `}>
      <div className='col ml-3'>
        <span> {props.Title} </span>
      </div>
      <div className='col text-right'>
        {props.date && (
          <span className={style.tags}>
            Last Update:<b> {new Date(props.date).toDateString()}</b>
          </span>
        )}
      </div>
    </div>
  );
}
