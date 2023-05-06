
import Header from '../Header/Header';
import Home from '../Home/Home';
import OurServices from './../OurServices/OurServices';
import WorkProces from './../WorkProces/WorkProces';
import OurTeam from './../OurTeam/OurTeam';
import Footer from '../Footer/Footer';
import { useRef } from 'react';
import Method from '../Portfolio/Method';

const Layout = () => {
    const Ref =useRef()
    const scroll = ()=>{
        Ref.current.scrollIntoView({behavior:'smooth'})
        
    }
    return (
        <div>
            <Header scroll={scroll}></Header>
            <Home></Home>
            <OurServices></OurServices>
            <Method Ref={Ref}/>
            <WorkProces></WorkProces>
            <OurTeam></OurTeam>
            <Footer></Footer>
        </div>
    );
};

export default Layout;