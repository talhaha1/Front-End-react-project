import data from "./data";
import {
  ContentMainBox,
  ImageBox,
  ContentTypographyBox,
  ContentTypography,
} from "./ContentBoxStyle";
import PropTypes from "prop-types";
import PerfectionAnytime from "../../assets/WhatSetsUsApartImages/PerfectionAnytime.jpg";
import Communication from "../../assets/WhatSetsUsApartImages/Communication.jpg";
import OurTeam from "../../assets/WhatSetsUsApartImages/OurTeam.jpg";
import Automation from "../../assets/WhatSetsUsApartImages/Automation.jpg";
import AdvancedTechnology from "../../assets/WhatSetsUsApartImages/AdvancedTechnology.jpg";
import LicensedStaff from "../../assets/WhatSetsUsApartImages/LicensedStaff.jpg";
import { useState } from "react";

const ContentBox = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const showContent = () => {
    if (props.index === 0) {
      return data.BOX1;
    } else if (props.index === 1) {
      return data.BOX2;
    } else if (props.index === 2) {
      return data.BOX3;
    } else if (props.index === 3) {
      return data.BOX4;
    } else if (props.index === 4) {
      return data.BOX5;
    } else if (props.index === 5) {
      return data.BOX6;
    }
  };

  const showImage = () => {
    const images = [
      PerfectionAnytime,
      Communication,
      OurTeam,
      Automation,
      AdvancedTechnology,
      LicensedStaff,
    ];
    return images[props.index];
  };

  return (
    <ContentMainBox>
      <ImageBox>
        <img
          src={showImage()}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
            boxShadow:
              "inset 10px 0 10px -10px rgba(0,0,0,0.5), inset -10px 0 10px -10px rgba(0,0,0,0.5)",
            borderRadius: "15px",
            transition: "transform 0.3s ease", // Smooth transition
            transform: isHovered ? "scale(1.05)" : "scale(1)", // Hover effect
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </ImageBox>
      <ContentTypographyBox>
        <ContentTypography>{showContent()}</ContentTypography>
      </ContentTypographyBox>
    </ContentMainBox>
  );
};

export default ContentBox;

ContentBox.propTypes = {
  index: PropTypes.number.isRequired,
};
