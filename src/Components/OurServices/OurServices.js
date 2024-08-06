import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTab((prev) => (prev + 1) % imageDetails.length);
    }, 2000); // change tab every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box css={rootStyle}>
      <Box css={tabsStyle}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          centered={!isMobile}
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons="auto"
          indicatorColor="primary"
          textColor="primary"
        >
          {imageDetails.map((detail, index) => (
            <Tab key={index} label={detail.label} />
          ))}
        </Tabs>
      </Box>
      <SwipeableViews
        index={selectedTab}
        onChangeIndex={(index) => setSelectedTab(index)}
        enableMouseEvents
        animateTransitions={true} // Enable smooth transitions
        springConfig={{ duration: 300, ease: 'easeInOut' }} // Adjust timing and easing
        css={serviceCardStyle}
      >
        {imageDetails.map((detail, index) => (
          <ServiceCard
            key={index}
            image={detail.image}
            heading={detail.heading}
            text={detail.text}
          />
        ))}
      </SwipeableViews>
    </Box>
  );
};

export default OurServices;
