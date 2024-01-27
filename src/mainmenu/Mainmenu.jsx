import '../scss/Mainmenu.scss';
import Menuicon from '../icons/Mainmenu/Menuicon';
import Signin from './Signin';
import SigninMobile from './SigninMobile';

export default function Mainmenu() {
   
   return(
      <menu className="main-menu">
        <div className="left">
            <div className='menu-desc-box'>
              <div>Explore your hobby or passion</div>
              <div>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.
               <span className='none'>
               Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
               </span> 
               </div>
              <div className='none-l'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</div>
            </div>
            {/* {
               window.innerWidth < 350 && <div className="right">
               <SigninMobile />
               </div>
            } */}
            <div  className='svg-cont'>
               <Menuicon/>
            </div>
        </div>
        {/* {window.innerWidth > 350 && <div className="right">
           <Signin />
        </div>} */}
        <div className="right">
           <Signin />
        </div>
        
      </menu>
   )
}