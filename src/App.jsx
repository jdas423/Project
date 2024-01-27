import './scss/App.scss'
import Navbar from './Navbar/Navbar'
import Mainmenu from './mainmenu/Mainmenu'
import Feature1 from './Feature1/Feature1'
import Testimonials1 from './Testimonials1/Testimonials1'
export default function App(){
  return(
    <>
     <Navbar/>
     <Mainmenu/>
     <Feature1/>
     <Testimonials1/>
    </>
  )
}