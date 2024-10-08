import React from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Services from "./Pages/Services/Services";
import ContactPage from "./Pages/ContactUs/contactUspage";
import ConsultingSection from "./Pages/AboutUs/aboutuspage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<ConsultingSection />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
