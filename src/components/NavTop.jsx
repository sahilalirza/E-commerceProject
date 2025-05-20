import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

const NavTop = () => {
  return (
   <Grid container spacing={0} sx={{background:'black'}}>
   {/* <Grid container spacing={0} sx={{background:'#cad4d9'}}> */}
      <Grid size={3} sx={{textAlign:'center',textDecoration:'none', color:'white'}}  variant="h6"
            component={Link}
            to="/">
          <Typography>Home</Typography>
      </Grid>
        <Grid size={3} sx={{textAlign:'center',textDecoration:'none',color:"white"}} variant='h6'
        component={Link} to='/men'>
          <Typography >Mens's</Typography>
      </Grid>
        <Grid size={3} sx={{textAlign:'center',textDecoration:'none',color:"white"}} variant='h6'
        component={Link} to='/women'>
          <Typography>Women's</Typography>
      </Grid>
       <Grid size={3} sx={{textAlign:'center',textDecoration:'none',color:"white"}} variant='h6'
       component={Link} to='/kids'>
          <Typography>Kid's</Typography>
      </Grid>
   </Grid>
  )
}

export default NavTop