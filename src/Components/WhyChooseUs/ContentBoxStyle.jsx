import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContentMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row", // Align children horizontally
  alignItems: "center", // Center children vertically within the container
  paddingLeft: "17px",
  backgroundColor: "white",
  overflow: "hidden",
  borderRadius: "8px",
  border: "2px solid grey",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  [theme.breakpoints.only("xs")]: {
    minWidth: "36rem",
    maxWidth: "36rem",
    minHeight: "13rem",
    maxHeight: "13rem",
    marginTop: "-0.2rem",
    paddingLeft: "26px",
  },
  [theme.breakpoints.only("sm")]: {
    minWidth: "39rem",
    maxWidth: "39rem",
    minHeight: "19rem",
    maxHeight: "19rem",
    paddingLeft: "28px",
  },
  [theme.breakpoints.only("md")]: {
    minWidth: "39rem",
    maxWidth: "39rem",
    minHeight: "22rem",
    maxHeight: "22rem",
    paddingLeft: "25px",
  },
  [theme.breakpoints.only("lg")]: {
    minWidth: "47rem",
    maxWidth: "47rem",
    minHeight: "19.5rem",
    maxHeight: "19.5rem",
    marginTop: "-0.15rem",
    paddingLeft: "28px",
  },
  [theme.breakpoints.only("xl")]: {
    minWidth: "78rem",
    maxWidth: "78rem",
    minHeight: "31rem",
    maxHeight: "31rem",
    paddingLeft: "50px",
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  position: "relative", // Add this
  display: "flex", // Add this
  flexDirection: "column", // Stack children vertically
  alignItems: "center", // Center children horizontally
  justifyContent: "flex-start", // Align children to the top
  backgroundColor: "transparent",
  overflow: "hidden",
  borderRadius: "15px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  [theme.breakpoints.only("xs")]: {
    minWidth: "12.5rem",
    maxWidth: "12.5rem",
    minHeight: "9.5rem",
    maxHeight: "9.5rem",
  },
  [theme.breakpoints.only("sm")]: {
    minWidth: "14.5rem",
    maxWidth: "14.5rem",
    minHeight: "15rem",
    maxHeight: "15rem",
  },
  [theme.breakpoints.only("md")]: {
    minWidth: "15.5rem",
    maxWidth: "15.5rem",
    minHeight: "17rem",
    maxHeight: "17rem",
  },
  [theme.breakpoints.only("lg")]: {
    minWidth: "16rem",
    maxWidth: "16rem",
    minHeight: "16rem",
    maxHeight: "16rem",
  },
  [theme.breakpoints.only("xl")]: {
    minWidth: "30rem",
    maxWidth: "30rem",
    minHeight: "25rem",
    maxHeight: "25rem",
  },
}));

export const ContentTypographyBox = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  overflow: "hidden",
  borderRadius: "4px",

  [theme.breakpoints.only("xs")]: {
    minWidth: "18rem",
    maxWidth: "18rem",
    minHeight: "10rem",
    maxHeight: "10rem",
    marginLeft: "2rem",
  },
  [theme.breakpoints.only("sm")]: {
    minWidth: "19.5rem",
    maxWidth: "19.5rem",
    minHeight: "14rem",
    maxHeight: "14rem",
    marginLeft: "1.8rem",
  },
  [theme.breakpoints.only("md")]: {
    minWidth: "18.5rem",
    maxWidth: "18.5rem",
    minHeight: "16rem",
    maxHeight: "16rem",
    marginLeft: "1.3rem",
  },
  [theme.breakpoints.only("lg")]: {
    minWidth: "25rem",
    maxWidth: "25rem",
    minHeight: "15rem",
    maxHeight: "15rem",
    marginLeft: "2.2rem",
    marginTop: "3rem",
  },
  [theme.breakpoints.only("xl")]: {
    minWidth: "38rem",
    maxWidth: "38rem",
    minHeight: "25rem",
    maxHeight: "25rem",
    marginLeft: "3rem",
  },
}));

export const ContentTypography = styled(Typography)(({ theme }) => ({
  color: "black",
  fontFamily: "'Arial', sans-serif",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.15)",
  [theme.breakpoints.only("xs")]: {
    marginTop: "1rem",
    fontSize: "1rem", // Smaller font size on small screens
  },
  [theme.breakpoints.only("sm")]: {
    marginTop: "1.7rem",
    fontSize: "1.2rem", // Smaller font size on small screens
  },
  [theme.breakpoints.only("md")]: {
    marginTop: "0.9rem",
    fontSize: "1.3rem", // Medium font size on medium screens
  },
  [theme.breakpoints.only("lg")]: {
    marginTop: "1.4rem",
    fontSize: "1.2rem", // Larger font size on large screens
  },
  [theme.breakpoints.only("xl")]: {
    marginTop: "4rem",
    fontSize: "2rem", // Larger font size on large screens
  },
}));
