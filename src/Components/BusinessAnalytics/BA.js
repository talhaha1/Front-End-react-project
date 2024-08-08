import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { CSSTransition } from 'react-transition-group';
import './BA.css'; // Import CSS file for animations

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0d47a1', // Dark blue color
    },
    background: {
      default: '#0d47a1', // Dark blue background
      paper: 'rgba(30, 58, 138, 0.8)', // Lighter dark blue with 80% opacity for paper components
    },
    text: {
      primary: '#ffffff', // White text color
    },
  },
});

const serviceData = {
  dataManagement: {
    title: 'Data Management Services',
    content: 'Efficiently organize, store, and retrieve your data to ensure accuracy and accessibility. Database Systems Automation. Quality Control. Data Integration & Warehousing. Transformation.',
    imageUrl: 'https://cdn.sanity.io/images/tlr8oxjg/production/22c3b048689e6b8cd048157c7eb3c01cce769a41-1456x816.png',
  },
  marketingAnalytics: {
    title: 'Marketing Analytics',
    content: 'Analyze marketing data to optimize your strategies and improve campaign performance.',
    imageUrl: 'https://assets.datamation.com/uploads/2023/08/dm08172023-what-is-data-analytics.png',
  },
  dataAnalysis: {
    title: 'Data Analysis & Visualization',
    content: 'Transform raw data into meaningful insights through comprehensive analysis and visualization techniques.',
    imageUrl: 'https://t4.ftcdn.net/jpg/04/05/52/61/360_F_405526181_yxc75HJCfDxdvw6AWgeMBahkw4Nfu7Oi.jpg',
  }
};

const BA = () => {
  const [selectedService, setSelectedService] = useState('dataManagement');
  const [animationKey, setAnimationKey] = useState(Date.now()); // Ensure new key on change

  const handleServiceChange = (service) => {
    setSelectedService(service);
    setAnimationKey(Date.now()); // Change the key to trigger animation
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-d-rendering-of-data-analysis-circle-graph-on-blue-background-for-image_3739793.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1
      }} />
      <Box sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)' // Black overlay with 60% opacity
      }} />
      <Container maxWidth="lg" sx={{ padding: 4, position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Business Analytics
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Empowering your business with data-driven insights and strategies.
        </Typography>
        <Grid container spacing={7}>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ padding: 2, backgroundColor: 'rgba(30, 58, 138, 0.2)', height: '300px' }}>
              <Typography variant="h6">Services</Typography>
              <Button fullWidth variant="contained" sx={{ marginTop: 1 }} onClick={() => handleServiceChange('dataManagement')}>
                Data Management Services
              </Button>
              <Button fullWidth variant="contained" sx={{ marginTop: 3 }} onClick={() => handleServiceChange('marketingAnalytics')}>
                Marketing Analytics
              </Button>
              <Button fullWidth variant="contained" sx={{ marginTop: 3 }} onClick={() => handleServiceChange('dataAnalysis')}>
                Data Analysis & Visualization
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} md={9}>
            <CSSTransition
              key={animationKey}
              in={true}
              timeout={300}
              classNames="slide"
              unmountOnExit
            >
              <Paper elevation={3} sx={{ padding: 2, backgroundColor: 'rgba(30, 58, 138, 0.2)', position: 'relative', overflow: 'hidden' }}>
                <Typography variant="h5" gutterBottom>
                  {serviceData[selectedService].title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {serviceData[selectedService].content}
                </Typography>
                <img src={serviceData[selectedService].imageUrl} alt={serviceData[selectedService].title} style={{ width: '100%', marginBottom: '16px' }} />
                <Paper elevation={2} sx={{ padding: 2, backgroundColor: 'rgba(51, 65, 85, 0.8)' }}>
                  <Typography variant="h6" gutterBottom>
                    Driving Business Growth
                  </Typography>
                  <Typography variant="body1">
                    Experience the power of data with our expert analytics solutions. From data management to visualization, we provide the tools you need to make informed business decisions.
                  </Typography>
                </Paper>
                <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                  Why Choose Us for Business Analytics?
                </Typography>
                <Typography variant="body1">
                  <ul>
                    <li>Experienced Analysts: Our team of experts brings years of experience in data analysis and business intelligence.</li>
                    <li>Customized Solutions: We tailor our services to meet your unique business needs and objectives.</li>
                    <li>Proven Results: Our data-driven approach ensures measurable improvements in your business performance.</li>
                  </ul>
                </Typography>
              </Paper>
            </CSSTransition>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default BA;