import './Portfolio.css';

const Portfolio = ({pro}) => {
    return (
        <>
        <div ref={pro} className="Portfolio">
            <div className="container">
            <div className="portfolio-title-box m-auto">
                    <h2 className='portfolio-title text-center'>Portfolio</h2>
                    <p className='portfolio-desc text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-12 " >
                        <div className="portfol-content-one m-mt-30">
                            <div className="overlay-one">
                            <h3 className='cart-title'>Web Developement</h3>
                            <p className='cart-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 ">
                        <div className="portfol-content-two m-mt-30">
                        <div className="overlay-two">
                            <h3 className='cart-title'>Web Developement</h3>
                            <p className='cart-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 ">
                        <div className="portfol-content-thre m-mt-30">
                        <div className="overlay-thre">
                            <h3 className='cart-title'>Web Developement</h3>
                            <p className='cart-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 ">
                        <div className="portfol-content-four mt-30">
                        <div className="overlay-four">
                            <h3 className='cart-title'>App Developement</h3>
                            <p className='cart-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 ">
                        <div className="portfol-content-five mt-30">
                        <div className="overlay-five">
                            <h3 className='cart-title'>App Developement</h3>
                            <p className='cart-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 ">
                        <div className="portfol-content-six mt-30">
                        <div className="overlay-six">
                            <h3 className='cart-title'>App Developement</h3>
                            <p className='cart-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
};

export default Portfolio;