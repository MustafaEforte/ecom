import { Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import {product1, product2} from '/public/Products/index'
function Products() {
  return (
    <div>
    <Stack mb={5}>
        <Typography textAlign="center" variant='h2'>Popular Items</Typography>
        <Typography textAlign="center">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</Typography>
    </Stack>
        <Grid container display="flex" justifyContent="center" alignItems="center" mb={5}>
            {product1.map((item, key)=>{
                return(
                    <Grid item xs={8} xl={3} lg={3} md={6} sm={8} key={key} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <Image width="361" height="381" src={`${item.img}`}/>
                        <Typography textAlign="center">{item.title}</Typography>
                        <Typography textAlign="center">{item.price}</Typography>
                    </Grid>
                )
            })}
        </Grid>
        <Grid container display="flex" justifyContent="center" alignItems="center">
            {product2.map((item, key)=>{
                return(
                    <Grid item xs={8} xl={3} lg={3} md={6} sm={8} key={key} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <Image width="361" height="381" src={`${item.img}`}/>
                        <Typography textAlign="center">{item.title}</Typography>
                        <Typography textAlign="center">{item.price}</Typography>
                    </Grid>
                )
            })}
        </Grid>
    </div>
  )
}

export default Products


