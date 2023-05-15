import navStyle from './navbar.module.css'
import { FaHome, FaInfo, FaUserPlus, FaSignInAlt, FaPhone } from 'react-icons/fa';

export default function Navbar () {

    const navOption = [
        <a >
            <FaHome /> Home
          </a>
        ,
        <a >
            <FaInfo /> About
          </a>,
        
       
          <a >
            <FaUserPlus /> Register
          </a>,
      
       
          <a >
            <FaSignInAlt /> Login
          </a>,
       
       
          <a >
            <FaPhone /> Contact Us
          </a>
    ]
    return(
        <nav className={navStyle.navBar}>
            {
                navOption.map(page => (
                    <p key={page}>{page}</p>
                ))
            }
            

        </nav>
    )
}