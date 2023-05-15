import styles from './option-list.module.css'
import { FaHome, FaInfo, FaUserPlus, FaSignInAlt, FaPhone } from 'react-icons/fa';
// RxCrossCircled
import { RxCrossCircled } from "react-icons/rx";


export default function NavMobile ({closeFunction}) {
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
            <FaHome /> Home
          </a>
        
          </li>
          <li>
          <a >
            <FaInfo /> About
          </a>
          </li>
         <li>
          <a >
            <FaUserPlus /> Register
          </a>
          </li>
          <li>
          <a >
            <FaSignInAlt /> Login
          </a>
          </li>
          <li>
          <a >
            <FaPhone /> Contact Us
          </a>
          </li>
          </div>
          
      
         </nav>
  
            </div>

        </div>

        </>
    )
}