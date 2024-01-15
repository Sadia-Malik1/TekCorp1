import React from "react";
import { Link } from "react-router-dom";
import arrow from "../images/Frame-3.png"
import './Discover.css';
// import HeaderTop from "../OurSolution/HeaderTop/HeaderTop";
import Personalp from "./Personalp";
import logo from '../images/Group 1171276349 1.png';
const Discover = () => {
    return(
    <>
   

<header className="header-st">
   
   <section className="">
       <div className="nav-bar">
           <div className="container">
               <nav className="navbar navbar-expand-lg">
                   <Link to="34" className="nav-logo navbar-brand">
                       <img src={logo} alt="Logo"/>
                   </Link>
                   <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
                       type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="toggler-icon top-bar"></span>
                       <span className="toggler-icon middle-bar"></span>
                       <span className="toggler-icon bottom-bar"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav ms-auto  py-lg-0 mt-1 mb-2 my-lg-0 ms-lg-n1-navbar border-nav22  ">
                           <li className="nav-item">
                               <Link className="nav-link nav-pages1 active text-dark11 clr1" aria-current="page" to="">Home</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link nav-pages1 text-dark11 clr1" to="/Empowering">Our Solution</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link nav-pages1 text-dark11 clr1" to="/Discover">Case Study</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link nav-pages1  text-dark11 clr1 " to="/Insights">Insights</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link nav-pages1 clr1 text-dark11" to="90">Company</Link>
                           </li>
                       </ul>
                       <Link to="#"
                           className="btn  nav-btn rounded-pill clr1 border-21 ms-auto"
                           target="_blank">Get Started</Link>
                       </div>    
               </nav>
           </div>
       </div>
   </section>
   <section className="container-fluid c-bgg ">
       <div className="parent-cc">
           <div className="col-lg-7 col-md-7 col-sm-10 post-text  ">
              <p className="text-IT text-center"> Leading the Way in IT Solutions </p>
              <h2 className="text-IT1 text-center">Discover How TekCorp Innovates Solutions </h2>
              {/* <p className="text-3">Explore Services, Products, and Integrations for a Future-Ready Business Ecosystem. Tailored Services, Proven Products, Seamless Integrations – Elevating Your Business, Empowering Your Growth.</p> */}
              <Link className="contact-now1 text-center" to="#">TekCorp-Company <img src={arrow} alt="contact"/></Link>
           </div>
       </div>
   </section>
</header>

<Personalp/>
      </>
    );
}
export default Discover;
