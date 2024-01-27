import Google from '../icons/Mainmenu/Google'
import Facebook from '../icons/Mainmenu/Facebook'
import EyeIcon from '../icons/Mainmenu/EyeIcon'
import LockIcon from '../icons/Mainmenu/LockIcon'
import { useState, useEffect } from 'react'
export default function Signin() {
    const [isSigninOpt,setSigninOpt]= useState(false)
    useEffect(()=>{
        if(isSigninOpt){
            document.querySelector(".sign-in").style.borderBottom="3px solid #8064A2"
            document.querySelector(".join-in").style.borderBottom="3px solid #ffffff"

        }else{
            document.querySelector(".join-in").style.borderBottom="3px solid #8064A2"
            document.querySelector(".sign-in").style.borderBottom="3px solid #ffffff"
        }
    },[isSigninOpt])
    return(
        <>
           <div className="sign-in-heading">
             <div className='sign-in' onClick={()=>{setSigninOpt(true)}}>
                 Sign In
             </div>
             <div className='join-in' onClick={()=>{setSigninOpt(false)}}>
                Join In
             </div>
            </div>
            <div className="login-wrap">
                 <div className="google-wrap">
                    <div className='g-icon'><Google/></div>
                    <div className='g-text'>Continue with Google</div>
                 </div>
                 <div className="fb-wrap">
                    <div className="fb-icon"><Facebook/></div>
                    <div className="fb-text">Continue with Facebook</div>
                 </div>
            </div>
            <div className="separator">
                <div className="separator-line"></div>
                <div className="separator-text">or connect with</div>
                <div className="separator-line"></div>
            </div>
            <div className='input-fields'>
                <div className="email-wrap">
                    <input type="email" placeholder='Email' />
                </div>
                <div className="pass-wrap">
                   <input type='password' placeholder='Password'/>
                   <div className='eye-icon'>
                      <EyeIcon/>
                   </div>
                </div>

                {isSigninOpt ?  <>
                    <div className="continue-wrap">
                    <div className="forgot-pass-wrap">
                        <div className="remember-me">
                            <input type="checkbox" id='remember'/>
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                        <div className='forgot-pass'>
                            <div>
                                <LockIcon/>
                            </div>
                            <div>
                                Forgot Password?
                            </div>
                        </div>
                    </div>
                    <div className="continue-btn">
                        <div>Continue</div>
                    </div>
                </div> 
                </>
                :
                <div className='join-in-wrap'>
                <div className='pass-strength'>Password Strength</div>
                   <div className='terms'>
                   By continuing, you agree to our Terms of Service and Privacy Policy.
                   </div>
                   <div className='continue-btn agree'>
                    Agree and Continue
                   </div>
                </div>   
                    }
            </div>
        </>
    )

}