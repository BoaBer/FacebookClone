import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header.js";
import Sidebar from "./Sidebar/Sidebar.js";
import Feed from "./Feed/Feed.js";
import FriendsList from "./FriendsList/FriendsList";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  // BEM naming convention
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        <FriendsList style={width > 1130 ? {} : { display: "none" }} />
      </div>
    </div>
  );
}
