
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
    const home =useRef()
    const service =useRef()
    const pro =useRef()
    const team =useRef()

    const scroll = ()=>{
        Ref.current.scrollIntoView({behavior:'smooth'})
        
    }
    const Homes = ()=>{
         home?.current.scrollIntoView({behavior:'smooth'})

        
    }
    const Service = ()=>{
         service.current.scrollIntoView({behavior:'smooth'})
        
    }
    const Pro = ()=>{
         pro.current.scrollIntoView({behavior:'smooth'})
        
    }
    const  Team = ()=>{
         team.current.scrollIntoView({behavior:'smooth'})
        
    }
    return (
        <div>
            <Header scroll={scroll} Homes={Homes} Service={Service} Pro={Pro} Team={Team}/>
            <Home home={home} />
            <OurServices service={service}/>
            <Method Ref={Ref}/>
            <Portfolio pro={pro}/>
            <OurTeam team={team}/>
            <Footer Homes={Homes} />
        </div>
    );
};

export default Layout;