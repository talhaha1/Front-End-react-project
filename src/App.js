
// src/App.js

import React from 'react';
import OurServices from './Components/OurServices/OurServices';

 
import './App.css';
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/footer"
import Stats from "./Components/Stats/Stats"
import Whoweare from "./Components/Whoweare/whoweare"
import Testimonials from "./Components/Testimonials/Testimonials"
function App() {
  return (
    <div className="App">


      <Header />
      <Stats />
      <Whoweare />
      
      <OurServices />
      <Testimonials />
<Footer />
    </div>
  );
}

export default App;
