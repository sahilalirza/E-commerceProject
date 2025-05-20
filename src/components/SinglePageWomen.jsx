import { Typography } from '@mui/material'
import Footer from './Footer'
import './SinglePageMen.css'
import {Button} from '@mui/material'
import Women from './Women'

const SinglePageWomen = () => {
  return (
    <div className='container-single'>
        <div className='banner' style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }}>
    <Typography 
      variant='h1' 
      sx={{ 
        color: 'white', 
        textAlign: 'center', 
        fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } 
      }}
    >
      Women Collection Arrival
    </Typography>
    <Button 
      variant='contained' 
      color='success' 
      sx={{ 
        width: { xs: '60%', sm: '40%', md: '20%', lg: '10%' }, 
        marginTop: '20px',
        fontSize: { xs: '0.8rem', sm: '1rem' }
      }}
    >
      Shop Now
    </Button>
  </div>
        <Women/>
        <Footer/>
    </div>
  )
}

export default SinglePageWomen