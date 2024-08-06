import React from 'react';
import image1 from '../../assests/backgroundDM.jpg';
import image2 from '../../assests/1.jpg';
import './services.css';
import './responsive.css';
import { Typography, Box } from '@mui/material';

const Services = () => {
    return (
        <header>
            <Box className="head-text">
                <Box className="head-image">
                    <img src={image2} alt="Services" />
                </Box>
                <Box className="text-on-image">
                    <Typography variant="subtitle1" className="subtitle">
                        DIVE IN
                    </Typography>
                    <Typography variant="h4" component="h4" className="heading">
                        Digital Marketing Analytics
                    </Typography>
                    <Typography variant="body1" className="body-text">
                        We support leaders to EVOLVE their organizations using our proven Digital marketing analyzing services — helping you achieve a competitive advantage with actionable insights.
                    </Typography>
                </Box>
            </Box>
        </header>
    );
};

export default Services;
