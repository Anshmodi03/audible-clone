import React from "react";
import { Box, Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <Box
      component="footer"
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#f1f1f1",
      }}
    >
      <Typography variant="body2">
        &copy; 2024 Audible Clone. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
