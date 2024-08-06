// src/Components/ServiceCard/ServiceCard.js

import React from "react";
import PropTypes from "prop-types";
import { Box, Card, CardMedia, CardContent, Typography, Button, useMediaQuery, useTheme } from "@mui/material";

const ServiceCard = ({ image, heading, text }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        padding: 2,
        backgroundColor: "#000000", // Black background for the entire component
        color: "#FFFFFF",           // White text color for the entire component
        display: "flex",
        flexDirection: "column",
        alignItems: "center",       // Center align the content horizontally
        overflowX: "hidden",        // Prevent horizontal scrolling
        boxSizing: "border-box",    // Ensure padding is included in the element's total width and height
      }}
    >
      {/* Heading Section */}
      <Box
        sx={{
          textAlign: "center",       // Center align text
          marginBottom: 4,           // Space between heading and card
          padding: 4,                // Padding around the text
          width: "85%",              // Full width of the container
          backgroundColor: "#000000", // Black background
          color: "#FFFFFF",           // White text color
          borderRadius: 1,           // Rounded corners
        }}
      >
        <Typography variant="h4" component="h1" sx={{ marginBottom: 1 }}>
          Our Services
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Each Service, tailored for you. From this Click until the End!
        </Typography>
      </Box>

      {/* Service Card Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Column on mobile, row otherwise
          justifyContent: "center", // Center the card horizontally
          alignItems: "center",
          width: "100%",            // Full width of the container
          padding: 2,               // Padding around the card
          boxSizing: "border-box",  // Ensure padding is included in the element's total width and height
          overflowX: "hidden",      // Prevent horizontal scrolling
        }}
      >
        <Card
          sx={{
            width: isMobile ? "100%" : "80%",  // Full width on mobile, adjust width as needed otherwise
            maxWidth: "100%",                 // Ensure the card does not exceed the viewport width
            backgroundColor: "#000000",       // Black background
            color: "#FFFFFF",                 // White text color
            boxShadow: "none",                // Remove box shadow
            overflow: "hidden",
            borderRadius: 1,                  // Rounded corners
            display: "flex",
            flexDirection: isMobile ? "column" : "row", // Column on mobile, row otherwise
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={heading}
            sx={{
              width: isMobile ? "100%" : "50%",  // Full width on mobile, half width otherwise
              height: "auto",                    // Maintain aspect ratio
              objectFit: "cover",                // Cover the area
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 2,
              width: isMobile ? "100%" : "50%",  // Full width on mobile, half width otherwise
              textAlign: isMobile ? "center" : "left", // Center text on mobile, left-align otherwise
              marginLeft: isMobile ? 0 : 4, // Add margin left on desktop
            }}
          >
            <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
              {heading}
            </Typography>
            <Typography variant="body2" color="white" sx={{ marginBottom: 2 }}>
              {text}
            </Typography>
            <Button variant="contained" color="secondary">
              Explore More
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServiceCard;
