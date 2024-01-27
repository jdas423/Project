
import Polygon from "./Polygon"
import Staricon from "./Staricon"
export default function Hobbies(){
    return(
       <div style={{position:"relative",width:"24px",height:"24px",display:"flex",justifyContent:"center",alignItems:"center"}}>
       <Polygon style={{position:"absolute",top:"0px",left:"0px",zIndex:5,width:"100%",height:"100%"}}/>
       <Staricon style={{position:"absolute",top:"6px",left:"7px",zIndex:10}}/>
       </div>
    )
}