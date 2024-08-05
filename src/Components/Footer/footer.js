import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1} sx={{ color: 'white' }}>
      {'Copyright © '}
      <Link href="https://mui.com/" sx={{ color: 'white' }}>Analyzinn&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'black',
        color: 'white',
        py: { xs: 8, sm: 10 },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { md: 'space-between' },
            alignItems: { md: 'center' },
            width: '100%',
            mb: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              mb: { xs: 4, md: 0 },
              mr: { md: 8 },
            }}
          >
            <Typography variant="body2" color="text.secondary" mt={2} sx={{ color: 'white' }}>
              Guaranteed Satisfaction. Everytime!
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ color: 'white' }}
            >
              <IconButton
                color="inherit"
                href="https://www.facebook.com/analyzinn"
                aria-label="Facebook"
                sx={{ alignSelf: 'center', color: 'white' }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.linkedin.com/company/analyzinn/"
                aria-label="LinkedIn"
                sx={{ alignSelf: 'center', color: 'white' }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                href="mailto:admin@analyzinn.com"
                aria-label="Email"
                sx={{ alignSelf: 'center', color: 'white' }}
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>

          {/* Information Sections */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            {/* Services Section */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography variant="body2" fontWeight={600} sx={{ color: 'white' }}>
                Services
              </Typography>
              <Link color="text.secondary" href="/" sx={{ color: 'white' }}>
                Business Analytics
              </Link>
              <Link color="text.secondary" href="/" sx={{ color: 'white' }}>
                Digital Marketing
              </Link>
              <Link color="text.secondary" href="/" sx={{ color: 'white' }}>
                Automation and Integration
              </Link>
            </Box>

            {/* Company Section */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography variant="body2" fontWeight={600} sx={{ color: 'white' }}>
                Company
              </Typography>
              <Link color="text.secondary" href="./AboutUs" sx={{ color: 'white' }}>
                About
              </Link>
              <Link color="text.secondary" href="#" sx={{ color: 'white' }}>
                Career
              </Link>
              <Link color="text.secondary" href="/feedback" sx={{ color: 'white' }}>
                Contact Us
              </Link>
            </Box>

            {/* Address Section */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography variant="body2" fontWeight={600} sx={{ color: 'white' }}>
                Address
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                13th Street, Lubbock, Texas, United States.<br />
                admin@analyzinn.com
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Footer Bottom */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { md: 'space-between' },
            pt: { xs: 4, sm: 8 },
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
            color: 'white',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: { xs: 2, md: 0 },
            }}
          >
            <Link color="text.secondary" href="/" sx={{ color: 'white' }}>
              Privacy Policy
            </Link>
            <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5, color: 'white' }}>
              &nbsp;•&nbsp;
            </Typography>
            <Link color="text.secondary" href="/" sx={{ color: 'white' }}>
              Terms of Service
            </Link>
          </Box>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}
