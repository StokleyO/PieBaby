import React from "react";
import "../styles.css";
import "../blog.css";

export function Posts(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h5>
        {props.description}, {props.date}
      </h5>
      <div class="fakeimg" style={props.height}>
      <img src={props.img} height="400px" />
      </div>
      <p>{props.text}</p>
    </div>
  );
}
