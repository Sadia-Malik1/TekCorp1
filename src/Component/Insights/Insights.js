import React from "react";
import { Link } from "react-router-dom";
import arrow from "../images/Frame-3.png"
import './Insights.css';
// import HeaderTop from "../OurSolution/HeaderTop/HeaderTop";

import logo from '../images/Group 1171276349 1.png';
const Insights = () => {
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
              <h2 className="text-IT1 text-center">Case Study Name Here</h2>
              {/* <p className="text-3">Explore Services, Products, and Integrations for a Future-Ready Business Ecosystem. Tailored Services, Proven Products, Seamless Integrations – Elevating Your Business, Empowering Your Growth.</p> */}
              <Link className="contact-now1 text-center" to="#">TekCorp-Company <img src={arrow} alt="contact"/></Link>
           </div>
       </div>
   </section>
</header>

<section className="container bg-light">
    <div className="">
        <img src="https://unblast.com/wp-content/uploads/2019/07/iPad-Isometric-Mockup-1600x1120.jpg" alt="" className="img-fluid"/>
    </div>
</section>
<section className="container ">
    <div className="d-lg-flex d-md-flex justify-content-between">
        <div className="card me-lg-3 me-md-3 mt-3">
            <img src="https://unblast.com/wp-content/uploads/2023/05/Computer-Mockup-1536x1187.jpg " alt="" className="img-fluid "/>
        </div>
        <div className="card mt-3">
        <img src="https://unblast.com/wp-content/uploads/2023/05/Computer-Mockup-1536x1187.jpg " alt="" className="img-fluid "/>
       </div>
    </div>
</section>
<section className="container ">
    <div className="d-lg-flex  justify-content-between">
        <div className="col-lg-6 co-md-6 col-sm-12 p-3  py-5 text-goes11">
            <h4 className="text-goes">Title goes here</h4>
            <p>Evaluate your performance with precision after each question using our intuitive Performance Evaluation Phase. </p>
            <p>Rate the difficulty level of the question on a scale of 1 to 5 stars and choose the option that best represents your progress. From reviewing the question to acing all the test cases, we've got you covered!</p>
            <p>Evaluate your performance with precision after each question using our intuitive Performance Evaluation Phase. </p>
            <p>Rate the difficulty level of the question on a scale of 1 to 5 stars and choose the option that best represents your progress. From reviewing the question to acing all the test cases, we've got you covered!</p>
            <p>Evaluate your performance with precision after each question using our intuitive Performance Evaluation Phase. </p>
            <p>Rate the difficulty level of the question on a scale of 1 to 5 stars and choose the option that best represents your progress. From reviewing the question to acing all the test cases, we've got you covered!</p>
        </div>
        <div className="col-lg-6 co-md-6 col-sm-12  p-3  py-5 text-goes11">
        <p>Evaluate your performance with precision after each question using our intuitive Performance Evaluation Phase. </p>
        <p>Rate the difficulty level of the question on a scale of 1 to 5 stars and choose the option that best represents your progress. From reviewing the question to acing all the test cases, we've got you covered!</p>
        <p>Evaluate your performance with precision after each question using our intuitive Performance Evaluation Phase. </p>
        <p>Rate the difficulty level of the question on a scale of 1 to 5 stars and choose the option that best represents your progress. From reviewing the question to acing all the test cases, we've got you covered! </p>
        <p>Rate the difficulty level of the question on a scale of 1 to 5 stars and choose the option that best represents your progress. From reviewing the question to acing all the test cases, we've got you covered! </p>
        <p>Rate the difficulty level of the question on a scale of 1 to 5 stars and choose the option that best represents your progress. From reviewing the question to acing all the test cases, we've got you covered! </p>
        <p>Rate the difficulty level of the question on a scale of 1 to 5 stars and choose the option that best represents your progress. From reviewing the question to acing all the test cases, we've got you covered!</p>
       </div>
    </div>
</section>
{/* <HeaderTop/> */}
      </>
    );
}
export default Insights;
