// import React from 'react';
// import { Container, Box, Typography, Divider } from '@mui/material';

// const ConsultingSection = () => {
//   return (
//     <Box sx={{ backgroundColor: '#f5f7f8', py: 8 }}>
//       <Container maxWidth="xl">
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: { xs: 'column', md: 'row' },
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             textAlign: { xs: 'center', md: 'left' },
//             px: { xs: 2, md: 4 }, // Padding for better spacing on smaller screens
//           }}
//         >
//           <Typography
//             variant="h3"
//             component="h1"
//             sx={{
//               flex: 1,
//               fontWeight: 'bold',
//               mb: { xs: 3, md: 0 },
//               fontSize: { xs: '2rem', md: '3rem' }, // Responsive font size
//             }}
//           >
//             Consulting Firm Powered by Analytics
//           </Typography>

//           <Box sx={{ flex: 1, pl: { md: 4 }, textAlign: { xs: 'center', md: 'left' } }}>
//             <Typography
//               variant="body1"
//               sx={{ fontStyle: 'italic', mb: 2 }}
//             >
//               We support leaders to EVOLVE their organizations using our proven analytics consulting services.
//             </Typography>

//             <Typography variant="body1">
//               We’re a growing group of IT professionals providing businesses worldwide with solutions and services of Data Management, Reporting & Visualization, Digital marketing, Automations & Integrations. ANALYZINN will provide you with a steady stream of actionable insights to fuel intelligent technologies; visibility to boost relevance and revenue. And accelerate innovation!
//             </Typography>
//           </Box>
//         </Box>

//         <Divider sx={{ mt: 4 }} />
//       </Container>
//     </Box>
//   );
// }

// export default ConsultingSection;

import React from "react";
import { Container, Box, Typography, Divider } from "@mui/material";
import { consultingSectionStyles as styles } from "./AboutConsultencyScetion.style";
import Footer from "../Footer/footer";
import Navbar from "../NavBar/nav";

const ConsultingSection = () => {
  return (
    <>
      <Navbar />
      <Box sx={styles.section}>
        <Container maxWidth={styles.container.maxWidth}>
          <Box sx={styles.contentBox}>
            <Typography variant="h3" component="h1" sx={styles.heading}>
              Consulting Firm Powered by Analytics
            </Typography>

            <Box sx={styles.textBox}>
              <Typography variant="body1" sx={styles.italicText}>
                We support leaders to EVOLVE their organizations using our
                proven analytics consulting services.
              </Typography>

              <Typography variant="body1">
                We’re a growing group of IT professionals providing businesses
                worldwide with solutions and services of Data Management,
                Reporting & Visualization, Digital marketing, Automations &
                Integrations. ANALYZINN will provide you with a steady stream of
                actionable insights to fuel intelligent technologies; visibility
                to boost relevance and revenue. And accelerate innovation!
              </Typography>
            </Box>
          </Box>

          <Divider sx={styles.divider} />
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ConsultingSection;
