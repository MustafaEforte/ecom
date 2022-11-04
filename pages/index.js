import { Box, Button, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import "@fontsource/roboto/500.css";
import Products from "../components/Products";
import { newArrivals } from "../public/Products";
export default function Home() {
  // const images ={
  //   width: "361px",
  //   maxWidth: "100%",
  //   maxHeight: "auto",
  //   height: "489px"
  // }
  return (
    <Grid container>
      <Grid item xs={12} zeroMinWidth>
        {/* Banner*/}
        <Grid
          container
          display="flex"
          justifyContent="center"
          sx={{ backgroundColor: "#f0f0f2" }}
          mb={20}
        >
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            sm={12}
            xs={12}
            alignItems="center"
            display="flex"
            pl={12}
          >
            <Stack spacing={4}>
              <Typography variant="h2">
                Select Your New Perfect Style
              </Typography>
              <Typography>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  maxWidth: "30%",
                  minWidth: "50%",
                  width: "30%",
                }}
                size="large"
              >
                SHOP NOW
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: {
                lg: "block",
                xl: "block",
                md: "block",
                sm: "none",
                xs: "none",
              },
            }}
          >
            {/* <Typography variant='h1'>Select Your New Perfect Style</Typography> */}
            <Image
              sx={{ maxWidth: "100%" }}
              src={require("/public/assests/xwatch.png.pagespeed.ic.LlRtijfV2T.webp")}
            />
          </Grid>
        </Grid>

        {/* New Arrivals*/}
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={9} px={2}>
            <Stack mb={3}>
              <Typography variant="h2">New Arrivals</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          mb={20}
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {newArrivals.map((item, key) => {
            return (
              <Grid
                item
                lg={4}
                xl={3}
                md={6}
                sm={7}
                key={key}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Image width="360" height="488" src={item.img} />
                <Typography textAlign="center" variant="h4">
                  {item.title}
                </Typography>
                <Typography textAlign="center">{item.price}</Typography>
              </Grid>
            );
          })}
        </Grid>

        <Box mb={10}>
          <Products />
        </Box>
          <Container>
          <Grid container>
            <Grid item xs={6}>
            <Typography variant='h2' py={2}>Watch of Choice</Typography>
            <Typography py={2}>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</Typography>
            <Button variant='contained' sx={{backgroundColor: "red"}}>Show Watches</Button>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent="end" alignItems="center">
              <Image src={require('/public/assests/xchoce_watch1.png.pagespeed.ic.JqdVtLwPVf.webp')}/>
            </Grid>
          </Grid>
          </Container>
      </Grid>
    </Grid>
  );
}
