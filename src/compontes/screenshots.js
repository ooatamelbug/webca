import React from 'react';

function Screenshots() {
  return (
    // -- ***** App Screenshots Area Start ***** -->
    <section className="app-screenshots-area bg-white section_padding_0_100 clearfix" id="screenshot">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    {/* <!-- Heading Text  --> */}
                    <div className="section-heading">
                        <h2>App Screenshots</h2>
                        <div className="line-shape"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    {/* <!-- App Screenshots Slides  --> */}
                    <div className="app_screenshots_slides owl-carousel">
                        <div className="single-shot">
                            <img src="img/scr-img/app-1.jpg" alt=""/>
                        </div>
                        <div className="single-shot">
                            <img src="img/scr-img/app-2.jpg" alt=""/>
                        </div>
                        <div className="single-shot">
                            <img src="img/scr-img/app-3.jpg" alt=""/>
                        </div>
                        <div className="single-shot">
                            <img src="img/scr-img/app-4.jpg" alt=""/>
                        </div>
                        <div className="single-shot">
                            <img src="img/scr-img/app-5.jpg" alt=""/>
                        </div>
                        <div className="single-shot">
                            <img src="img/scr-img/app-3.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default Screenshots;
