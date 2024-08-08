import { Box, Typography } from "@mui/material";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import LaptopRoundedIcon from "@mui/icons-material/LaptopRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import PropTypes from "prop-types";
import React from "react";

const iconMap = {
  0: <AccessTimeFilledRoundedIcon />,
  1: <QuestionAnswerRoundedIcon />,
  2: <GroupsRoundedIcon />,
  3: <SmartToyRoundedIcon />,
  4: <LaptopRoundedIcon />,
  5: <BadgeRoundedIcon />,
};

const TextBox = ({ index, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: { xs: 220, sm: 470, md: 550, lg: 480, xl: 60 },
        backgroundColor: "transparent",
        height: "70vh",
        marginTop: { xs: 3, sm: 4, md: 4, lg: 6, xl: 15 },
        marginLeft: { xs: 11, sm: 18, md: 22, lg: 47, xl: 215 },
        marginBottom: { lg: -29 },
        width: "100%",
        position: "relative",
        zIndex: 1, // Ensure proper stacking
      }}
    >
      {iconMap[index] &&
        React.cloneElement(iconMap[index], {
          sx: {
            fontSize: { xs: 50, sm: 65, md: 80, lg: 50, xl: 110 },
            marginBottom: { xs: 58, sm: 70, md: 90, lg: 55, xl: 98 },
            marginLeft: { xs: 40, sm: 27, md: 27, lg: 24, xl: -105 },
            color: "#1B03A3",
            zIndex: 2,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          },
        })}
      <Box sx={{ position: "relative", width: "100%", height: "100vh" }}></Box>
      <Typography
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.5rem",
            lg: "1.2rem",
            xl: "2rem",
          },
          color: "white",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          marginRight: { md: 10, xl: 70 },
          marginTop: { xs: 0, sm: -25, md: -20, lg: -9, xl: -20 },
          marginLeft: { xs: -14, sm: -36, md: -37, lg: -30, xl: -45 },
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          minWidth: { xs: "12rem" },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

TextBox.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextBox;
