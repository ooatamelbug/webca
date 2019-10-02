import React from 'react';
import { NavLink } from 'react-router-dom';

function App() {
  return (
        // <!-- ***** Video Area Start ***** -->
        <div className="video-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* <!-- Video Area Start --> */}
                    <div className="video-area" style={{backgroundImage: 'url(img/bg-img/video.jpg)'}}>
                        <div className="video-play-btn">
                            <NavLink to="https://www.youtube.com/watch?v=f5BBJ4ySgpo" className="video_btn"><i className="fa fa-play" aria-hidden="true"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // <!--
  );
}

export default App;
