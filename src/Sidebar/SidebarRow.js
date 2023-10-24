import "./SidebarRow.css";
import React from "react";

export default function SidebarRow({ src, icon, children }) {
  return (
    <div className="sidebarRow">
      {src && <img src={src} alt="User" />}
      {icon && <ion-icon name={icon}></ion-icon>}
      <h4>{children}</h4>
    </div>
  );
}
