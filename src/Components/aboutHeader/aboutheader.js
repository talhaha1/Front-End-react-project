import React from 'react';
import { Box, Typography } from '@mui/material';
import Navbar from '../NavBar/nav';

const AboutHeader = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: '150px', sm: '180px', md: '200px' }, // Responsive height
                bgcolor: '#000',
                p: { xs: 2, sm: 3 }, // Responsive padding
            }}
        >
            <Navbar />
            <Box
                sx={{
                    width: '100%',
                    textAlign: 'center',
                    mt: 3, // Margin-top for spacing below navbar
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '8vw', sm: '6vw', md: '4vw' }, // Responsive font size
                        color: '#fff',
                        lineHeight: 1.2,
                    }}
                >
                    About
                </Typography>
            </Box>
        </Box>
    );
};

export default AboutHeader;
