import { Button, Grid, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import '@fontsource/roboto/500.css';
export default function Home() {
  return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container display="flex" justifyContent="center" sx={{backgroundColor: "#f0f0f2"}} >
            <Grid item xs={6} lg={6} md={6} xl={6} sm={12} xs={12} alignItems="center" display="flex" pl={12}>
              <Stack spacing={4}>
              <Typography variant='h1'>Select Your New Perfect Style</Typography>
              <Typography>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</Typography>
              <Button variant='contained' sx={{backgroundColor:"black", maxWidth: "30%", minWidth: "50%", width: "30%"}} size="large" >SHOP NOW</Button>
              </Stack>
            </Grid>
            <Grid item xs={3} sx={{display: {lg:"block", xl: "block", md: "block", sm: "none", xs: "none"}}}>
              {/* <Typography variant='h1'>Select Your New Perfect Style</Typography> */}
              <Image sx={{maxWidth: "100%"}} src={require('/public/assests/xwatch.png.pagespeed.ic.LlRtijfV2T.webp')}/>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
  )
}
