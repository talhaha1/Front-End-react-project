import React from "react";
import NavBar from "../../Components/NavBar/nav";
import Footer from "../../Components/Footer/footer";
import DigitalMarketing from "../../Components/DigitalMarketing/digitalMarketing";
import OurServices from "../../Components/OurServices/OurServices";
import Header from "../../Components/Header/Header";
import Stats from "../../Components/Stats/Stats";
import Whoweare from "../../Components/Whoweare/whoweare";
import Testimonials from "../../Components/Testimonials/Testimonials";
import RequestInfo from "../../Components/RequestInfo/RequestInfo";
import Home from "../../Components/Home/Home";
import WhatSetsUsApart from "../../Components/WhyChooseUs/WhatSetsUsApart";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Stats />
      <Whoweare />
      <OurServices />
      <Header />
      <WhatSetsUsApart />
      <Testimonials />
      <RequestInfo />
      <Footer />
    </div>
  );
};

export default LandingPage;
