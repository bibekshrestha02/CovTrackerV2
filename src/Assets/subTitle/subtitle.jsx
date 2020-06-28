import React from "react";

export default function subtitle(props) {
  return (
    <div
      className='text-left p-3 '
      style={{ fontWeight: "500", fontSize: "20px", color: "#2c3335" }}>
      <span>{props.Title}</span>
      {props.line && <hr />}
    </div>
  );
}
