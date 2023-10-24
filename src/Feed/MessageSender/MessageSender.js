import "./MessageSender.css";
import React from "react";

export default function MessageSender({
  input,
  onSetInput,
  imageUrl,
  onSetImageUrl,
  posts,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    posts.unshift({
      profilePic:
        "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&amp;resize=1200:*",
      message: input,
      date: new Date(Date.now()).toLocaleString(),
      username: "Avatar",
      image: imageUrl,
    });
    onSetInput("");
    onSetImageUrl("");
  }

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
          alt="User"
        />
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="messageSender__input"
            type="text"
            placeholder="What's on your mind?"
            value={input}
            onChange={(e) => onSetInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image/URL (Optional)"
            value={imageUrl}
            onChange={(e) => onSetImageUrl(e.target.value)}
          />
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <ion-icon name="videocam" style={{ color: "red" }}></ion-icon>
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <ion-icon name="images" style={{ color: "green" }}></ion-icon>
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <ion-icon name="happy-outline" style={{ color: "orange" }}></ion-icon>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}
