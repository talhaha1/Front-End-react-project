import React from "react";
// import NavBar from "../../Components/NavBar/nav";
import AboutHeader from "../../Components/aboutHeader/aboutheader"
import Footer from "../../Components/Footer/footer";
import WhyChooseUs from "../../Components/AboutWhyChooseUs/AboutWhyChooseUs";
import AboutConsultencySection from "../../Components/AboutConsultencySection/AboutConsultencySection";
import Testimonials from "../../Components/Testimonials/Testimonials";

const aboutUsPage=()=>
{
return(

    <div>
        {/* <NavBar/> */}
        <AboutHeader/>
        <AboutConsultencySection/>
        <WhyChooseUs/>
        <Testimonials/>
        <Footer/>

    </div>
);

};
export default aboutUsPage;