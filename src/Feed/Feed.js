import "./Feed.css";
import MessageSender from "./MessageSender/MessageSender";
import StoryReel from "./StoryReel/StoryReel.js";
import Post from "./Post/Post";
import { useState } from "react";

const posts = [
  {
    profilePic:
      "https://i.wpimg.pl/1200x/filerepo.grupawp.pl/api/v1/display/embed/c5d7fe38-904d-40f1-a085-b1b891eb1b54",
    message: "It is on!",
    date: "23.10.2023",
    username: "Sylvester Stallone",
    image: "https://fwcdn.pl/nph/867323/2018/13185_1.7.jpg",
  },
  {
    profilePic:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bruce_Lee_1973.jpg/180px-Bruce_Lee_1973.jpg",
    message: "I was the strongest 💪",
    date: "13.08.1960",
    username: "Bruce Lee",
    image:
      "https://cdn.kobo.com/book-images/403d015a-2324-412c-92fd-e91533432ec0/1200/1200/False/bruce-lee-the-celebrated-life-of-the-golden-dragon-1.jpg",
  },
  {
    profilePic:
      "https://bi.im-g.pl/im/99/d6/ff/z16766617AMP,Albert-Einstein.jpg",
    message: "I was the smartest 😎",
    date: "28.01.1900",
    username: "Albert Einstein",
    image:
      "https://static.wixstatic.com/media/1c61b7_63ae320f04ce4891a015461057b8bbb4~mv2.png/v1/fit/w_800%2Ch_400%2Cal_c%2Cq_80,enc_auto/file.jpg",
  },
];

export default function Feed() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender
        posts={posts}
        input={input}
        onSetInput={setInput}
        imageUrl={imageUrl}
        onSetImageUrl={setImageUrl}
      />

      {posts.map((el, i) => (
        <Post
          key={i}
          profilePic={el.profilePic}
          message={el.message}
          date={el.date}
          username={el.username}
          image={el.image}
        />
      ))}
    </div>
  );
}
