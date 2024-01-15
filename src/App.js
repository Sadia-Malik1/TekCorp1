import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Topsection from './Component/Header/Topsection';
import Footer from './Component/Footer/Footer';
import OurStrategic from './Component/OurStrategic';
import Main from './Component/Main/Main';
import Portfolio from './Component/Portfolio/Portfolio';
import Empowering from './Component/Empowering/Empowering';
// import HeaderTop from './Component/OurSolution/HeaderTop/HeaderTop';
import Odoo from './Component/OurSolution/Odoo';
import About from './Component/OurSolution/About';
import Cards from './Component/OurSolution/Cards';
import Discover from './Component/Discover/Discover';
import Insights from './Component/Insights/Insights';


// import HeaderTop from '/Component/OurSolution/HeaderTop';


function App(){
  return(
    <div>
      <Routes>
        <Route exact path="/" element= {<> 
        <Topsection/>
        <Main/>
        <OurStrategic/>
        <Portfolio/>
        <Footer/> 
    
        </> } /> 
        <Route  path="/Empowering" element = {<><Empowering/> <Cards/> <About/> <Odoo/>  <Footer/> </>} />
        <Route  path="/Discover" element = {<><Discover/>   <Footer/> </>} />
        <Route  path="/Insights" element = {<><Insights/>   <Footer/> </>} />
        {/* <Route exact path="/" element={<Footer/>} /> */}
     
     </Routes>
    </div>
  );
}








  export default App;

