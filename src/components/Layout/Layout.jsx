
import Header from '../Header/Header';
import Home from '../Home/Home';
import OurServices from './../OurServices/OurServices';
import Portfolio from './../Portfolio/Portfolio';
import WorkProces from './../WorkProces/WorkProces';
import OurTeam from './../OurTeam/OurTeam';
import Contact from './../Contact/Contact';
import Brand from '../Brand/Brand';
import Footer from '../Footer/Footer';
import { useRef } from 'react';

const Layout = () => {
    const Ref =useRef()
    const scroll = ()=>{
        Ref.current.scrollIntoView({behavior:'smooth'})
        
    }
    return (
        <div>
            <Header scroll={scroll}></Header>
            <Home></Home>
            <Brand></Brand>
            <OurServices></OurServices>
            <Portfolio Ref={Ref}></Portfolio>
            <WorkProces></WorkProces>
            <OurTeam></OurTeam>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Layout;