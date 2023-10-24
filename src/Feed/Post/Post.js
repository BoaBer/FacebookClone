import React from "react";
import "./Post.css";

export default function Post({ profilePic, image, username, message, date }) {
  return (
    <div className="post">
      <div className="post__top">
        <img src={profilePic} alt={username} />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{date}</p>
          {/* <p>{new Date(Date.now()).toLocaleString()}</p> */}
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img className="postImage" src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ion-icon name="thumbs-up"></ion-icon>
          <p>Like</p>
        </div>
        <div className="post__option">
          <ion-icon name="chatbox-outline"></ion-icon>
          <p>Comment</p>
        </div>
        <div className="post__option">
          <ion-icon name="share-outline"></ion-icon>
          <p>Share</p>
        </div>
        <div className="post__option">
          <ion-icon name="person-circle"></ion-icon>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
