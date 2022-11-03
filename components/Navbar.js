import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { logo } from "../public";
import styled from "styled-components";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleOpen = () => setNavOpen(true);
  const handleClose = () => setNavOpen(false);

  const list = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Latest",
      path: "/latest",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Pages",
      path: "/pages",
    },
  ];
  return (
    <>
      
        <Grid container sx={{position: "sticky"}}>
          <Grid item xs={12} >
            {/* Web View */}

            <Grid container py={5}>
              <Grid item xs={4} sm={4} md={2} lg={2} xl={2} sx={{display: "flex",alignItem: "center", justifyContent: "end", width: "100%"}}>
                  <img src={logo} />
                {/* <Image src={require("/public/assests/Timed_6_30.png")}  /> */}
              </Grid>
              <Grid item xs={7} sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                    },
                  }}>
                <Stack
                  sx={{justifyContent: "center", alignItems: "center"}}
                  direction="row"
                  spacing={6}
                  
                >
                  {list.map((item) => {
                    return <Link href={`${item.path}`}>{item.name}</Link>;
                  })}
                </Stack>
              </Grid>
              <Grid
                item
                xs={6}
                xl={3}
                lg={3}
                md={3}
                sm={5}
                sx={{alignItems: "center", display: "flex", justifyContent: "center"}}
              >
                <Stack direction="row" spacing={4} >
                  <SearchIcon />
                  <PersonIcon />
                  <ShoppingCartOutlinedIcon />
                </Stack>
              </Grid>
              <Grid
                item
                xs={2}
                sx={{display: "flex", alignItem: "center", justifyContent: "end"}}
                >
                <MenuIcon
                  onClick={handleOpen}
                  fontSize="large"
                  sx={{ display: { md: "none", lg: "none", xl: "none" } }}
                />
              </Grid>
              {navOpen ? (
                <Grid
                  container
                  // mb={10}
                  sx={{
                    backgroundColor: "grey",
                    color: "white",
                    display: {
                      lg: "none",
                      xl: "none",
                    },
                  }}
                >
                  <Grid item xs={12}>
                    <Stack>
                      <CloseIcon onClick={handleClose} />
                      {list.map((item) => {
                        return (
                          <>
                            <Link href={item.path}>{item.name}</Link>
                            <Divider />
                          </>
                        );
                      })}
                    </Stack>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Grid>
     
    </>
  );
};

export default Navbar;
