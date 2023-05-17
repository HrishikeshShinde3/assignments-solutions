import navStyle from './navbar.module.css'
import { FaHome, FaInfo, FaUserPlus, FaSignInAlt, FaPhone } from 'react-icons/fa';
import { useNavigate,Link } from 'react-router-dom';
export default function Navbar () {

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

     
    const navOption = [
        <a >
            <FaHome onClick={handleHomepg}/> Home
          </a>
        ,
        <a >
            <FaInfo onClick={handleAboutpg}/> About
          </a>,
        
       
          <a >
            <FaUserPlus onClick={handleRegisterpg}/> Register
          </a>,
      
       
          <a >
            <FaSignInAlt onClick={handleLogin} /> Login
          </a>,
       
       
          
    ]
    return(
      <>
        <nav className={navStyle.navBar}>
            {
                navOption.map(page => (
                    <p key={page}>{page}</p>
                ))
            }
      
        </nav>


        </>
    )
}