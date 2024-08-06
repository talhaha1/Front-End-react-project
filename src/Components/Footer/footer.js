// Footer.js
import React from 'react';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
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
            <div>
              <IconButton
                href="https://www.facebook.com/analyzinn"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/company/analyzinn/"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="mailto:admin@analyzinn.com"
                aria-label="Email"
              >
                <EmailIcon />
              </IconButton>
            </div>
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
              <FooterLink href="#">Career</FooterLink>
              <FooterLink href="/feedback">Contact Us</FooterLink>
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
