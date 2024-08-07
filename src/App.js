
// src/App.js

import React from 'react';
import OurServices from './Components/OurServices/OurServices';

 
import './App.css';
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Stats from "./Components/Stats/Stats"
import Whoweare from "./Components/Whoweare/whoweare"
 import OurServices from "./Components/OurServics/OurServics"
import Testimonials from "./Components/Testimonials/Testimonials"
function App() {
  return (
    <div className="App">


      {/* <Header /> */}
      <Stats />
      <Whoweare />
      {/* <Footer /> */}
      <OurServices />
      {/* <Testimonials /> */}

    </div>
  );
}

export default App;
