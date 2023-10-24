import "./FriendsList.css";
import React from "react";

let list = [
  { name: "Chaim Harvey", isActive: false },
  { name: "Jacqueline Park", isActive: true },
  { name: "Coral Ball", isActive: true },
  { name: "Keelan Herrera", isActive: false },
  { name: "Neil Lindsey", isActive: true },
  { name: "Hazel Nash", isActive: false },
  { name: "Filip Brady", isActive: false },
  { name: "Bonnie Bates", isActive: false },
  { name: "Camilla Tanner", isActive: true },
  { name: "Cassandra Mccann", isActive: false },
  { name: "Zeeshan Mcguire", isActive: false },
  { name: "Maximilian Wise", isActive: true },
  { name: "Annabelle Newman", isActive: false },
  { name: "Erika Blake", isActive: false },
  { name: "Janice Molina", isActive: true },
  { name: "Jayson Welsh", isActive: false },
  { name: "Keyaan Vasquez", isActive: true },
  { name: "Tommy-Lee Bryan", isActive: false },
  { name: "Nellie Little", isActive: true },
  { name: "Saarah Brewer", isActive: true },
];

(function handleImages() {
  const images = "https://i.pravatar.cc/48";
  list = list.map((el) => ({
    ...el,
    image: `${images}?=${crypto.randomUUID()}`,
  }));
})();

export default function FriendsList({ style }) {
  return (
    <div className="friendsList" style={style}>
      <div className="friendsList__top">
        <p>Contacts</p>
        <div className="friendsList__topIcons">
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <ul className="friendsList__bottom">
        {list.map((person, i) => (
          <Friend
            key={i}
            name={`${person.name}`}
            image={person.image}
            isActive={person.isActive}
          />
        ))}
      </ul>
    </div>
  );
}

function Friend({ name, isActive, image }) {
  return (
    <li className="friend">
      <img src={image} alt={name} />
      <div className="icon">
        <ion-icon
          style={{ color: `${isActive ? "green" : "red"}` }}
          name={`radio-button-${isActive ? "on" : "off"}-outline`}
        ></ion-icon>
      </div>
      <h4>{name}</h4>
    </li>
  );
}
