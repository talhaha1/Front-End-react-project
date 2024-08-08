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
    minHeight: "102vh",
    flexDirection: "column",
    marginTop: "1.5rem",
  },
  [theme.breakpoints.only("sm")]: {
    minHeight: "144vh",
    flexDirection: "column",
  },
  [theme.breakpoints.only("md")]: {
    minHeight: "90vh",
    maxHeight: "90vh",
  },

  [theme.breakpoints.only("lg")]: {
    minHeight: "90vh",
    maxHeight: "90vh",
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
  backgroundColor: "#CCCCCC",
  padding: "2rem",
  marginTop: "8rem",
  marginLeft: "-13rem",
  borderRadius: "5px",

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
    marginLeft: "1.2rem",
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

// export const ContentTypography1 = styled(Typography)(({ theme }) => ({
//   color: "white",
//   fontFamily: "Helvetica, sans-serif",
//   marginBottom: "1rem",
//   fontWeight: "bold",
//   fontSize: "2.1rem",
//   lineHeight: 1.3,
//   [theme.breakpoints.up("sm")]: {
//     fontSize: "2.6rem",
//     lineHeight: 1.4,
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "3rem",
//     lineHeight: 1.4,
//   },
//   [theme.breakpoints.up("lg")]: {
//     fontSize: "2.1rem",
//     lineHeight: 1.2,
//   },
//   [theme.breakpoints.up("xl")]: {
//     fontSize: "3.9rem",
//     lineHeight: 1.4,
//   },
// }));

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

// export const ContentTypography3 = styled(Typography)(({ theme }) => ({
//   color: "white",
//   fontFamily: "Helvetica, sans-serif",
//   fontWeight: "bold",
//   marginBottom: "1rem",
//   fontSize: "1.1rem",

//   paddingTop: "4rem",
//   [theme.breakpoints.up("sm")]: {
//     fontSize: "1.5rem",
//     paddingTop: "6rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     fontSize: "1.6rem",
//     paddingTop: "3rem",
//   },
//   [theme.breakpoints.up("lg")]: {
//     fontSize: "1.1rem",
//     paddingTop: "2.2rem",
//   },
//   [theme.breakpoints.up("xl")]: {
//     fontSize: "2.0rem",
//     lineHeight: 1.9,
//     paddingTop: "7rem",
//   },
// }));

// export const IconContainer = styled(Box)(({ theme }) => ({
//   display: "flex",
//   marginLeft: "1.2rem",
//   marginTop: "-1rem",
//   "& > *": {
//     marginRight: "1rem",
//     fontSize: "2rem",
//   },
//   [theme.breakpoints.up("sm")]: {
//     marginTop: "-0.8rem",
//     marginLeft: "2.3rem",
//   },
//   [theme.breakpoints.up("md")]: {
//     marginTop: "0rem",
//     marginLeft: "2.7rem",
//   },
//   [theme.breakpoints.up("lg")]: {
//     marginTop: "-1rem",
//     marginLeft: "0.7rem",
//   },
//   [theme.breakpoints.up("xl")]: {
//     marginTop: "-1rem",
//     marginLeft: "3.7rem",
//   },
// }));

// export const FullWidthBox = styled(Box)(({ theme }) => ({
//   backgroundColor: "white",
//   width: "99vw",
//   display: "flex",
//   flexDirection: "row", // Align items side by side
//   justifyContent: "space-between", // Distribute space between items
//   alignItems: "center",
//   padding: "1rem",
//   [theme.breakpoints.only("xs")]: {
//     height: "22vh", // Adjust height for extra small screens
//     flexDirection: "column",
//   },
//   [theme.breakpoints.up("sm")]: {
//     flexDirection: "column",
//     height: "26vh", // Adjust height for small screens
//   },
//   [theme.breakpoints.up("md")]: {
//     flexDirection: "row",
//     height: "29vh", // Adjust height for medium screens
//   },
//   [theme.breakpoints.up("lg")]: {
//     flexDirection: "row",
//     height: "15vh", // Adjust height for large screens
//     width: "70vw",
//   },
//   [theme.breakpoints.up("xl")]: {
//     flexDirection: "row",
//     height: "22vh", // Adjust height for extra-large screens
//   },
// }));

// export const LocationBox = styled(Box)(({ theme }) => ({
//   backgroundColor: "white",
//   minHeight: "10vh",
//   minWidth: "10vw",
//   marginTop: "2rem",
//   display: "flex",
//   justifyContent: "flex-start",
//   alignItems: "flex-start", // Align items to the start (left) of the container
//   overflow: "hidden",
//   boxSizing: "border-box",
//   [theme.breakpoints.only("xs")]: {
//     minHeight: "9vh",
//     maxHeight: "9vh",
//     minWidth: "90vw",
//     maxWidth: "40vw",
//     marginTop: "0rem",
//     marginLeft: "0rem",
//   },
//   [theme.breakpoints.only("sm")]: {
//     minHeight: "9vh",
//     maxHeight: "9vh",
//     minWidth: "90vw",
//     maxWidth: "90vw",
//     marginTop: "1.5rem",
//     marginRight: "1.5rem",
//   },
//   [theme.breakpoints.only("md")]: {
//     minHeight: "9vh",
//     maxHeight: "9vh",
//     minWidth: "47vw",
//     maxWidth: "47vw",
//     marginBottom: "15rem",
//     marginRight: "1.5rem",
//   },
//   [theme.breakpoints.only("lg")]: {
//     minHeight: "12vh",
//     minWidth: "35vw",
//     maxWidth: "35vw",
//     marginTop: "1rem",
//     marginLeft: "6.5rem",
//   },
//   [theme.breakpoints.only("xl")]: {
//     minHeight: "15vh",
//     minWidth: "45vw",
//     maxWidth: "45vw",
//     marginTop: "1rem",
//     marginLeft: "7.5rem",
//   },
// }));

// export const EmailBox = styled(Box)(({ theme }) => ({
//   backgroundColor: "white",
//   minHeight: "10vh",
//   minWidth: "10vw",
//   marginTop: "2rem",
//   display: "flex",
//   justifyContent: "flex-start",
//   alignItems: "flex-start", // Align items to the start (left) of the container
//   overflow: "hidden",
//   boxSizing: "border-box",
//   [theme.breakpoints.only("xs")]: {
//     minHeight: "9vh",
//     maxHeight: "9vh",
//     minWidth: "90vw",
//     maxWidth: "40vw",
//     marginTop: "1.5rem",
//     marginBottom: "4rem",
//     marginLeft: "0rem",
//   },
//   [theme.breakpoints.only("sm")]: {
//     minHeight: "9vh",
//     maxHeight: "9vh",
//     minWidth: "90vw",
//     maxWidth: "90vw",
//     marginBottom: "4.5rem",
//     marginRight: "1.5rem",
//   },
//   [theme.breakpoints.only("md")]: {
//     minHeight: "9vh",
//     maxHeight: "9vh",
//     minWidth: "47vw",
//     maxWidth: "47vw",
//     marginBottom: "15rem",
//     marginRight: "1.5rem",
//   },
//   [theme.breakpoints.only("lg")]: {
//     minHeight: "12vh",
//     minWidth: "35vw",
//     maxWidth: "35vw",
//     marginTop: "-0.5rem",
//     marginLeft: "7rem",
//     marginRight: "5rem",
//   },
//   [theme.breakpoints.only("xl")]: {
//     minHeight: "15vh",
//     minWidth: "40vw",
//     maxWidth: "40vw",
//     marginTop: "1rem",
//     marginLeft: "7rem",
//     marginRight: "5rem",
//   },
// }));

// export const TypographyLocationAndEmailHeading = styled(Typography)(
//   ({ theme }) => ({
//     color: "black",
//     fontFamily: "Helvetica, sans-serif",
//     fontWeight: "bold",
//     fontSize: "1.4rem",
//     marginRight: "11rem",
//     [theme.breakpoints.up("sm")]: {
//       fontSize: "1.8rem",
//       marginRight: "27rem",
//     },
//     [theme.breakpoints.up("md")]: {
//       fontSize: "1.8rem",
//       marginRight: "24rem",
//     },
//     [theme.breakpoints.up("lg")]: {
//       fontSize: "1.1rem",
//       marginRight: "17rem",
//     },
//     [theme.breakpoints.up("xl")]: {
//       fontSize: "3.0rem",
//       marginTop: "-0.4rem",
//       marginRight: "27rem",
//     },
//   })
// );

// export const ContentTypographyLocation = styled(Typography)(({ theme }) => ({
//   color: "black",
//   fontFamily: "Helvetica, sans-serif",
//   fontSize: "1.1rem",
//   marginRight: "6rem",
//   [theme.breakpoints.up("sm")]: {
//     fontSize: "2rem",
//     marginRight: "1rem",
//   },

//   [theme.breakpoints.up("md")]: {
//     fontSize: "1.9rem",
//     marginRight: "6rem",
//   },
//   [theme.breakpoints.up("lg")]: {
//     fontSize: "1.3rem",
//     marginTop: "0.6rem",
//     marginRight: "4rem",
//   },
//   [theme.breakpoints.up("xl")]: {
//     fontSize: "2.5rem",
//   },
// }));

// export const ContentTypographyEmail = styled(Typography)(({ theme }) => ({
//   color: "black",
//   fontFamily: "Helvetica, sans-serif",
//   fontSize: "1.1rem",
//   marginRight: "3rem",
//   [theme.breakpoints.up("sm")]: {
//     fontSize: "2rem",
//     marginRight: "12rem",
//   },

//   [theme.breakpoints.up("md")]: {
//     fontSize: "1.9rem",
//     marginLeft: "1rem",
//   },
//   [theme.breakpoints.up("lg")]: {
//     fontSize: "1.3rem",
//     marginTop: "0.6rem",
//     marginRight: "7rem",
//   },
//   [theme.breakpoints.up("xl")]: {
//     fontSize: "2.5rem",
//     marginRight: "10rem",
//   },
// }));

export const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  padding: "2rem",
  marginTop: "8rem",
  borderRadius: "5px",

  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start", // Align items to the start (left) of the container
  overflow: "hidden",
  flexDirection: "column",
  [theme.breakpoints.only("xs")]: {
    minHeight: "42rem",
    minWidth: "26rem",
    marginLeft: "0rem",
    marginTop: "3rem",
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
    marginTop: "-1rem",
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
  [theme.breakpoints.up("md")]: {
    minWidth: "27rem",
    border: `1px solid #007bff`,
    fontSize: "1rem",
    marginRight: "3rem",
  },
  [theme.breakpoints.up("lg")]: {
    minWidth: "31rem",
    border: `1px solid #007bff`,
    fontSize: "1rem",
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
  backgroundColor: "#CCCCCC", // Set background to white for the input
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
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.2rem", // Larger font size on large screens
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.8rem", // Larger font size on large screens
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
  backgroundColor: "white",
  color: "#007bff",
  padding: theme.spacing(1, 4),
  borderRadius: "5px",

  [theme.breakpoints.up("xs")]: {
    minWidth: "40rem",
    border: `1px solid #007bff`,
    fontSize: "1rem",
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
    fontSize: "1rem",
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
