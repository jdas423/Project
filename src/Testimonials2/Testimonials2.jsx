import "../scss/Testimonials2.scss"
import Comment from "../icons/Testimonials-2/Comment"
import Mic from "../icons/Testimonials-2/Mic"
import Play from "../icons/Testimonials-2/Play"
import Progress from "../icons/Testimonials-2/Progress"
import ProfileImg from "../images/Profile.png"
export default function Testimonials2() {
   return(
    
    <div className="testimonials-2">
       <div className="testimonials-2-ins">
           <div className="top-cont-2-1">
              <div className="top-cont-2-2">
                 <div className="icon-heading">
                    <div className="icon"><Comment/></div>
                    <div className="heading">Testimonials</div>
                 </div>
                 <div className="body">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</div>
                 <div className="audio-clip">
                     <Audio Mic={<Mic/>} Play={<Play/>} Progress={<Progress/>}/>
                     <div className="profile">
                        <div className="profile-img-wrap">
                           <div><img src={ProfileImg} alt="profile"/></div>
                        </div>
                        <div className="details">
                           <div className="name">Shubha Nagarajan</div>
                           <div className="profession">Classical Dancer</div>
                        </div>
                     </div>
                 </div>
              </div>
           </div>
       </div>
    </div>
   )
}


function Audio({Mic,Play,Progress}) {
   return(
     <div className="audio-cont">
      <div className="play">
         <div>
            {Play}
         </div>
      </div>
      <div className="progress">
         {Progress}  
      </div>
      <div className="number">0:00</div>
      <div className="profile">
         <div>
            <img src={ProfileImg} alt="profileimg" />
            <div className="mic">{Mic}</div>
         </div>
      </div>
     </div>
   )

}