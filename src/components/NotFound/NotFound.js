import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Container
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Box>
          <Typography variant="h1">404</Typography>
          <NavLink
            style={{ color: "white", textDecoration: "none" }}
            to="/home"
          >
            <Button variant="contained">Go Back To Home</Button>
          </NavLink>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
