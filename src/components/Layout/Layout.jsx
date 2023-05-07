
import Header from '../Header/Header';
import Home from '../Home/Home';
import OurServices from './../OurServices/OurServices';
import Portfolio from '../Portfolio/Portfolio'
import OurTeam from './../OurTeam/OurTeam';
import Footer from '../Footer/Footer';
import { useRef } from 'react';
import Method from '../Method/Method';

const Layout = () => {
    const Ref =useRef()
    const scroll = ()=>{
        Ref.current.scrollIntoView({behavior:'smooth'})
        
    }
    return (
        <div>
            <Header scroll={scroll}/>
            <Home/>
            <OurServices/>
            <Method Ref={Ref}/>
            <Portfolio/>
            <OurTeam/>
            <Footer/>
        </div>
    );
};

export default Layout;