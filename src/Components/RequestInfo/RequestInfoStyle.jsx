import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
export const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "",
  minHeight: "100vh",
  minWidth: "100vw",
  padding: 0, // Ensure no padding
  margin: 0, // Ensure no margin
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start", // Align items to the start (left) of the container
  overflow: "hidden",
  boxSizing: "border-box",
  [theme.breakpoints.only("xs")]: {
    minHeight: "112vh",
    maxHeight: "112vh",
    flexDirection: "column",
    marginTop: "1.5rem",
  },
  [theme.breakpoints.only("sm")]: {
    minHeight: "137vh",
    maxHeight: "137vh",
    flexDirection: "column",
  },
  [theme.breakpoints.only("md")]: {
    minHeight: "80vh",
    maxHeight: "80vh",
  },

  [theme.breakpoints.only("lg")]: {
    minHeight: "94vh",
    maxHeight: "94vh",
  },
  [theme.breakpoints.only("xl")]: {
    minHeight: "100vh",
    maxHeight: "100vh",
  },
}));

export const HeadingTypography = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  marginBottom: "2rem",
  paddingTop: "2rem",

  color: "black",
  fontWeight: "bold",
  fontFamily: "Helvetica, sans-serif",
  fontSize: "2.9rem", // Default for extra small devices
  marginLeft: "2rem",
  marginTop: "0rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "4.5rem", // small devices
    marginLeft: "0rem",
    marginTop: "0rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4rem", // medium devices
    marginLeft: "0rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.9rem", // large devices
    marginLeft: "0rem",
    marginTop: "-1rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "6rem", // extra large devices
    marginLeft: "0rem",
  },
  maxWidth: "100%",
  position: "relative", // Necessary for the ::after pseudo-element
  "&::after": {
    content: '""',
    display: "block",
    width: "100%", // Make it span the full width of the heading
    height: "4px", // Thickness of the underline
    backgroundColor: "#007bff", // Color of the underline
    position: "absolute",
    bottom: "-0.5rem", // Position it just below the text
    left: "0",
  },
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "2rem",
  marginTop: "8rem",
  marginLeft: "-13rem",
  borderRadius: "5px",
  border: "1.5px solid black",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start", // Align items to the start (left) of the container
  overflow: "hidden",
  flexDirection: "column",
  [theme.breakpoints.only("xs")]: {
    minHeight: "27rem",
    minWidth: "62rem",
    maxWidth: "62rem",
    marginLeft: "1rem",
    marginTop: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "2rem",
    marginTop: "3rem",
    marginLeft: "0.4rem",
    minHeight: "44rem",
    minWidth: "30rem",
    maxWidth: "64rem",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "1.5rem",
    marginLeft: "1rem",
    minHeight: "61rem",
    maxWidth: "28rem", // Ensure this is the desired width
    padding: "1rem",
    minWidth: "28rem",
  },
  [theme.breakpoints.up("lg")]: {
    // padding: "10rem",
    marginTop: "2.5rem",
    marginLeft: "2.5rem",
    minHeight: "26.5rem",
    maxWidth: "35rem",
    minWidth: "35rem",
  },
  [theme.breakpoints.up("xl")]: {
    //padding: "28rem",
    marginTop: "5rem",
    marginLeft: "1rem",
    minHeight: "58rem",
    maxWidth: "61rem",
    minWidth: "61rem",
  },
}));

export const ContentTypography2 = styled(Typography)(({ theme }) => ({
  color: "black",
  fontFamily: "Helvetica, sans-serif",
  marginBottom: "1rem",
  fontSize: "1.4rem",
  lineHeight: 1.5,
  paddingTop: "1rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
    lineHeight: 1.9,
    paddingTop: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
    lineHeight: 1.7,
    paddingTop: "4rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.2rem",
    lineHeight: 1.5,
    marginTop: "-2rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2.6rem",
    lineHeight: 1.7,
    paddingTop: "2rem",
  },
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: "2rem",
  marginTop: "8rem",
  borderRadius: "5px",

  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start", // Align items to the start (left) of the container
  //overflow: "hidden",
  flexDirection: "column",
  [theme.breakpoints.only("xs")]: {
    minHeight: "42rem",
    minWidth: "26rem",
    marginLeft: "0rem",
    marginTop: "1rem",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "2rem",
    marginTop: "3.5rem",
    marginLeft: "1rem",
    minHeight: "49rem",
    minWidth: "45rem",
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "-3rem",
    marginLeft: "0rem",
    minHeight: "77rem",
    maxWidth: "28rem", // Ensure this is the desired width
    padding: "1rem",
    minWidth: "28rem",
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: "4.3rem",
    marginLeft: "0.5rem",
    minHeight: "30rem",
    maxHeight: "30rem",
    maxWidth: "45rem",
    minWidth: "45rem",
  },
  [theme.breakpoints.up("xl")]: {
    marginTop: "8.5rem",
    marginLeft: "0rem",
    minHeight: "67rem",
    maxHeight: "63rem",
    maxWidth: "61rem",
    minWidth: "61rem",
  },
}));

export const FormAlignmentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  color: "black",
  [theme.breakpoints.up("xs")]: {
    paddingRight: "29%",
    marginTop: "-3rem",
    minWidth: "50rem",
    maxWidth: "50rem",
    marginRight: "10rem",
  },
  [theme.breakpoints.up("md")]: {
    paddingRight: "31%",
    marginTop: "20rem",
    minWidth: "50rem",
    maxWidth: "50rem",
    marginRight: "18rem",
  },
  [theme.breakpoints.up("lg")]: {
    paddingRight: "4%",
    marginTop: "-1.5rem",
  },
  [theme.breakpoints.up("xl")]: {
    paddingRight: "8%",
    minWidth: "50rem",
    maxWidth: "50rem",
    marginTop: "-0rem",
    maxHeight: "90rem",
    minHeight: "90rem",
  },
}));

export const FormContainer1 = styled(Box)(({ theme }) => ({
  width: "80%", // Decreased width
  maxWidth: "500px", // You can adjust this value
  marginTop: theme.spacing(4),
  color: "black",
  [theme.breakpoints.down("xs")]: {
    width: "100%", // Full width on small screens
    marginRight: "10rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Full width on small screens
  },
  [theme.breakpoints.up("md")]: {
    width: "100%", // Full width on small screens
    marginRight: "13rem",
  },
  [theme.breakpoints.down("lg")]: {
    width: "70%", // Full width on small screens
    // marginTop: "10rem",
  },
  [theme.breakpoints.up("xl")]: {
    maxHeight: "60rem",
    minHeight: "60rem",
    width: "70%", // Full width on small screens
  },
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: "0.875rem",
  fontWeight: "bold",
  textAlign: "left",
  marginTop: "-1rem",
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.3rem",
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "#007bff",
  padding: theme.spacing(1, 4),
  borderRadius: "5px",

  [theme.breakpoints.up("xs")]: {
    minWidth: "40rem",
    border: `1px solid #007bff`,
    fontSize: "1rem",
    marginRight: "3rem",
  },
  [theme.breakpoints.up("sm")]: {
    minWidth: "40rem",
    border: `1px solid #007bff`,
    fontSize: "1.5rem",
    marginRight: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: "27rem",
    border: `1px solid #007bff`,
    fontSize: "1.3rem",
    marginRight: "3rem",
  },
  [theme.breakpoints.up("lg")]: {
    minWidth: "31rem",
    border: `1px solid #007bff`,
    fontSize: "1.1rem",
    marginRight: "3rem",
  },
  [theme.breakpoints.up("xl")]: {
    minWidth: "55rem",
    border: `2px solid #007bff`,
    fontSize: "2rem",

    fontSize: "2.3rem",
  },
  "&:hover": {
    backgroundColor: "#0056b3",
  },
}));

export const FormField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: "5px",
  backgroundColor: "white", // Set background to white for the input
  border: `1.5px solid black`,
  "& .MuiOutlinedInput-root": {
    boxShadow: "none",
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#007bff",
    backgroundColor: "transparent", // Ensure label background is transparent
    padding: theme.spacing(0, 1), // Add padding for better readability
    transform: "translate(14px, 12px) scale(1)", // Adjust position when not focused
    "&.MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(0.75)", // Adjust position when focused or shrunk
    },
    [theme.breakpoints.only("xs")]: {
      fontSize: "1.2rem", // Larger font size on large screens
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: "1.5rem", // Larger font size on large screens
    },
    [theme.breakpoints.only("md")]: {
      fontSize: "1.3rem", // Larger font size on large screens
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.1rem", // Larger font size on large screens
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.3rem", // Larger font size on large screens
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "black", // Set text color to black for better readability
  },
  [theme.breakpoints.up("xs")]: {
    minHeight: "4rem",
    minWidth: "40rem",
    marginRight: "30rem",
  },
  [theme.breakpoints.up("md")]: {
    minHeight: "4rem",
    minWidth: "27rem",
    maxWidth: "27rem",
    marginRight: "30rem",
  },
  [theme.breakpoints.up("lg")]: {
    minHeight: "4rem",
    minWidth: "31rem",
    maxWidth: "31rem",
    marginRight: "30rem",
  },
  [theme.breakpoints.up("xl")]: {
    minHeight: "10rem",
    minWidth: "55rem",
  },
}));

export const ClickHereToScheduleButton = styled(Button)(({ theme }) => ({
  //backgroundColor: "#CCCCCC",
  backgroundColor: "white",
  color: "#007bff",
  padding: theme.spacing(1, 4),
  borderRadius: "5px",
  border: `2px solid #007bff`,
  [theme.breakpoints.up("xs")]: {
    minWidth: "40rem",
    border: `1px solid #007bff`,
    fontSize: "1.2rem",
    marginRight: "1rem",
    marginTop: "1.4rem",
    marginLeft: "10rem",
  },
  [theme.breakpoints.only("sm")]: {
    minWidth: "40rem",
    border: `1px solid #007bff`,
    fontSize: "1.5rem",
    marginRight: "1rem",
    marginTop: "2.5rem",
    marginLeft: "10rem",
    minHeight: "4rem",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: "23rem",
    border: `1px solid #007bff`,
    fontSize: "1.3rem",
    marginTop: "4rem",
    marginLeft: "1.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    minWidth: "31rem",
    border: `1px solid #007bff`,
    fontSize: "1.1rem",
    marginRight: "5rem",
    marginTop: "3.8rem",
    marginLeft: "0.7rem",
  },
  [theme.breakpoints.up("xl")]: {
    minWidth: "55rem",
    border: `2px solid #007bff`,
    fontSize: "2.3rem",
    marginTop: "3rem",
  },
  "&:hover": {
    backgroundColor: "#0056b3",
  },
}));
