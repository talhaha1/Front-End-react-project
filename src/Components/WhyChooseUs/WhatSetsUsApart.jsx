import React, { useState } from "react";
import {
  MainBox,
  HeadingBox,
  HeadingTypography,
  StyledTab,
  StyledTabs,
} from "./WhatSetsUsApartStyle";

import ContextBox from "./ContentBox";

const WhatSetsUsApart = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderTextBox = () => {
    switch (value) {
      case 0:
        return <ContextBox index={0} />;
      case 1:
        return <ContextBox index={1} />;
      case 2:
        return <ContextBox index={2} />;
      case 3:
        return <ContextBox index={3} />;
      case 4:
        return <ContextBox index={4} />;
      case 5:
        return <ContextBox index={5} />;
      default:
        return null;
    }
  };
  return (
    <MainBox>
      <HeadingBox>
        <HeadingTypography variant="h4">What Sets Us Apart</HeadingTypography>
      </HeadingBox>
      <StyledTabs
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          children: <span className="MuiTabs-indicatorSpan" />,
        }}
      >
        <StyledTab label="PERFECTION ANYTIME" />
        <StyledTab label="24/7 COMMUNICATION" />
        <StyledTab label="OUR TEAM" />
        <StyledTab label="FINE AUTOMATION" />
        <StyledTab label="ADVANCED TECHNOLOGY" />
        <StyledTab label="LICENSED STAFF" />
      </StyledTabs>
      {renderTextBox()}
    </MainBox>
  );
};

export default WhatSetsUsApart;
