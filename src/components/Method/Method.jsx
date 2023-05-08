import './Method.css';

const Method = ({ Ref }) => {
    return (
        <div ref={Ref} className='method-section'>

            <div className=' container'>
                <div className="method-title-box m-auto">
                    <h2 className='method-title text-center'>Our Method</h2>
                    <p className='method-desc text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
                <div className="col-lg-6 before-one mt-30 ml-30 method-box method-bg-one">
                    <h3>We receive the wishes and
                        requirements</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="col-lg-6 mt-30 before-two ml-160 method-box method-bg-two">

                    <h3>We inventory the projectand analyze</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="col-lg-6 mt-30 before-two ml-290 method-box method-bg-thre">
                    <h3>A first mockup/wireframe
                        has been created</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="col-lg-6 mt-30 before-two ml-425 method-box method-bg-four">
                    <h3>All process and function
                        are implements</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, </p>
                </div>
                <div className="col-lg-6 mt-30  ml-555 method-box method-bg-five">
                    <h3>All process and function
                        are implements</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, </p>
                </div>
            </div>
        </div>
    );
};

export default Method;