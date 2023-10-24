import "./Story.css";
import React from "react";

export default function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <img src={profileSrc} alt="" />
      <h4>{title}</h4>
    </div>
  );
}
