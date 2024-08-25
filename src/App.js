import React from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Services from "./Pages/Services/Services";
import ContactPage from "./Components/ContactUs/ContactPage";
import DigitalMarketing from "./Components/DigitalMarketing/digitalMarketing";
import ConsultingSection from "./Components/AboutConsultencySection/AboutConsultencySection";
import BA from "./Components/BusinessAnalytics/BA";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<ConsultingSection />} />
          <Route path="/services" element={<Services />} />
          
          <Route path="/services/Business-Analytics" element={<BA />} />
          <Route path="/services/Digital-Marketing" element={<DigitalMarketing />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
