import ExploreIcon from "../icons/Navbar/Exploreicon";
import Expandarrow from "../icons/Navbar/Expandarrow";
import Hobbies from "../icons/Navbar/Hobbies";
import Bookmark from "../icons/Navbar/Bookmark";
import Notification from "../icons/Navbar/Notification";
import Cart from "../icons/Navbar/Cart";
import Button from "../Button";
import Search from "../icons/Navbar/Search";
import Hamburger from "../icons/Navbar/Hamburger";
import { useEffect, useRef, forwardRef } from "react";
export default function Options() {
  const explore = useRef(null);
  useEffect(() => {
    if(explore.current){
      explore.current.addEventListener("mouseover", (e) => {
        document.querySelector(".dropdown").classList.remove("dd-vis");
        document.querySelector(".options-arrow").style.transform = "rotate(180deg)";
      });

      explore.current.addEventListener("mouseout", () => {
        document.querySelector(".dropdown").classList.add("dd-vis");
        document.querySelector(".options-arrow").style.transform = "rotate(0deg)";
      });
    }
  },[explore])

  return (
    <div className="rest-options">
        <div className="box-wrap none">
           <Box Expandarrow={Expandarrow} Icon={ExploreIcon} text={"Explore"} dropdown={true} ref={explore} />
           <Box Expandarrow={Expandarrow} Icon={Hobbies} text={"Hobbies"} dropdown={false} />
        </div>
        <div className="icon-wrap">
          <Icons Icon={Search} s={"search"} />
          <Icons Icon={Bookmark} s={"bookmark"} />
          <Icons Icon={Notification} s={"notification"} />
          <Icons Icon={Cart} s={"cart"} />
          <Icons Icon={Hamburger} s={"hamburger"}/>
        </div>
       <div className="sign-in-wrap none-sm">
       <Button
        style={{
          width: "112px",
          height: "40px",
          color: "#8064A2",
          fontFamily: "Poppins",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "16px",
          cursor: "pointer",
        }}
        text={"Sign In"}
      />
       </div>
    </div>
  );
}

const Box=forwardRef(( {Expandarrow, Icon, text, dropdown },explore)=> {
  return (
    <div className={text + " options-cont"} style={{marginRight:"10px",position:"relative",padding:"10px 0px"}} ref={explore}>
      <div className="options-icon">
        <Icon />
      </div>
      <div className="options-text">{text}</div>
      <div className="options-arrow">
        <Expandarrow />
      </div>
      {
        dropdown && <ul className="dropdown dd-vis">
          <li>People - Community</li>
          <li>Places - Venues</li>
          <li>Programs - Events</li>
          <li>Products - Store</li>
          <li>Blog</li>
        </ul>
      }
    </div>
  );
})

function Icons({ Icon,s=0 }) {
  let str=''
  if(s === "bookmark" || s === "cart") str="options-icon none-sm"
  else if(s==="search") str="options-icon none-lg visible";
  else if(s==="hamburger") str="options-icon none-lg visible-sm";
  else str="options-icon";
  return (
    <div className={str} style={{marginLeft:"10px"}}>
      <Icon />
    </div>
  );
}
