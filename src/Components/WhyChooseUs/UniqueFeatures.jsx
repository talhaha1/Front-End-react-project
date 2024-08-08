import { Box, Typography, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import data from "./data";
import TextBox from "./TextBox";
import image from "./background-image.jpg";

const UniqueFeatures = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTextBox = () => {
    switch (value) {
      case 0:
        return <TextBox text={data.BOX1} index={0} />;
      case 1:
        return <TextBox text={data.BOX2} index={1} />;
      case 2:
        return <TextBox text={data.BOX3} index={2} />;
      case 3:
        return <TextBox text={data.BOX4} index={3} />;
      case 4:
        return <TextBox text={data.BOX5} index={4} />;
      case 5:
        return <TextBox text={data.BOX6} index={5} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
      <img
        src={image}
        alt="Background"
        style={{
          width: "100%",
          height: "100%",
          filter: "blur(9px)",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "1.6rem",
              sm: "2.3rem",
              md: "2.8rem",
              lg: "2.4rem",
              xl: "6.1rem",
            },
            fontWeight: "bold",
            whiteSpace: "nowrap",
            marginTop: { xs: 7 },
            // marginTop: { xs: -5, sm: -5, md: -15, lg: -26, xl: -30 },
            // marginLeft: { xs: 13, sm: 28, md: 30, lg: 55, xl: 180 },
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
          variant="h4"
        >
          What Sets Us Apart
        </Typography>

        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          sx={{
            maxWidth: { xs: 300, sm: 600, md: 700, lg: 800, xl: 1500 },
            marginTop: { xs: 6, sm: 5, md: 7, lg: 2, xl: 8 },
            marginLeft: { xs: 23, sm: 12, md: 12, lg: 25, xl: 20 },
            width: "100%",
            "& .MuiTabs-scrollButtons": {
              color: "white",
            },
          }}
        >
          {[
            "Perfection Anytime",
            "24/7 Communication",
            "Our Team",
            "Fine Automation",
            "Advance Technology",
            "Licensed Staff",
          ].map((label, index) => (
            <Tab
              key={index}
              label={label}
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                  md: "1.1rem",
                  lg: "1rem",
                  xl: "2rem",
                },
                color: "white",
                "&.Mui-selected": {
                  color: "white",
                },
                outline: "none",
                "&:focus": {
                  outline: "none",
                },
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              }}
            />
          ))}
        </Tabs>
        {renderTextBox()}
      </Box>
    </Box>
  );
};

export default UniqueFeatures;
