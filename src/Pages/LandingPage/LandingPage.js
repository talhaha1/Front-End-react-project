import React from 'react'
import NavBar from "../../Components/NavBar/nav";
import Footer from "../../Components/Footer/footer";
import DigitalMarketing from "../../Components/DigitalMarketing/digitalMarketing";
import UniqueFeatures from "../../Components/WhyChooseUs/UniqueFeatures";
import OurServices from "../../Components/OurServices/OurServices";
import Header from "../../Components/Header/Header";
import Stats from "../../Components/Stats/Stats";
import Whoweare from "../../Components/Whoweare/whoweare";
import Testimonials from "../../Components/Testimonials/Testimonials";

const LandingPage = () => {
  return (
    <div>
        <NavBar />
      <Stats />
      <Whoweare />
      <OurServices />
      <Header /> 
      <UniqueFeatures />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default LandingPage