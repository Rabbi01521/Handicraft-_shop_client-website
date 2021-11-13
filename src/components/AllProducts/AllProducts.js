import {
  Button,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import * as React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import MuiSkeleton from "../Shared/MuiSkeleton/MuiSkeleton";

const bannerBg = {
  background: `url("https://akkaara.co.in/wp-content/uploads/2019/01/banner_impression.jpg?id=180")`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: " no-repeat",
  width: "100%",
  "&:hover": {
    background: "#19D3AE !important",
    color: "#fff !important",
  },
};

const AllProducts = () => {
  const { products } = useProducts();
  return (
    <div>
      <Box
        style={{
          ...bannerBg,
          height: 250,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center", color: "white" }}>
          Collections
        </Typography>
      </Box>

      <Container sx={{ my: 5 }}>
        <Box>
          <Grid
            container
            alignItems="center"
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {products.length ? (
              products.map((product, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                  <Card key={product.index} sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="500"
                        image={product.picture}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {product.name ? product.name : product.productName}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          {product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.about.slice(0, 90)}...
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/products/${product._id}`}
                      >
                        <Button
                          size="small"
                          variant="outlined"
                          sx={{ color: "black", borderColor: "black" }}
                        >
                          purchase
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Container>
                <Grid
                  container
                  alignItems="center"
                  justifyContent="center"
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <MuiSkeleton></MuiSkeleton>
                  </Grid>
                </Grid>
              </Container>
            )}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default AllProducts;
