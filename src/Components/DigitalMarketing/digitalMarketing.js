import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './digitalMarketing.css';
import seo from '../../assets/seo.jpg';
import Email from '../../assets/Email-Marketing.jpg';
import web from '../../assets/webDesign.png';
import content from '../../assets/contentWriting.jpg';

const DigitalMarketing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="digital-marketing-container">
      <div className="services-section">
        <h1 className="services-title">Services</h1>
        <p className="services-intro">
          <em>
            Are your digital marketing goals driven by data, or just a shot in
            the dark? Either way, ANALYZINN can help to gain competitive
            advantage by providing you the right knowledge, at the right time,
            so you can:
          </em>
        </p>
        <ul className="services-list">
          <li>
            Understand your customers & offer Superior Customer Experience
          </li>
          <li>Identify opportunities and threats & Market Better</li>
          <li>Respond to business needs proactively</li>
          <li>Innovate faster with relevant data</li>
          <li>
            Gain competitive advantage & make informed and optimized decision
          </li>
        </ul>
      </div>
      <div className="image-section">
        <Slider {...settings}>
          <div className="slide-item">
            <img src={content} alt="Content Writing" />
            <p>Content Writing</p>
          </div>
          <div className="slide-item">
            <img src={Email} alt="Email (Search Engine Optimization)" />
            <p>SEO (Search Engine Optimization)</p>
          </div>
          <div className="slide-item">
            <img src={Email} alt="Email Marketing" />
            <p>Email Marketing</p>
          </div>
          <div className="slide-item">
            <img src={web} alt="Website/Logo Design, Landing Pages" />
            <p>Website/Logo Design, Landing Pages</p>
          </div>
        </Slider>
      </div>
      <div className="services-section">
        <h3 className="services-title">
          How can you access our Digital Marketing Strategies?
        </h3>
        <p className="services-intro">
          <em>
            Analyzinn will provide you the additional stack for accessing our
            Digital Marketing Strategies:
          </em>
        </p>
        <ul className="services-lists">
          <li>Marketing Analytics Dashboards</li>
          <li>Revenue Dashboards</li>
          <li>Customer Level Dashboards</li>
          <li>Campaign Level Dashboards</li>
        </ul>
      </div>
    </div>
  );
};

export default DigitalMarketing;
