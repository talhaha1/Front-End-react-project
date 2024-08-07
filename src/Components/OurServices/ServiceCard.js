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
        backgroundColor: "#000000", // Black background
        color: "#FFFFFF", // White text color
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 4,
          padding: 4,
          width: "85%",
          backgroundColor: "#000000", // Black background
          color: "#FFFFFF", // White text color
          borderRadius: 1,
        }}
      >
        <Typography variant="h4" component="h1" sx={{ marginBottom: 1 }}>
          Our Services
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Each Service, tailored for you. From this Click until the End!
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: 2,
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        <Card
          sx={{
            width: isMobile ? "100%" : "80%",
            maxWidth: "100%",
            backgroundColor: "#000000", // Black background
            color: "#FFFFFF", // White text color
            boxShadow: "none",
            overflow: "hidden",
            borderRadius: 1,
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={heading}
            sx={{
              width: isMobile ? "100%" : "50%",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 2,
              width: isMobile ? "100%" : "50%",
              textAlign: isMobile ? "center" : "left",
              marginLeft: isMobile ? 0 : 4,
            }}
          >
            <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
              {heading}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
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
