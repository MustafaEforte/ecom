import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
// import { logo } from "../public";
import styled from "styled-components";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleOpen = () => setNavOpen(true);
  const handleClose = () => setNavOpen(false);

  return (
    <>
      {navOpen ? (
        <Grid
          container
          mb={10}
          sx={{
            width: "100%",
            zIndex: "9",
            position: "absolute",
            backgroundColor: "white",
            // transitionProperty: "transform",
            display: {
              lg: "none",
              xl: "none"
            }
          }}
        >
          <Grid item xs={12} >
            <Stack>
              <CloseIcon onClick={handleClose} />
              <Link href="/">Home</Link>
              <Divider />
              <Link href="/">Shop</Link>
              <Divider />
              <Link href="/">About</Link>
              <Divider />
              <Link href="/">Latest</Link>
              <Divider />
              <Link href="/">Blog</Link>
              <Divider />
              <Link href="/">Pages</Link>
              <Divider />
            </Stack>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
      <Container
        maxWidth="xl"
        disableGutters="true"
        sx={{ position: "relative" }}
      >
        <Grid container>
          <Grid item xs={12}>
            {/* Web View */}

            <Grid container>
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
                  {/* <img src={logo}/> */}
                  <Image
                    src={require("/public/assests/Timed_6_30.png")}
                    style={{ width: "100%", height: "auto" }}
                  />
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
                xs={10}
                // sm={4}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <MenuIcon
                  onClick={handleOpen}
                  fontSize="large"
                  sx={{ display: { md: "none", lg: "none", xl: "none" } }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Navbar;

const NavSec = styled(Grid)`
  @media screen and (max-width: 899px) {
    display: none !important;
  }
`;
