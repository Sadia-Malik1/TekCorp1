import React from "react";
// import { Link } from "react-router-dom";
// import logoDesktop from "../images/logo-desktop.png"
// import './HeaderTop.css';

import Desktop from "../images/logo33.png";
const Cards = () => {
    return(
      <>
         <section className="container co">
            <p className="text-center part">
            Trusted Brands
            </p>
            <h3 className="text-center trust">Partnerships we’ve built</h3>
          <div className="d-lg-flex d-md-flex justify-content-between mt-5">
            <div className="col-g-3 col-md-3 col-sm-12 py-4 px-3 bg-light">
                 <img src={Desktop} alt="ihj"/>
                 <p>Lorem ipsum dolor sit amet, consectr adipiscing elit, sed do eius teor incididunt.</p>
            </div>
            <div className="col-g-3 col-md-3 col-sm-12  py-4 px-3">
            <img src={Desktop} alt="ihj"/>
                 <p>Lorem ipsum dolor sit amet, consectr adipiscing elit, sed do eius teor incididunt.</p>
            </div>
            <div className="col-g-3 col-md-3 col-sm-12  py-4 px-3 bg-light">
               <img src={Desktop} alt="ihj"/>     
                 <p>Lorem ipsum dolor sit amet, consectr adipiscing elit, sed do eius teor incididunt.</p>
            </div>
            <div className="col-g-3 col-md-3 col-sm-12  py-4 px-3">
            <img src={Desktop} alt="ihj"/>
                 <p>Lorem ipsum dolor sit amet, consectr adipiscing elit, sed do eius teor incididunt.</p>
            </div>
          </div>
         </section>
         <div className="container mt-3 d-lg-flex d-md-flex justify-content-between">
            <div className="col-g-3 col-md-3 col-sm-12  py-4 px-3">
            <img src={Desktop} alt="ihj"/>
                 <p>Lorem ipsum dolor sit amet, consectr adipiscing elit, sed do eius teor incididunt.</p>
            </div>
            <div className="col-g-3 col-md-3 col-sm-12  py-4 px-3 bg-light">
            <img src={Desktop} alt="ihj"/>
                 <p>Lorem ipsum dolor sit amet, consectr adipiscing elit, sed do eius teor incididunt.</p>
            </div>
            <div className="col-g-3 col-md-3 col-sm-12  py-4 px-3">
            <img src={Desktop} alt="ihj"/>
                 <p>Lorem ipsum dolor sit amet, consectr adipiscing elit, sed do eius teor incididunt.</p>
            </div>
            <div className="col-g-3 col-md-3 col-sm-12  py-4 px-3 bg-light">
            <img src={Desktop} alt="ihj"/>
                 <p>Lorem ipsum dolor sit amet, consectr adipiscing elit, sed do eius teor incididunt.</p>
            </div>
          </div>
      </>
    );
}
export default Cards;
