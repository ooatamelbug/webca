import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
        <div className="menu_area">
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to="#">Ca.</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="ca-navbar">
                    <ul className="navbar-nav ml-auto" id="nav">
                        <li className="nav-item active"><NavLink className="nav-link" to="#home">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="#about">About</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="#features">Features</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="#screenshot">Screenshot</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="#pricing">Pricing</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="#testimonials">Testimonials</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="#team">Team</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="#contact">Contact</NavLink></li>
                    </ul>
                    <div className="sing-up-button d-lg-none">
                        <NavLink to="#">Sign Up Free</NavLink>
                    </div>
                </div>
            </nav>
        </div>
  );
}

export default Nav;
