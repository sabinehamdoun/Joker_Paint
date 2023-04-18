import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import card1 from "../../assets/images/colortools-colorsmart.png";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useState, useEffect } from "react";
import "../ColorTools/styles.modules.css";

export default function ColorTools() { 

    return ( 
        <Box  
        sx={{
            backgroundColor: "#F6F5F0",
            padding: "2% 1% 2% 4%"}}>
            <Typography variant="h3" sx={{
                color: "#212521",
                margin: "0 0 1%",
                fontWeight: "bold"
            }}>
                Color Tools
            </Typography>
            <Typography sx={{
                color: "#212521",
                fontSize: "18px",
                margin: "0 0 1.5%"
            }}>
            No matter what your next DIY project is, Behr Color Tools will help you find the perfect colors that make your vision a reality.
            </Typography>
            <Grid container>
                <Grid item sm={4}>
                    <Typography variant="h5" sx={{
                        color: "#212521",
                        textTransform: "uppercase",
                        margin: "0 0 1%",
                        fontWeight: "bold"
                    }}>
                        Behr Colors
                    </Typography>
                    <Box 
                    textAlign="center" display="flex" flexDirection="column" sx={{
                        padding: "20% 0"
                    }}>
                    <Button  
                    sx={{
                        backgroundColor: "#465058",
                        color: "white",
                        borderRadius: "25px",
                        fontSize: "15px",
                        padding: "12px 30px",
                        margin: "0 0 7%",
                        width: "55%",
                        textTransform: "none"
                    }}>
                        Paint Colors
                    </Button>
                    <Button sx={{
                        backgroundColor: "#465058",
                        color: "white",
                        borderRadius: "30px",
                        fontSize: "15px",
                        padding: "12px 30px",
                        margin: "0 0 7%",
                        width: "55%",
                        textTransform: "none"
                    }}>
                        Stain Colors
                    </Button>
                    <Button sx={{
                        backgroundColor: "#465058",
                        color: "white",
                        borderRadius: "25px",
                        fontSize: "15px",
                        padding: "12px 30px",
                        margin: "0 0 7%",
                        textTransform: "none",
                        width: "55%",
                    }}>
                        Floor Croating Colors
                    </Button>
                    </Box>
                </Grid>
                <Grid item sm={8}>
                    <Typography variant="h5" sx={{
                        color: "#212521",
                        textTransform: "uppercase",
                        margin: "0 0 2%",
                        fontWeight: "bold"
                    }}>
                        Colorsmart By Behr
                    </Typography>
                    <Box
                    sx={{
                        borderRadius: "15px",
                        width: "95%",
                        boxShadow: "3px 10px 10px rgba(0, 0, 0, 0.7)",
                    }}>
                    <CardMedia 
                    component="img"
                    height="100%" 
                    image={card1} 
                    />
                    </Box>
                </Grid>
            </Grid>
        </Box> 
    )
}