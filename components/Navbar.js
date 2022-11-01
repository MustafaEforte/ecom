import { Box, Button, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { logo } from "../public";
import styled from "styled-components";

const Navbar = () => {
  

  return (
    <Container maxWidth="xl" disableGutters="true">
      <Grid container py={5}>
        <Grid item xs={12}>
          {/* Web View */}

          <Grid container >
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <div>
                <img src={logo}/>
              </div>
            </Grid>
            <NavSec
              item
              xs={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction="row" spacing={6}>
                <Typography>Home</Typography>
                <Typography>Shop</Typography>
                <Typography>About</Typography>
                <Typography>Latest</Typography>
                <Typography>Blog</Typography>
                <Typography>Pages</Typography>
              </Stack>
            </NavSec>
            <NavSec
              item
              xs={1}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack direction="row" spacing={4}>
                <SearchIcon />
                <PersonIcon />
                <ShoppingCartOutlinedIcon />
              </Stack>
            </NavSec>
            <Grid
              item
              // xs={10}
              // sm={4}
              sx={{ display: { xs: 6,  md: "none", lg: "none", xl: "none" }}}>
              <MenuIcon />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Navbar;

const NavSec = styled(Grid)`
  @media screen and (max-width: 899px) {
    display: none !important;
  }
`;
