import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ArchiveIcon from '@mui/icons-material/Archive';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CachedIcon from '@mui/icons-material/Cached';
function Details() {
  return (
    <Container maxWidth="lg" sx={{backgroundColor: "red", color: "white"}}>
      <Grid container mb={10} display="flex" justifyContent="space-evenly" alignItems="center" py={6} >
        <Grid item xs={3}>
            <ArchiveIcon size="large"/>
            <Typography variant='h5' pb={2}>Free Shipping Method</Typography>
            <Typography>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</Typography>
        </Grid>
        <Grid item xs={3}>
            <LockOpenIcon size="large"/>
            <Typography variant='h5' pb={2}>Secure Payment System</Typography>
            <Typography>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</Typography>
        </Grid>
        <Grid item xs={3}>
            <CachedIcon size="large"/>
            <Typography variant='h5' pb={2}>Secure Payment System</Typography>
            <Typography>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Details
