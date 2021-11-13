import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";

const AllDetails = () => {
  const { products } = useProducts();
  const [reviews, setReviews] = useState([]);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://vast-ravine-32430.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  useEffect(() => {
    fetch("https://vast-ravine-32430.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={12} sm={12} md={4}>
        <Paper
          elevation={3}
          sx={{
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Box>
            <Typography variant="h5">
              Total Products: {products.length}
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Paper
          elevation={3}
          sx={{
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Box>
            <Typography variant="h5">
              Total Reviews: {reviews.length}
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Paper
          elevation={3}
          sx={{
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Box>
            <Typography variant="h5">Total Orders: {orders.length}</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AllDetails;
