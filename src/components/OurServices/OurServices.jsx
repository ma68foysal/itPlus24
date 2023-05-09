import './Services.css'
import icon1 from '../../assets/icon/Icons01.png'
import icon2 from '../../assets/icon/Icons02.png'
import icon3 from '../../assets/icon/Icons03.png'
import icon4 from '../../assets/icon/Icons04.png'
import icon5 from '../../assets/icon/Icons05.png'

const OurServices = ({service}) => {
    return (
        <>
            <div ref={service} className="service  mt-100">
                <div className="container">
                    <div className="title-box m-auto">
                        <h2 className='title text-center'>Our Best Service</h2>
                        <p className='desc text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

                    </div>
                    <div className="row  ">
                        <div className=' mobile-align d-flex justify-content-between align-items-center pt-100'>
                            <div className="col-lg-3 mb-md-20 col-8 col-md-5 mr-m-20 service-box service-befor ">
                                <div className="service-content justify-content-center align-items-center d-flex">
                                    <div className="icon-box">
                                        <img className="icon" src={icon1} alt="icon" />
                                    </div>
                                    <div className="service-text p-10">
                                        <h4 className='service-title'>Web Ontwikkeling</h4>
                                        <p className='service-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,   </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mb-md-20 col-8 col-md-5 service-box">
                                <div className="service-content justify-content-center align-items-center d-flex">
                                    <div className="icon-box">
                                        <img className="icon" src={icon2} alt="icon" />
                                    </div>
                                    <div className="service-text p-10">
                                        <h4 className='service-title'>apps Ontwikkeling</h4>
                                        <p className='service-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3  m-midle-align col-8 col-md-6 service-box service-befor-line">
                                <div className="service-content justify-content-center align-items-center d-flex">
                                    <div className="icon-box">
                                        <img className="icon" src={icon3} alt="icon" />
                                    </div>
                                    <div className="service-text p-10">
                                        <h4 className='service-title'>api integratie</h4>
                                        <p className='service-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="row  ">
                        <div className=' mobile-align d-flex justify-content-between align-items-center mt-m-20 pt-m-0 pt-100'>
                            <div className="col-lg-3 col-md-5 col-8 mr-140  service-box service-before-after ">
                                <div className="service-content justify-content-center align-items-center d-flex">
                                    <div className="icon-box">
                                        <img className="icon" src={icon4} alt="icon" />
                                    </div>
                                    <div className="service-text p-10">
                                        <h4 className='service-title'>creative design</h4>
                                        <p className='service-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,  </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-8 ml-20 service-before-after-line service-box">
                                <div className="service-content justify-content-center align-items-center d-flex">
                                    <div className="icon-box">
                                        <img className="icon" src={icon5} alt="icon" />
                                    </div>
                                    <div className="service-text p-10">
                                        <h4 className='service-title'>hosting system</h4>
                                        <p className='service-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>



                    </div>
                </div>
            </div>
        </>
    );
};

export default OurServices;