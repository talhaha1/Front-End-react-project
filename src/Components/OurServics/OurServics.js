// src/Components/OurServices/OurServices.js

import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import ServiceCard from "./ServiceCard";
import img1 from "../../assets/OurServices/img1.jpg";
import img2 from "../../assets/OurServices/img2.jpg";
import img3 from "../../assets/OurServices/img3.jpg";
import { rootStyle, tabsStyle, serviceCardStyle } from './OurServices.styles';

const imageDetails = [
  {
    label: "Business Analytics",
    image: img1,
    heading: "Business Analytics",
    text: "Truly data-driven organizations gain a competitive advantage over their competitors who view data using traditional methods. Enable your organization to view data differently and unlock the true potential of your business. Use data to empower decision making in all business functions.",
  },
  {
    label: "Digital Marketing & Analytics",
    image: img2,
    heading: "Digital Marketing & Analytics",
    text: "Are your digital marketing goals driven by data, or just a shot in the dark? Either way, ANALYZINN can help to gain competitive advantage by providing you the right knowledge, at the right time.",
  },
  {
    label: "Automation & Integration",
    image: img3,
    heading: "Automation & Integration",
    text: "Analyzinn Solutions offer end-to-end Automation and Integration Services to help you embrace digital transformation and build a cost-efficient system. We are experienced in leveraging APIs and the integration of standard applications. We help you reduce manual efforts.",
  },
];

const OurServices = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box css={rootStyle}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        centered
        indicatorColor="primary"
        textColor="primary"
        css={tabsStyle}
      >
        {imageDetails.map((detail, index) => (
          <Tab key={index} label={detail.label} />
        ))}
      </Tabs>
      <Box css={serviceCardStyle}>
        <ServiceCard
          image={imageDetails[selectedTab].image}
          heading={imageDetails[selectedTab].heading}
          text={imageDetails[selectedTab].text}
        />
      </Box>
    </Box>
  );
};

export default OurServices;
