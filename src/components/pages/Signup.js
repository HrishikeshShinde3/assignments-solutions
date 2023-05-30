import React from 'react'
import './SignupPage.css'
import {useNavigate} from 'react-router-dom';


export default function SignUp() {

  const navigate = useNavigate();
  function createAccount(e){
    e.preventDefault();
    navigate('/createAccount')
}



  return (
    <div className='upper-container'>
        <div className='main-container'>
         <img src='https://img.freepik.com/free-icon/twitter_318-674515.jpg' />
         <h2>Join Twitter today</h2>
         <img />
         <button className='googleButton'><img className='googleLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png'/> <h4>Sign up with Google</h4></button>

         <button  className='appleButton'><img src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' className='appleLogo'/><h4>Sign up with Apple</h4></button>
         <h4>or</h4>
         <button  className='accountButton' onClick={createAccount}><h4>Create account</h4></button>
         <p>By signing up, you agree to the <a>Terms of Service</a> and <a>Privacy Policy</a>, including <a>Cookie Use.</a></p>
         <h4 className='h4'>Have an account already? <a>Log in</a></h4>
       </div>
    </div>
  )
}
