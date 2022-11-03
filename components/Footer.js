import React from 'react'
import { Container, Stack } from '@mui/system';
import { Grid, Box, Link, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import styled from 'styled-components'
const Footer = () => {
  return (
    <>
        <Container maxWidth="lg">
          <Grid container spacing={5} >
          <Grid item xs={12}>
            <Grid container
            spacing={{ xs: 4, sm: 4, md: 4 }}
            // columns={{xs:4, sm:6, md:12}}
             pb={8}>
              <Grid item xs={12} lg={3} sm={12} md={3}>
              <Stack spacing={5}>
            <div>
                <img src="data:image/webp;base64,UklGRhACAABXRUJQVlA4TAQCAAAvg8AFEPcgEEhC2V90hfkfEIEAYcF/pAQJMJoGDmDZth0lug+xiQ0S1ABCzvznaRKwsP4j+j8B+o0DvLXlqy1strMw+v/oteil/0ghlr21uXtt5w0Udh/+z6XNbK+0M6u2NAFB2zttKwCzfsC9tvN22gg8fsG2B2DQP/cAYvtzzpVZfZF0qc3qS+Z2MrPDdY0ZeKnQB2AKRc83zK9M1wPjY52r2VHS3nY6WdLJWdIlnKVPywLwVmEgPfmPN5MCyT4RSPffqS6Wrq6WvUtylj8t8RHwBYH83Cbik6yXFMj3X7HdvpHOZlbVN+lqZhepMbPDXXJm1iwYgKC8B8ZWegFDgnl6SI8IQfLA2EoB8N/RZ21W3SXpYHaWTmYHSXI7s2PZA5hVOMCgzyfQJmIrSX2ih1GSwgzDV1ziaHbSp0tUZo2ak5lVTuUz8CiJ0CY0wjMR9PlKRPDyPRCDvnLLXYrMdpeDmR0uWhiAQaUwKx0gJLoimJ8jMD6VX6nJXRd8ukZLfYTYfssv+AxepX+pMqudVhyAl4ojtKkRnitEmIIW/qWT2UErPoC3ygfoEx3QrtDDqO00Zna4S5f6VjSzNKgDhlZ6RRi0ggfGVnpO3RbkLFs1BYEV1JOf2zUUyEa/BbmMnXM+rqI+M3mtopDhtQk1zsx27q78m3X06IEpKLmCfADm0Eo=" />
                 </div>
                 <Typography color="#808080">Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</Typography>
            </Stack>
              </Grid>
              <Grid item xs={6} lg={3} md={3} sm={4}>
              <Stack spacing={2}>
              <Typography variant="h6" fontWeight={"bold"}>Quick Links</Typography>
                <Link fontWeight={"400"} fontFamily={"Ubuntu"} underline="none" href="/" color="#808080" >
                  About
                </Link>
                <Link fontWeight={"400"} fontFamily={"Ubuntu"} underline="none" href="/" color="#808080">
                  Offers & Discounts
                </Link>
                <Link fontWeight={"400"} fontFamily={"Ubuntu"} underline="none" href="/" color="#808080">
                  Get Coupon
                </Link>
                <Link fontWeight={"400"} fontFamily={"Ubuntu"} underline="none" href="/" color="#808080">
                  Contact Us
                </Link>
              </Stack>
              </Grid>
              <Grid item xs={6} lg={3} md={3} sm={4}>
              <Stack spacing={2}>
              <Typography variant="h6" fontWeight={"bold"}>New Products</Typography>
                <Link underline="none" href="/" color="#808080">
                  Women Clothes
                </Link>
                <Link underline="none" href="/" color="#808080">
                Fashion Accessories
                </Link>
                <Link underline="none" href="/" color="#808080">
                Man Accessories
                </Link>
                <Link underline="none" href="/" color="#808080">
                Rubber made Toys
                </Link>
              </Stack>
              </Grid>
              <Grid item xs={6} lg={3} md={3} sm={4}>
              <Stack spacing={2}>
              <Typography variant="h6" fontWeight={"bold"}>Support</Typography>
                <Link underline="none" href="/" color="#808080">
                Frequently Asked Questions
                </Link>
                <Link underline="none" href="/" color="#808080">
                Terms & Conditions
                </Link>
                <Link underline="none" href="/" color="#808080">
                Privacy Policy
                </Link>
                <Link underline="none" href="/" color="#808080">
                Report a Payment Issue
                </Link>
              </Stack>
              </Grid>
            </Grid>
             <Grid container>
             <Grid item xs={12} sm={6} lg={6} md={6} xl={6}>
            <Typography color="#808080">Copyright ©2022 All rights reserved | This template is made with  by Colorlib</Typography>
            </Grid>
          <Grid item  xs={8} sm={6} lg={6} md={6} xl={6} sx={{display: "flex", justifyContent: "end"}}>
        <Stack direction="row" spacing={2}>
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
        <LanguageIcon />
        </Stack>
           </Grid>
            </Grid>
      </Grid>
          </Grid>
        </Container>
        </>
  )
}
export default Footer







