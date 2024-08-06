import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const FooterBox = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: 'black',
  color: 'white',
  padding: theme.spacing(8, 2),
}));

export const FooterContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1000px', // Adjust the maxWidth as needed
  margin: '0 auto', // Center the container horizontally
});

export const TopSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  width: '100%',
  marginBottom: theme.spacing(4),
}));

export const InfoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    marginBottom: 0,
  },
}));

export const InfoSections = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

export const SectionBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
});

export const FooterBottom = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(4),
  width: '100%',
  borderTop: '1px solid',
  borderColor: 'divider',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const FooterLink = styled(Link)({
  color: 'white',
});

export const FooterTypography = styled(Typography)({
  color: 'white',
});
