import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src={
          "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
        }
      >
        Avatar
      </SidebarRow>
      <SidebarRow icon="information-circle-outline">COVID-19</SidebarRow>
      <SidebarRow icon="flag-outline">Pages</SidebarRow>
      <SidebarRow icon="people-outline">Friends</SidebarRow>
      <SidebarRow icon="chatbox-ellipses-outline">Messenger</SidebarRow>
      <SidebarRow icon="cart-outline">Marketplace</SidebarRow>
      <SidebarRow icon="film-outline">Videos</SidebarRow>
      <SidebarRow icon="chevron-down-outline">Marketplace</SidebarRow>
    </div>
  );
}
