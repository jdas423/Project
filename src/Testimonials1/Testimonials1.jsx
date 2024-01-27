import { Component } from "../Feature1/Feature1"
import Add from "../icons/Testimonials-1/Add"
import "../scss/Testimonials1.scss"
export default function Testimonials1() {
   return(
    <div className="testimonials-1">
       <div className="testimonials-1-ins">
        <Component Icon={<Add/>} heading={"Add your own"} 
        bodyText={"Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page"}
         btnText={"Add new"} />
       </div>
    </div>
   )
}