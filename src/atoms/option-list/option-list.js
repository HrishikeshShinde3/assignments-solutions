import styles from './option-list.module.css'
import { FaHome, FaInfo, FaUserPlus, FaSignInAlt, FaPhone } from 'react-icons/fa';
// RxCrossCircled
import { RxCrossCircled } from "react-icons/rx";
import { useNavigate,Link } from 'react-router-dom';

export default function NavMobile ({closeFunction}) {
  const nevigate = useNavigate()
       function handleHomepg () 
       {
       nevigate('/Home')
       
      }

      function handleAboutpg () {
        nevigate('/Aboutus')
      }

      function handleRegisterpg () {
        nevigate('/register')
      }
      
      function handleLogin () {
        nevigate('/login')
      }


 
  
    return (
        <>
           <div className={styles.wrapper}>

            <div className={styles.iconHolder}>
                <RxCrossCircled 
                    className={styles.closeIcon}
                    onClick={closeFunction}
                />
            </div>
            <div>

            <nav>
     
          <div className='icons' >
            <li>
          <a >
            <FaHome onClick={handleHomepg}/> Home
          </a>
        
          </li>
          <li>
          <a >
            <FaInfo onClick={handleAboutpg}/> About
          </a>
          </li>
         <li>
          <a >
            <FaUserPlus  onClick={handleRegisterpg}/> Register
          </a>
          </li>
          <li>
          <a >
            <FaSignInAlt onClick={handleLogin}/> Login
          </a>
          </li>
          
          </div>
          
      
         </nav>
  
            </div>

        </div>

        </>
    )
}