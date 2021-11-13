import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const DashboardSlider = () => {
  const [products, setProducts] = useState([]);
  const size = 6;
  useEffect(() => {
    fetch(
      `https://vast-ravine-32430.herokuapp.com/products?page=home&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4"> Recommended</Typography>
      <Box
        sx={{
          width: "100px",
          height: "3px",
          backgroundColor: "black",

          mb: 4,
          mt: 2,
          borderRadius: 15,
        }}
      ></Box>
      <Slider {...settings}>
        {products.map((product, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 300,
                height: 300,
                textAlign: "center",
                p: 3,
              },
            }}
          >
            <NavLink
              style={{
                color: "white",
                textDecoration: "none",
              }}
              to={`/products/${product._id}`}
            >
              <Paper
                variant="outlined"
                square
                style={{
                  backgroundImage: `url(${product?.picture})`,
                  backgroundSize: "cover",
                  backgroundPosition: "inherit",
                  backgroundRepeat: "no-repeat",
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" sx={{ color: "white" }}>
                  {product.name}
                </Typography>
                <Typography variant="h6" sx={{ color: "white" }}>
                  Price: {product.price}
                </Typography>
              </Paper>
            </NavLink>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default DashboardSlider;
