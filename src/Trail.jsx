import React from 'react'
import { Grid } from '@mui/material';

const Trail = () => {
  return (
    <>
    <div className='back'>
        <Grid container spacing={2}>
        <Grid item lg={12} xs={12} sm={12} md={12}><h1 className='heading'>Choose your Furniture</h1></Grid>
        <Grid item lg={12} xs={12} sm={12} md={12}><p className='para'>Lorem ipsum dolor sit amet,consectetur elit </p></Grid>
        
        <Grid item lg={4} sm={6} xs={12}>
            
            <div className='image1'>
            <h1 className='heading1'>Sofa</h1>
        </div>
        </Grid>
        
        <Grid item lg={4} sm={6} xs={12}>
            
            <div className='image2'>
            <h1 className='heading1'>Coat</h1>
        </div>
        </Grid>
        
        <Grid item lg={4} sm={6} xs={12}>
            
            <div className='image3'>
            <h1 className='heading1'>Others</h1>
        </div>
        </Grid>
    </Grid>
        </div>
    </>
  )
}

export default Trail