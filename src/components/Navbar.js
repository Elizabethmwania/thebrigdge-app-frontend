import React from 'react';
// import { Link } from 'react-router-dom';

function Navbar (){
    return(
    <div className='full_bg'>   
    <header className="header-area">
      <div className="container-fluid">
        <div className="row d_flex">
          <div className=" col-md-3 col-sm-3">
            <div className="logo">
              Phalanx
            </div>
          </div>
          <div className="col-md-7 col-sm-9">
            <div className="navbar-area">
              <nav className="site-navbar">
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Testimonial</li>
                  <li>Contact Us</li>
                </ul>
                <button className="nav-toggler">
                  <span></span>
                </button>
              </nav>
            </div>
          </div>
        
        </div>
      </div>
    </header>
    <div id="banner1" className="carousel slide slider_main">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="carousel-caption relative">
              <div Name="row d_flex">
                <div Name="col-md-9">
                  <div className="creative">
                    <h1>FItness Club</h1>
                    <p>variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which don't look even slightly believable. If
                      you are</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}
export default Navbar;