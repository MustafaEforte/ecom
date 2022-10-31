import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
const Navbar = () => {
  return (
    <Container maxWidth="xl">
    <Row container py={5}>
      <Grid item xs={3}>
        <div>
          <img src="data:image/webp;base64,UklGRhACAABXRUJQVlA4TAQCAAAvg8AFEPcgEEhC2V90hfkfEIEAYcF/pAQJMJoGDmDZth0lug+xiQ0S1ABCzvznaRKwsP4j+j8B+o0DvLXlqy1strMw+v/oteil/0ghlr21uXtt5w0Udh/+z6XNbK+0M6u2NAFB2zttKwCzfsC9tvN22gg8fsG2B2DQP/cAYvtzzpVZfZF0qc3qS+Z2MrPDdY0ZeKnQB2AKRc83zK9M1wPjY52r2VHS3nY6WdLJWdIlnKVPywLwVmEgPfmPN5MCyT4RSPffqS6Wrq6WvUtylj8t8RHwBYH83Cbik6yXFMj3X7HdvpHOZlbVN+lqZhepMbPDXXJm1iwYgKC8B8ZWegFDgnl6SI8IQfLA2EoB8N/RZ21W3SXpYHaWTmYHSXI7s2PZA5hVOMCgzyfQJmIrSX2ih1GSwgzDV1ziaHbSp0tUZo2ak5lVTuUz8CiJ0CY0wjMR9PlKRPDyPRCDvnLLXYrMdpeDmR0uWhiAQaUwKx0gJLoimJ8jMD6VX6nJXRd8ukZLfYTYfssv+AxepX+pMqudVhyAl4ojtKkRnitEmIIW/qWT2UErPoC3ygfoEx3QrtDDqO00Zna4S5f6VjSzNKgDhlZ6RRi0ggfGVnpO3RbkLFs1BYEV1JOf2zUUyEa/BbmMnXM+rqI+M3mtopDhtQk1zsx27q78m3X06IEpKLmCfADm0Eo=" />
        </div>
      </Grid>
      <Grid item xs={6}>
        <Row container>
          <Grid item xs={1}>
            <Typography>Home</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>Shop</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>About</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>Latest</Typography>
          </Grid>

          <Grid item xs={1}>
            <Typography>Blog</Typography>
          </Grid>

          <Grid item xs={1}>
            <Typography>Pages</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography>Contact</Typography>
          </Grid>
        </Row>
      </Grid>
      <Grid item xs={3}>
        <Grid container>
          <Grid item xs={1}>
            <SearchIcon />
          </Grid>
          <Grid item xs={1}>
            <PersonIcon />
          </Grid>
          <Grid item xs={1}>
            <ShoppingCartIcon />
          </Grid>
        </Grid>
      </Grid>
    </Row>
     </Container>
  );
};

export default Navbar;

const Row = styled(Grid)`
display: flex;
justify-content: center;
align-items: center;
`
