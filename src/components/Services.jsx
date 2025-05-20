import { Grid, Typography } from '@mui/material'
import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const Services = () => {
  return (
    <Grid  mt={10} container spacing={2} sx={{textAlign:'center', marginLeft:'50px',marginRight:'50px'}}>
        <Grid size={{xs:12 ,lg:4}}>
           <LocalShippingOutlinedIcon sx={{fontSize:'8rem' ,opacity:0.2}}/>
           <Typography variant='h5' mt={1} sx={{fontWeight:'bold'}}>Free shipping</Typography>
           <Typography mt={1}>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.</Typography>
        </Grid>
        <Grid size={{xs:12,lg:4}}>
           <CurrencyExchangeOutlinedIcon sx={{fontSize:'8rem' ,opacity:0.2}}/>
           <Typography variant='h5' mt={1} sx={{fontWeight:'bold'}}>100% Money back</Typography>
           <Typography mt={1}>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.</Typography>
        </Grid>
        <Grid size={{xs:12,lg:4}}>
           <PhoneOutlinedIcon sx={{fontSize:'8rem' ,opacity:0.2}}/>
           <Typography variant='h5' mt={1} sx={{fontWeight:'bold'}}>Online support 24/7</Typography>
           <Typography mt={1}>Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.</Typography>
        </Grid>
    </Grid>
  )
}

export default Services