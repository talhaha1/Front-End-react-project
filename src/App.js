import React from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Services from "./Pages/Services/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WhyChooseUs from "./Components/AboutWhyChooseUs/AboutWhyChooseUs"
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<WhyChooseUs />} />
          <Route path="/services/businessanalytics" element={<Services />} />
          <Route path="/services/auto&integ" element={<Services />} />
          <Route path="/services/digmart" element={<Services />} />
          <Route path="/contactus" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;