import React from "react";
// import { Link } from "react-router-dom";
// import logoDesktop from "../images/logo-desktop.png"
 import rectangleimg from "../images/re.jpg"
 import arrow from "../images/Frame-3.png"
// import Desktop from "../images/logo33.png";
const About = () => {
    return(
      <>
        <section className="container mt-5">
            <div className="d-lg-flex d-md-flex">
                <div className="co-lg-8 col-md-8 col-sm-12">
                  <div className="row">
                    <div className="co-lg-11 col-md-11 col-sm-12">
                     <p className="About_TC" >-About TekCorp</p>
                      <h3>TekCorp delivers comprehensive, efficient, and scalable technology solutions tailored to meet the unique needs your businesses.</h3>
                      <div className="d-lg-flex">
                       <p className="col-lg-8 col-md-8 col-sm-12">At TekCorp, we specialize in cutting-edge IT solutions that drive digital transformation. Our expertise spans across various domains. we empower organizations to achieve greater efficiency, security, and growth</p>
                       <button type="" class="btn btn-c col-lg-4 col-md-3 col-sm-12">Start Now <img src={arrow} alt="icon"/></button>
                      </div>

                      <img src={rectangleimg } alt="reimg" className="img-fluid w-100 mt-5"/>
                     </div>
                   </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                 <div className="row">
                  <div className="col-lg-12 bg-secondary rounded">
                     <div className="  py-3 card-three-row">
              
                        <h3>Our Ambition</h3>

                       <p class="borderrr-ttop"> To be recognized as a global leader in IT solutions, continuously pushing the boundaries of technology to create innovative, sustainable, and transformative digital experiences. We aim to set new standards in the IT industry, fostering a culture of excellence and creativity that inspires progress and growth.</p>
                      <div class="  borderrr d-flex justify-content-between  align-items-center mt-5 po-ab w-90"> 
                      <p className="text-c2-p">Get Started</p>
                      <p class="card-cir">
                         <i class="fa-solid fa-code"></i>
                      </p>
                     </div>
            </div>
                        </div>
                        <div className="col-lg-12 bg-secondary mt-4 rounded">
                     <div className="  py-3 card-three-row">
              
                        <h3>Our Ambition</h3>

                       <p class="borderrr-ttop"> To be recognized as a global leader in IT solutions, continuously pushing the boundaries of technology to create innovative, sustainable, and transformative digital experiences. We aim to set new standards in the IT industry, fostering a culture of excellence and creativity that inspires progress and growth.</p>
                      <div class="  borderrr d-flex justify-content-between  align-items-center mt-5 po-ab w-90"> 
                      <p className="text-c2-p">Get Started</p>
                      <p class="card-cir">
                         <i class="fa-solid fa-code"></i>
                      </p>
                     </div>
            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>
      </>
    );
}
export default About;
