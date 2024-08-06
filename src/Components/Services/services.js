import React from 'react';
import image1 from '../../assests/backgroundDM.jpg';
import './services.css';
import { Typography, Box } from '@mui/material';

const Services = () => {
    return (
        <header>
            <Box className="head-text">
                <Box className="head-image">
                    <img src={image1} alt="Services" />
                </Box>
                <Box className="text-on-image">
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontSize: {
                                xs: '1rem',
                                sm: '1.2rem',
                                md: '1.4rem',
                                lg: '1.6rem',
                                xl: '2rem',
                            },
                        }}
                    >
                        DIVE IN
                    </Typography>
                    <Typography
                        variant="h2"
                        component="h1"
                        className="heading"
                        sx={{
                            fontSize: {
                                xs: '1.6rem',
                                sm: '2.3rem',
                                md: '2.8rem',
                                lg: '3.4rem',
                                xl: '4rem',
                            },
                            fontWeight: 'bold',
                            marginTop: '8px', // Add space between subtitle and heading
                        }}
                    >
                        Digital Marketing Analytics
                    </Typography>
                    <Typography
                        variant="body1"
                        className="body-text"
                        sx={{
                            fontSize: {
                                xs: '0.8rem',
                                sm: '0.9rem',
                                md: '1rem',
                                lg: '1.1rem',
                                xl: '1.2rem',
                            },
                            marginTop: '16px', // Space between heading and body text
                        }}
                    >
                        We support leaders to EVOLVE their organizations using our proven Digital marketing analyzing services — helping you achieve a competitive advantage with actionable insights.
                    </Typography>
                </Box>
            </Box>
        </header>
    );
};

export default Services;
