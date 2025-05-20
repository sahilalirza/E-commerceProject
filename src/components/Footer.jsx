import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // <- use this instead of MUI's Link

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1a1a1a', color: '#fff', py: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{display:'flex',justifyContent:'space-around'}}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6"sx={{fontWeight:'bold'}} gutterBottom>
              MyShop
            </Typography>
            <Typography variant="body2">
              Your one-stop destination for trendy fashion.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Shop
            </Typography>
            <Link to="/men" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>Men</Link>
            <Link to="/women" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>Women</Link>
            <Link to="/kids" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>Kids</Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>Contact Us</Link>
            <Link to="/faqs" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>FAQs</Link>
            <Link to="/returns" style={{ color: 'inherit', textDecoration: 'none', display: 'block' }}>Returns</Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" href="#"><Facebook /></IconButton>
              <IconButton color="inherit" href="#"><Twitter /></IconButton>
              <IconButton color="inherit" href="#"><Instagram /></IconButton>
              <IconButton color="inherit" href="#"><LinkedIn /></IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} MyShop. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

