import './Method.css';

const Method = ({ Ref }) => {
    return (
        <div ref={Ref} className='method-section'>

            <div className=' container'>
                <div className="method-title-box m-auto">
                    <h2 className='method-title text-center'>Our Method</h2>
                    <p className='method-desc text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
                <div className="col-lg-6 mt-30 ml-30 method-box">
                    <h3>We receive the wishes and
                        requirements</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="col-lg-6 mt-30 ml-130 method-box">

                    <h3>We inventory the projectand analyze</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="col-lg-6 mt-30 ml-230 method-box">
                    <h3>A first mockup/wireframe
                        has been created</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="col-lg-6 mt-30  ml-330 method-box">
                    <h3>All process and function
                        are implements</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="col-lg-6 mt-30  ml-400 method-box">
                    <h3>All process and function
                        are implements</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, </p>
                </div>
            </div>
        </div>
    );
};

export default Method;