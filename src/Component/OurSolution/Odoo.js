import React from "react";
// import { Link } from "react-router-dom";
// import logoDesktop from "../images/logo-desktop.png"
 import BG from "../images/bg.jpg"

// import Desktop from "../images/logo33.png";
const Odoo = () => {
    return(
      <>
        <section className="container mt-5">
            <img src={BG} alt="bgimage" className="img-fluid w-100"/>   
            <div className="d-lg-flex d-md-flex justify-content-between mt-5">
                <div className="col-lg-3 col-md-3 col-sm-12 p-2">
                {/* <img src={Desktop} alt="bgid" className=""/> */}
                    <p className="text-center feedbackk">
                    "We love TekCorp! Our designers were using it for their projects, so clients already knew what TekCorp was and how to use it."
                    </p>
                    <h4 className="text-center">
                    Darlene Robertson
                    </h4>
                    <p  className="text-center titlee">
                      Product Manager at Odoo 
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-2">
                    <p className="text-center feedbackk">
                    "We love TekCorp! Our designers were using it for their projects, so clients already knew what TekCorp was and how to use it."
                    </p>
                    <h4 className="text-center">
                    Darlene Robertson
                    </h4>
                    <p  className="text-center titlee">
                      Product Manager at Odoo 
                    </p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-2 ">
                    <p className="text-center feedbackk">
                    "We love TekCorp! Our designers were using it for their projects, so clients already knew what TekCorp was and how to use it."
                    </p>
                    <h4 className="text-center titlee">
                    Darlene Robertson
                    </h4>
                    <p  className="text-center">
                      Product Manager at Odoo 
                    </p>
                </div>
            </div>
        </section>
      </>
    );
}
export default Odoo;
