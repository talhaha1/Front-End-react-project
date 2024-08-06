// src/Components/ServiceCard/ServiceCard.js

import React from "react";
import PropTypes from "prop-types";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

const ServiceCard = ({ image, heading, text }) => {
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <Card sx={{ maxWidth: "100%", marginTop: 3 }}>
        <CardMedia component="img" height="300" image={image} alt={heading} />
        <CardContent>
          <Typography variant="h5" component="div">
            {heading}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServiceCard;
