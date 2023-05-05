import './Header.css'

import barger from '../../assets/image/barger.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {CiMenuBurger} from 'react-icons/ci'
import {AiOutlineClose} from 'react-icons/ai'


const Header = ({scroll}) => {
    const [openMenu , setOpenMenu]=useState(false)
    const hndleToggle = ()=>{
        setOpenMenu(!openMenu)

    }
    console.log(openMenu);

    return (
        <nav className='navbar'>
            <div>
                <img className="logo" src='/LOGO-PNG.png' alt="brand" />
            </div>
           { openMenu === false ?<CiMenuBurger onClick={hndleToggle} className='barger-icon'/>:
            <AiOutlineClose className='barger-icon' onClick={hndleToggle}/>}
           
            <div className={openMenu === true ?'menu-mobile':'menu'}>
                <Link className={openMenu === true ?'menu-link-mobile':'menu-link'} to="/">Home</Link>
                <Link className={openMenu === true ?'menu-link-mobile':'menu-link'} to="/portfolio" onClick={scroll}>Portfolio</Link>
                <Link className={openMenu === true ?'menu-link-mobile':'menu-link' } to='/ourTeam' >Our Team</Link>
            </div>
            
            <div className='contact-btn-link'>
            <a className='contact-link' href="#">Contact Us</a>
            <svg className='contact-arrow-icon' width="18" height="14" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.59375 12.1147C0.59375 11.4819 1.06401 10.9589 1.67413 10.8761L1.84375 10.8647L26.8438 10.8647C27.5341 10.8647 28.0938 11.4243 28.0938 12.1147C28.0938 12.7475 27.6235 13.2705 27.0134 13.3533L26.8438 13.3647L1.84375 13.3647C1.15339 13.3647 0.59375 12.805 0.59375 12.1147Z" fill="#0ACBFF"/>
            <path d="M15.8758 2.95951C15.3866 2.47241 15.3849 1.68095 15.872 1.19175C16.3148 0.747015 17.0092 0.705177 17.4993 1.06721L17.6398 1.18794L27.7231 11.2279C28.1692 11.6721 28.2098 12.3689 27.8448 12.8591L27.7232 12.9994L17.6399 23.0411C17.1507 23.5283 16.3592 23.5266 15.8721 23.0374C15.4292 22.5928 15.3903 21.8982 15.7544 21.4096L15.8758 21.2697L25.0691 12.1132L15.8758 2.95951Z" fill="#0ACBFF"/>
            </svg>
            </div>
        </nav>
    );
};

export default Header;