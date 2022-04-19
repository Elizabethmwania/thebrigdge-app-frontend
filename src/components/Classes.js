// import react from "react";
import image1 from '../assets/images/cho3.3.png';
import image2 from '../assets/images/cho3.png';
function Classes () {
    return(
    <div className="classes">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="titlepage text_align_center">
            <h2>Our Classes</h2>
          </div>
        </div>
      </div>

        <div className="row">
        <div className="col-md-12">
          <div className="white_bg">
            <div className="row">
              <div className="col-md-4">
                <div id="ho_heal" className="our_class text_align_center">
                  <i className="d_no"><img src={image1} alt="#" /></i>
                  <i className="d_bo"><img src={image2} alt="#" /></i>
                  <h3>Progression</h3>
                  <p>There are many variations </p>
                  Read More
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
export default Classes;