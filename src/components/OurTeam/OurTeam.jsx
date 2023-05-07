
import './OurTeam.css';

const OurTeam = () => {
    return (
        <>
        <div className="our-team">
            <div className="container">
            <div className="our-team-title-box m-auto">
                        <h2 className='our-team-title text-center'>Meet Our Team</h2>
                        <p className='our-team-desc text-center'>At IT-plus24, we pride ourselves on delivering high-quality products that exceed our clients' expectations. Our team of experts has a deep understanding of the latest technology and industry trends, allowing us to create custom solutions that meet your unique business needs. Explore our portfolio and discover how our products can help you take your business to the next level</p>

            </div>
            <div className="row m-auto justify-content-center">
                <div className="col-lg-3">
                    <div className="member-id-box text-center">
                        <img className='member-img ' src="/images/member01.png" alt="Team Member" />
                        <h5 className='text-center member-name'>Mohammad Mustafa</h5>
                        <p className='text-center position'>Co-founder & software engineer </p>
                        <div className="social-link text-center">
                            <img className='social-icon' src="/images/icon/linkden.png" alt="" />
                            <img className='social-icon' src="/images/icon/insta.png" alt="" />
                            <img className='social-icon' src="/images/icon/twitter.png" alt="" />
                            <img className='social-icon' src="/images/icon/fb.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="member-id-box text-center">
                        <img className='member-img ' src="/images/member02.png" alt="Team Member" />
                        <h5 className='text-center member-name'>Mohammad Mustafa</h5>
                        <p className='text-center position'>Co-founder & software engineer </p>
                        <div className="social-link text-center">
                            <img className='social-icon' src="/images/icon/linkden.png" alt="" />
                            <img className='social-icon' src="/images/icon/insta.png" alt="" />
                            <img className='social-icon' src="/images/icon/twitter.png" alt="" />
                            <img className='social-icon' src="/images/icon/fb.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="member-id-box text-center">
                        <img className='member-img ' src="/images/member03.png" alt="Team Member" />
                        <h5 className='text-center member-name'>Mohammad Mustafa</h5>
                        <p className='text-center position'>Co-founder & software engineer </p>
                        <div className="social-link text-center">
                            <img className='social-icon' src="/images/icon/linkden.png" alt="" />
                            <img className='social-icon' src="/images/icon/insta.png" alt="" />
                            <img className='social-icon' src="/images/icon/twitter.png" alt="" />
                            <img className='social-icon' src="/images/icon/fb.png" alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
        </>
    );
};

export default OurTeam;