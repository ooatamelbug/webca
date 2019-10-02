import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './navbar';

function Header() {
  return (
   <header className="header_area animated">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-12 col-lg-10">
                    <Nav/>
                </div>
                <div className="col-12 col-lg-2">
                    <div className="sing-up-button d-none d-lg-block">
                        <NavLink to="/">Sign Up Free</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;
