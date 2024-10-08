import React from 'react';
import './digitalMarketing.css';
import seo from '../../assets/seo.jpg';
import email from '../../assets/Email-Marketing.jpg';
import web from '../../assets/webDesign.png';
import content from '../../assets/contentWriting.jpg';

const DigitalMarketing = () => {
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
        <div className="center-image-container">
          <img src={content} alt="Content Writing" className="center-image" />
          <p>Content Writing</p>
        </div>
        <div className="bottom-images">
          <div className="bottom-image">
            <img src={seo} alt="SEO (Search Engine Optimization)" />
            <p>SEO (Search Engine Optimization)</p>
          </div>
          <div className="bottom-image">
            <img src={email} alt="Email Marketing" />
            <p>Email Marketing</p>
          </div>
          <div className="bottom-image">
            <img src={web} alt="Website/Logo Design, Landing Pages" />
            <p>Website/Logo Design, Landing Pages</p>
          </div>
        </div>
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
