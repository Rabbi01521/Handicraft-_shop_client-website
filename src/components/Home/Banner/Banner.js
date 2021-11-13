import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const bannerBg = {
  background: `url(${"https://akkaara.co.in/wp-content/uploads/2019/01/banner_slider-1.jpg"})`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: " no-repeat",
  width: "100%",
  height: "100vh",
};

const Banner = () => {
  return (
    <div style={bannerBg}>
      <Container>
        <Grid
          container
          rowSpacing={1}
          style={{ height: "90vh" }}
          alignItems="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={7} style={{ color: "white" }}>
            <Typography variant="h4" sx={{ my: 2 }}>
              Made With <br /> Care
            </Typography>
            <Typography variant="body2">
              Care for tradition, care for material & care for artisans
            </Typography>
            <Button
              variant="outlined"
              sx={{ my: 2, borderColor: "white", color: "white" }}
            >
              Shop Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
