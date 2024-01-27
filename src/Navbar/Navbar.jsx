import '../scss/Navbar.scss'
import Searchbar from './Searchbar'
import Options from './Options'
import Logo from '../images/Logo.jpg'
import {useRef} from 'react'
export default function Navbar(){
    const navbar = useRef(null);
    return(
        <nav className="navbar sticky" ref={navbar}>
           <div className='logo-container'>
            <img src={Logo} alt="logo" />
           </div>
           <Searchbar/>
           <div className='rest-options-cont'>
              <Options/>
           </div>
        </nav>
    )
}