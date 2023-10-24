import "./Header.css";
import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/240px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook logo"
        />
        <div className="header__input">
          <ion-icon name="search-outline"></ion-icon>
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option active">
          <ion-icon name="home"></ion-icon>
        </div>
        <div className="header__option">
          <ion-icon name="flag"></ion-icon>
        </div>
        <div className="header__option">
          <ion-icon name="film-outline"></ion-icon>
        </div>
        <div className="header__option">
          <ion-icon name="cart-outline"></ion-icon>
        </div>
        <div className="header__option">
          <ion-icon name="people-circle"></ion-icon>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
            alt="User"
          />
          <h4>Avatar</h4>
        </div>
        <ion-icon name="add-outline"></ion-icon>
        <ion-icon name="chatbubbles"></ion-icon>
        <ion-icon name="notifications"></ion-icon>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
    </div>
  );
}
