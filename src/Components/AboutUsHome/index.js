import { Grid, Box, CardMedia, Typography, Button } from "@mui/material";
import React from "react";
import card1 from "../../assets/images/text-block.jpg";

export default function AboutUsHome() {
    return (
        <Grid container>
            <Grid item sm={6}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={card1}
                    title="Title of your media"
                />
            </Grid>
            <Grid item sm={6}>
                <Box sx={{ 
                    padding: "10% 10% 10% 10%", 
                }}>
                    <Typography sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        color: "#BBB888",
                        margin: "2% 0"
                    }}>
                    SOMETHING ABOUT US
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "60px",
                        color: "#6AC",
                        fontWeight: "800",
                        margin: "2% 0"
                    }}>
                    ABOUT US
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Lato, sans-serif",
                        fontSize: "15px",
                        color: "#BBB888",
                        lineHeight: "2",
                        fontWeight: "bold",
                        margin: "2% 0"
                    }}>
                    We at the Rainbow’s Colors company are pleased to offer you a wide variety of painting services, and hire only the best painters 
                    to take care of your residential house. <br/> We value both the technical and artistic sides of our job in every Showcase… The fact how 
                    much does that kind of passion affects the overall quality shows not only through our 3-year painting warranty but also in our 
                    Photo Gallery, featuring the most impressive painting showcases that we undertook that far.
                    </Typography>
                    <Button sx={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "14px",
                        backgroundColor: "#F6BE57",
                        padding: "17px 40px",
                        margin: "7% 0",
                        borderRadius: "0"
                    }}>
                        Read More
                    </Button>
                </Box>
            </Grid>

        </Grid>
    )
}