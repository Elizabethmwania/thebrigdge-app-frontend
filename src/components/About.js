import React from 'react';
import about_image from '../assets/images/about_img.png'
function About (){
    return(
    <div className="about">
    <div className="container-fluid">
      <div className="row d_flex">
        <div className="col-md-5">
          <div className="titlepage text_align_left">
            <h2>About Us</h2>
            <p>variations of passages of Lorem Ipsum available, but the majority have sufferedvariations of passages of
              Lorem Ipsum available, but the majority have suffered</p>
              
            {/* <a className="read_more" href="about.html">Read More</a> */}
          </div>
        </div>
        <div className="col-md-7">
          <div className="about_img">
            <figure><img src={about_image} alt="#" /></figure>
          </div>
        </div>
      </div>
    </div>
  </div>

    )
}
export default About;