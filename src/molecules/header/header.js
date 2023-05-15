import styles from './header.module.css'
import Navbar from '../../atoms/navbar/navbar'
import { HiMenuAlt1 } from "react-icons/hi";
import NavMobile from '../../atoms/option-list/option-list';
import { useState } from 'react';
// HiMenuAlt1

export default function Header () {

    const [isNavMobileVisible , setIsNavMobileVisible] = useState(false)

    function showList () {
        setIsNavMobileVisible(true)
    }
    function Closelist () {
        setIsNavMobileVisible(false)
    }

    function handListOpening () {
        setIsNavMobileVisible(!isNavMobileVisible)
    }

    if(isNavMobileVisible){
        return <NavMobile closeFunction = {Closelist}/>
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img 
                    src='https://cdn.pixabay.com/photo/2023/04/16/18/14/bird-7930857_1280.jpg'
                    height={100}
                    width={100}
                    style={{borderRadius : '50%'}}
                    
                    
                />
            </div>
            <div className={styles.navWrapper}>
                <Navbar/>
            </div>
            <div className={styles.iconWrapper}>
                <HiMenuAlt1 onClick={showList}/>
            </div>
        </header>
    )
}