import React, { useState, useEffect } from "react";
import { Box, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import ServiceCard from "./ServiceCard";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
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
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={rootStyle}>
      <Box sx={tabsStyle}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          centered={!isMobile}
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons="auto"
        >
          {imageDetails.map((detail, index) => (
            <Tab 
              key={index} 
              label={detail.label} 
              sx={{
                color: '#454545', // White text color for each tab
                '&.Mui-selected': {
                  color: '#000000', // Black text color for selected tab
                  backgroundColor: '#FFFFFF', // White background for selected tab
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
      <SwipeableViews
        index={selectedTab}
        onChangeIndex={(index) => setSelectedTab(index)}
        enableMouseEvents
        animateTransitions
        springConfig={{ duration: 300, ease: 'easeInOut' }} 
        sx={serviceCardStyle}
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
