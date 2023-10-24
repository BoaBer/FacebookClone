import "./StoryReel.css";
import Story from "./Story.js";

export default function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://fwcdn.pl/nph/867323/2018/13185_1.7.jpg"
        profileSrc="https://i.wpimg.pl/1200x/filerepo.grupawp.pl/api/v1/display/embed/c5d7fe38-904d-40f1-a085-b1b891eb1b54"
        title="Sylvester Stallone"
      />
      <Story
        image="https://m.media-amazon.com/images/I/91JHs7saHYL._AC_UF1000,1000_QL80_.jpg"
        profileSrc="https://deadline.com/wp-content/uploads/2021/08/MC10_1007-17-16-Elim_0305.jpg"
        title="Gordon Ramsay"
      />
      <Story
        image="https://cdn.kobo.com/book-images/403d015a-2324-412c-92fd-e91533432ec0/1200/1200/False/bruce-lee-the-celebrated-life-of-the-golden-dragon-1.jpg"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bruce_Lee_1973.jpg/180px-Bruce_Lee_1973.jpg"
        title="Bruce Lee"
      />
      <Story
        image="https://c.ndtvimg.com/2021-09/bm0ehlrc_abba_625x300_02_September_21.jpg"
        profileSrc="https://bi.im-g.pl/im/89/7c/1a/z27771273AMP,Abba-w-1974-r---tuz-po-wygraniu-szwedzkich-elimina.jpg"
        title="Abba"
      />
      <Story
        image="https://static.wixstatic.com/media/1c61b7_63ae320f04ce4891a015461057b8bbb4~mv2.png/v1/fit/w_800%2Ch_400%2Cal_c%2Cq_80,enc_auto/file.jpg"
        profileSrc="https://bi.im-g.pl/im/99/d6/ff/z16766617AMP,Albert-Einstein.jpg"
        title="Albert Einstein"
      />
    </div>
  );
}
