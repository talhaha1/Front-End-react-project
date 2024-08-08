import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './responsive.css';

import {
  FooterBox,
  FooterContainer,
  TopSection,
  InfoSection,
  InfoSections,
  SectionBox,
  FooterBottom,
  FooterLink,
  FooterTypography,
} from './style';

function Copyright() {
  return (
    <FooterTypography variant="body2" mt={1}>
      {'Copyright © '}
      <FooterLink href="https://mui.com/">Analyzinn&nbsp;</FooterLink>
      {new Date().getFullYear()}
    </FooterTypography>
  );
}

export default function Footer() {
  return (
    <FooterBox>
      <FooterContainer>
        <TopSection>
          <InfoSection>
            <FooterTypography variant="body2" mt={2}>
              Guaranteed Satisfaction. Everytime!
            </FooterTypography>
            <Box className="icon-box">
              <IconButton
                href="https://www.facebook.com/analyzinn"
                aria-label="Facebook"
                sx={{ color: '#fff' }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/company/analyzinn/"
                aria-label="LinkedIn"
                sx={{ color: '#fff' }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="mailto:admin@analyzinn.com"
                aria-label="Email"
                sx={{ color: '#fff' }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </InfoSection>

          <InfoSections>
            <SectionBox>
              <FooterTypography variant="body2" fontWeight={600}>
                Services
              </FooterTypography>
              <FooterLink href="/">Business Analytics</FooterLink>
              <FooterLink href="/">Digital Marketing</FooterLink>
              <FooterLink href="/">Automation and Integration</FooterLink>
            </SectionBox>

            <SectionBox>
              <FooterTypography variant="body2" fontWeight={600}>
                Company
              </FooterTypography>
              <FooterLink href="./AboutUs">About</FooterLink>
              <FooterLink href="https://www.linkedin.com/company/analyzinn/">Career</FooterLink>
              <FooterLink href="/Contact">Contact Us</FooterLink>
            </SectionBox>

            <SectionBox>
              <FooterTypography variant="body2" fontWeight={600}>
                Address
              </FooterTypography>
              <FooterTypography variant="body2">
                13th Street, Lubbock, Texas, United States.<br />
                admin@analyzinn.com
              </FooterTypography>
            </SectionBox>
          </InfoSections>
        </TopSection>

        <FooterBottom>
          <div>
            <FooterLink href="/">Privacy Policy</FooterLink>
            <FooterTypography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
              &nbsp;•&nbsp;
            </FooterTypography>
            <FooterLink href="/">Terms of Service</FooterLink>
          </div>
          <Copyright />
        </FooterBottom>
      </FooterContainer>
    </FooterBox>
  );
}
