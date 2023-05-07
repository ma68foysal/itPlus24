
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <div className='container footer '>
            <div className='row'>
                <div className='col-lg-6 footer-content'>
                    <img className='footer-logo' src='/LOGO-PNG.png' alt="" />
                    <p className='footer-descriptin mt-20'>IT-plus24 is an experienced IT service provider that focuses on various industries and serves customers ranging from small to large companies. Our expertise includes designing, building and maintaining IT environments.</p>
                </div>
                <div className='col-lg-6 footer-content'>
                        <h2 className='footer-contact-head'>Contact</h2>
                        <h3 className='footer-contact-title mt-20'>Address</h3>
                        <p className='footer-contact-des'>IJplein 420 1021 LW Amsterdam</p>
                        <h3 className='footer-contact-title'>phone</h3>
                        <p className='footer-contact-des'>+31 85 060 4608</p>
                        <h3 className='footer-contact-title'>E-mail</h3>
                        <p className='footer-contact-des'>info@it-plus24.com</p>
                    </div>
                    
                
                
            </div>
            
        </div>
        <div className="container-fluid p-0">
        <div className="copy-right text-center">
                <p className='copy-right-text'>© 2021 - 2023 All Copyright Reserved by It-plus 24.com</p>
            </div>
        </div>
        </>
    );
};

export default Footer;