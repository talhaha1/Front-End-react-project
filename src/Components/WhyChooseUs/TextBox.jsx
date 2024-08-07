import { Box, Typography } from "@mui/material";

import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import LaptopRoundedIcon from "@mui/icons-material/LaptopRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import PropTypes from "prop-types";

const iconMap = {
  0: (
    <AccessTimeFilledRoundedIcon
      sx={{
        fontSize: { xs: 50, sm: 65, md: 80, lg: 60, xl: 160 },
        marginBottom: { xs: 72, sm: 77, md: 90, lg: 40, xl: 140 },
        marginLeft: { xs: 12, sm: 28, md: 31, lg: 27, xl: 90 },
        // color: "#003366",
        //  color: "#007FFF", // Bright color for better contrast
        color: "#1B03A3",
        zIndex: 2,
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Subtle text shadow
      }}
    />
  ),
  1: (
    <QuestionAnswerRoundedIcon
      sx={{
        fontSize: { xs: 50, sm: 65, md: 80, lg: 60, xl: 160 },
        marginBottom: { xs: 72, sm: 77, md: 90, lg: 40, xl: 140 },
        marginLeft: { xs: 12, sm: 28, md: 31, lg: 27, xl: 90 },
        color: "#1B03A3",
        zIndex: 2,
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      }}
    />
  ),
  2: (
    <GroupsRoundedIcon
      sx={{
        color: "#1B03A3",
        zIndex: 2,
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        fontSize: { xs: 50, sm: 65, md: 80, lg: 60, xl: 160 },
        marginBottom: { xs: 72, sm: 77, md: 90, lg: 40, xl: 140 },
        marginLeft: { xs: 12, sm: 28, md: 31, lg: 27, xl: 90 },
      }}
    />
  ),
  3: (
    <SmartToyRoundedIcon
      sx={{
        color: "#1B03A3",
        zIndex: 2,
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        fontSize: { xs: 50, sm: 65, md: 80, lg: 60, xl: 160 },
        marginBottom: { xs: 72, sm: 77, md: 90, lg: 40, xl: 140 },
        marginLeft: { xs: 12, sm: 28, md: 31, lg: 27, xl: 90 },
      }}
    />
  ),
  4: (
    <LaptopRoundedIcon
      sx={{
        color: "#1B03A3",
        zIndex: 2,
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        fontSize: { xs: 50, sm: 65, md: 80, lg: 60, xl: 160 },
        marginBottom: { xs: 72, sm: 77, md: 90, lg: 40, xl: 140 },
        marginLeft: { xs: 12, sm: 28, md: 31, lg: 27, xl: 90 },
      }}
    />
  ),
  5: (
    <BadgeRoundedIcon
      sx={{
        color: "#1B03A3",
        zIndex: 2,
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        fontSize: { xs: 50, sm: 65, md: 80, lg: 60, xl: 160 },
        marginBottom: { xs: 72, sm: 77, md: 90, lg: 40, xl: 140 },
        marginLeft: { xs: 12, sm: 28, md: 31, lg: 27, xl: 90 },
      }}
    />
  ),
};

const TextBox = (props) => {
  return (
    <Box
      sx={{
        //  border: "2px solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: { xs: 220, sm: 470, md: 550, lg: 480, xl: 1700 },
        bgcolor: "background.paper",
        height: "70vh",
        marginTop: { xs: 3, sm: 4, md: 4, lg: 6, xl: 10 },
        marginLeft: { xs: 11, sm: 18, md: 22, lg: 47, xl: 152 },
        marginBottom: { lg: -29 },
        marginRight: {},
        width: "100%",
      }}
    >
      {iconMap[props.index]}
      {/* {props.text} */}
      <Typography
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.5rem",
            lg: "1.2rem",
            xl: "4rem",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          position: "relative", // Ensure it’s positioned in the normal flow
          zIndex: 2, // Ensure it’s above the background image
          marginTop: { xs: -10, sm: -25, md: -20, lg: -5, xl: -30 },
          marginLeft: { xs: -17, sm: -30, md: -34, lg: -30, xl: -90 },
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        }}
      >
        {props.text}
      </Typography>
    </Box>
  );
};

TextBox.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default TextBox;
