import { Box, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#708090",
  padding: "2rem",
  display: "flex",
  flexDirection: "column", // Stack children vertically
  alignItems: "center", // Center children horizontally
  justifyContent: "flex-start", // Align children to the top
  [theme.breakpoints.only("xs")]: {
    minHeight: "45vh",
    maxHeight: "45vh",
  },
  [theme.breakpoints.only("sm")]: {
    minHeight: "47vh",
    maxHeight: "47vh",
  },
  [theme.breakpoints.only("md")]: {
    minHeight: "40vh",
    maxHeight: "40vh",
  },
  [theme.breakpoints.only("lg")]: {
    minHeight: "81vh",
    maxHeight: "81vh",
  },
  [theme.breakpoints.only("xl")]: {
    minHeight: "77vh",
    maxHeight: "77vh",
  },
}));

export const HeadingBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center", // Center text within the box
  padding: "1rem",
  [theme.breakpoints.only("xs")]: {
    marginTop: "-1rem",
    minWidth: "25rem",
    maxWidth: "25rem",
    minHeight: "5rem",
    maxHeight: "5rem",
  },
  [theme.breakpoints.only("sm")]: {
    marginTop: "-1rem",
    minWidth: "25rem",
    maxWidth: "25rem",
    minHeight: "5rem",
    maxHeight: "5rem",
  },
  [theme.breakpoints.only("md")]: {
    marginTop: "-1rem",
    minWidth: "25rem",
    maxWidth: "25rem",
    minHeight: "5rem",
    maxHeight: "5rem",
  },
  [theme.breakpoints.only("lg")]: {
    minWidth: "29rem",
    maxWidth: "29rem",
    minHeight: "4rem",
    maxHeight: "4rem",
    marginTop: "-1.5rem",
  },
  [theme.breakpoints.only("xl")]: {
    marginTop: "-0.5rem",
    minWidth: "60rem",
    maxWidth: "60rem",
    minHeight: "10rem",
    maxHeight: "10rem",
  },
}));

export const HeadingTypography = styled(Box)(({ theme }) => ({
  //color: "#E8E8E8",
  color: "#D3D3D3",
  //color: "#bfbfbf",
  fontFamily: "'Arial', sans-serif",
  fontWeight: 540,
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Adding text shadow
  [theme.breakpoints.only("xs")]: {
    fontSize: "1.8rem", // Smaller font size on small screens
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "2.5rem", // Smaller font size on small screens
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "2.6rem", // Medium font size on medium screens
  },
  [theme.breakpoints.only("lg")]: {
    fontSize: "2.8rem", // Larger font size on large screens
  },
  [theme.breakpoints.only("xl")]: {
    fontSize: "4.5rem", // Larger font size on large screens
  },
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  position: "relative",
  border: "2px solid grey", // This adds borders on all sides
  borderRadius: "8px", // Optional: adds slightly rounded corners
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  backgroundColor: "white",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    height: "0px",
    backgroundColor: "grey",
    zIndex: 1, // Ensure these lines appear above the tabs
  },
  "&::before": {
    top: 0,
  },
  "&::after": {
    bottom: 0,
  },
  "& .MuiTabs-scroller": {
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "1px",
      backgroundColor: "grey",
      zIndex: 1,
    },
  },
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#4682B4",
    height: "3px",
    top: 0,
    zIndex: 2, // Ensure the indicator appears above the border lines
  },
  [theme.breakpoints.only("xs")]: {
    marginTop: "0.5rem",
    minWidth: "36rem",
    maxWidth: "36rem",
    minHeight: "2.7rem",
    maxHeight: "2.7rem",
  },
  [theme.breakpoints.only("sm")]: {
    minWidth: "39rem",
    maxWidth: "39rem",
    minHeight: "3rem",
    maxHeight: "3rem",
    marginTop: "0rem",
  },
  [theme.breakpoints.only("md")]: {
    minWidth: "39rem",
    maxWidth: "39rem",
    minHeight: "3.5rem",
    maxHeight: "3.5rem",
    marginTop: "0.4rem",
  },
  [theme.breakpoints.only("lg")]: {
    minWidth: "47rem",
    maxWidth: "47rem",
    minHeight: "3.5rem",
    maxHeight: "3.5rem",
    marginTop: "0.6rem",
  },
  [theme.breakpoints.only("xl")]: {
    minWidth: "78rem",
    maxWidth: "78rem",
    minHeight: "6rem",
    maxHeight: "6rem",
    marginTop: "0rem",
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "uppercase",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: 14,
  color: "black",
  opacity: 1,
  transition: "all 0.2s ease",
  position: "relative", // Needed for z-index to work
  zIndex: 1,
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
  "&.Mui-selected": {
    color: "black",
    backgroundColor: "#D3D3D3",
  },
  "&:hover": {
    backgroundColor: "#F0F8FF",
    transform: "translateY(-2px) scale(1.02)", // Less lift, smaller scale
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // More subtle shadow
    zIndex: 2, // Bring hovered tab to front
  },
  borderRight: "1px solid grey",
  "&:last-child": {
    borderRight: "none",
  },
  "& .MuiTabs-scrollButtons": {
    color: "#00CED1", // Make scroll buttons visible
  },

  [theme.breakpoints.only("xs")]: {
    minWidth: "8rem",
    maxWidth: "8rem",
    minHeight: "2.7rem",
    maxHeight: "2.7rem",
    fontSize: 12,
  },
  [theme.breakpoints.only("sm")]: {
    minWidth: "8rem",
    maxWidth: "8rem",
    minHeight: "3rem",
    maxHeight: "3rem",
    fontSize: 14,
  },
  [theme.breakpoints.only("md")]: {
    minWidth: "9rem",
    maxWidth: "9rem",
    minHeight: "3.5rem",
    maxHeight: "3.5rem",
    fontSize: 15,
  },
  [theme.breakpoints.only("lg")]: {
    minWidth: "10rem",
    maxWidth: "10rem",
    minHeight: "3.5rem",
    maxHeight: "3.5rem",
    fontSize: 14.5,
  },
  [theme.breakpoints.only("xl")]: {
    minWidth: "12rem",
    maxWidth: "12rem",
    minHeight: "6rem",
    maxHeight: "6rem",
    fontSize: 20,
  },
}));
