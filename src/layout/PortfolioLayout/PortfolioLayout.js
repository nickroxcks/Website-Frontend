import React from "react";
import { Grid, Typography } from "@mui/material";
import { Container, Box, useTheme } from "@mui/material";
import Hero from "../../components/portfolio/Hero";
//import { Container, Row, Col } from "react-bootstrap";
const PortfolioLayout = () => {
  const curTheme = useTheme();
  console.log(curTheme);

  //sx={{ fontWeight: 300, fontSize: '6rem'}}>Heading</Typography>;

  return (
    <Box sx={{fontFamily: "Eudoxus Sans, sans-serif" }}>
        <Box sx={{background: '#F8F7F1'}}>
        <Hero/>
        </Box>
    </Box>
  );
};

export default PortfolioLayout;
