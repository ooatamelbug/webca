import React from 'react';

function Cool() {
  return (
    <section className="cool_facts_area clearfix">
    <div className="container">
        <div className="row">
            {/* <!-- Single Cool Fact--> */}
            <div className="col-12 col-md-3 col-lg-3">
                <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.2s">
                    <div className="counter-area">
                        <h3><span className="counter">90</span></h3>
                    </div>
                    <div className="cool-facts-content">
                        <i className="ion-arrow-down-a"></i>
                        <p>APP <br/> DOWNLOADS</p>
                    </div>
                </div>
            </div>
            {/* <!-- Single Cool Fact--> */}
            <div className="col-12 col-md-3 col-lg-3">
                <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                    <div className="counter-area">
                        <h3><span className="counter">120</span></h3>
                    </div>
                    <div className="cool-facts-content">
                        <i className="ion-happy-outline"></i>
                        <p>Happy <br/> Clients</p>
                    </div>
                </div>
            </div>
            {/* <!-- Single Cool Fact--> */}
            <div className="col-12 col-md-3 col-lg-3">
                <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.6s">
                    <div className="counter-area">
                        <h3><span className="counter">40</span></h3>
                    </div>
                    <div className="cool-facts-content">
                        <i className="ion-person"></i>
                        <p>ACTIVE <br/>ACCOUNTS</p>
                    </div>
                </div>
            </div>
            {/* <!-- Single Cool Fact--> */}
            <div className="col-12 col-md-3 col-lg-3">
                <div className="single-cool-fact d-flex justify-content-center wow fadeInUp" data-wow-delay="0.8s">
                    <div className="counter-area">
                        <h3><span className="counter">10</span></h3>
                    </div>
                    <div className="cool-facts-content">
                        <i className="ion-ios-star-outline"></i>
                        <p>TOTAL <br/>APP RATES</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
// <!-- ***** Cool Facts Area End ***** -->

  );
}

export default Cool;
