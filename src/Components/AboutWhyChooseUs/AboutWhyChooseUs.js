import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import img from "../../assets/AbourWhyChooseUs/image.png";
import Nav from "../NavBar/nav";
// import Footer from "../Footer/Footer";

const WhyChooseUs = () => {
    return (
        <div>
            <Nav />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: { xs: '20px', md: '30px 20px' },
                    minHeight: 'calc(80vh - 80px)', // Reduced height
                    boxSizing: 'border-box',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}
                >
                    <Grid item xs={12} md={5}>
                        <img 
                            src={img}
                            alt="Business Meeting"
                            style={{ width: '100%' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Why Choose Us?
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.5 }}>
                            We partner with our clients, take full ownership of their business needs and devise
                            tailored solutions for their unique requirements. Our solutions are result-oriented,
                            technology driven, with end-to-end implementations including Digital Marketing, BI
                            frameworks, and strategic consultancy.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        marginTop: '20px',
                        maxWidth: '1200px',
                        margin: '20px auto 0',
                    }}
                >
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" sx={{ textAlign: 'left' }}>▸ Business Intelligence</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" sx={{ textAlign: 'left' }}>▸ Digital Marketing</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" sx={{ textAlign: 'left' }}>▸ Data Analytics & Visualization</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" sx={{ textAlign: 'left' }}>▸ Automation and Integrations</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" sx={{ textAlign: 'left' }}>▸ Data Management & Data Engineering</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" sx={{ textAlign: 'left' }}>▸ Business Information Systems</Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default WhyChooseUs;
