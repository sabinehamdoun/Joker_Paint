import { Box, Typography, Grid, CardMedia, Card, Button } from "@mui/material";
import React from "react";
import card1 from "../../assets/images/card1.jpg";
import card2 from "../../assets/images/card2.jpg";
import card3 from "../../assets/images/card3.jpg";

export default function Boxes() {
    return (
        <Box>
            <Box sx={{
                textAlign: "center",
                padding: "60px"
            }}>
            <Typography variant="h4" sx={{
                textTransform: "uppercase" ,
                paddingBottom: "15px",
                fontFamily: "Poppins, sans-serif"
            }}>
                Design Oriented & Innovation Driven
            </Typography>
            <Box sx={{
                paddingLeft: "28%",
                paddingRight: "28%",
                lineHeight: "1.5",
                fontFamily: "Poppins, sans-serif"
            }}> 
            <Typography variant="h7" >
                Pushing the boundaries of space design and redefining what it means to choose colors,
                create decorative effects, and find the technical Solution for any project or environment
            </Typography>
            </Box>
            </Box>
            <Grid container spacing={1} pl={2.5} pr={2.5} pb={2.5}>
                <Grid item md={4}>
                    <Card  sx={{borderRadius: "0px"}}>
                        <CardMedia
                        component="img"
                        height="50%"
                        image={card1}
                        title="Title of your media"
                        />
                        <Box sx={{
                            backgroundColor: "#76869e",
                            color: "white",
                            padding: "40px", 
                        }}>
                        <Typography variant="h6" sx={{textTransform: "uppercase", paddingBottom: "10px"}}>
                            A Brand By Kassaa Group
                        </Typography>
                        <Typography variant="body1" sx={{lineHeight: "1.4"}}>
                            Colortek is part of a group of companies dedicated to Manufacturing, Retail,
                            Contracting and Brand Representation of Wall and Floor Decorative Finishes, Architectural
                            Paints, Wall Coverings, and Protective Coatings. 
                        </Typography>
                        <br/>
                        <br/>
                        <Button sx={{
                            color: "white",
                            marginLeft: "-8px"
                        }}>
                            Learn More
                        </Button>
                        </Box>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card  sx={{borderRadius: "0px"}}>
                        <CardMedia
                        component="img"
                        height="50%"
                        image={card2}
                        title="Title of your media"
                        />
                        <Box sx={{
                            backgroundColor: "#a17772",
                            color: "white",
                            padding: "40px", 
                        }}>
                            <Typography variant="h6" sx={{textTransform: "uppercase", paddingBottom: "10px"}}>
                                A Brand By Kassaa Group
                            </Typography>
                            <Typography variant="body1" sx={{lineHeight: "1.4"}}>
                                Colortek is part of a group of companies dedicated to Manufacturing, Retail,
                                Contracting and Brand Representation of Wall and Floor Decorative Finishes, Architectural
                                Paints, Wall Coverings, and Protective Coatings. 
                            </Typography>
                            <br/>
                            <br/>
                            <Button sx={{
                                color: "white",
                                marginLeft: "-8px"
                            }}>
                                Learn More
                            </Button>
                        </Box>
                    </Card>
                </Grid>
                <Grid item md={4}>
                    <Card  sx={{borderRadius: "0px"}}>
                        <CardMedia
                        component="img"
                        height="50%"
                        image={card3}
                        title="Title of your media"
                        />
                        <Box sx={{
                            backgroundColor: "#809ca3",
                            color: "white",
                            padding: "40px", 
                        }}>
                            <Typography variant="h6" sx={{textTransform: "uppercase", paddingBottom: "10px"}}>
                                A Brand By Kassaa Group
                            </Typography>
                            <Typography variant="body1" sx={{lineHeight: "1.4"}}>
                                Colortek is part of a group of companies dedicated to Manufacturing, Retail,
                                Contracting and Brand Representation of Wall and Floor Decorative Finishes, Architectural
                                Paints, Wall Coverings, and Protective Coatings. 
                            </Typography>
                            <br/>
                            <br/>
                            <Button sx={{
                                color: "white",
                                marginLeft: "-8px"
                            }}>
                                Learn More
                            </Button>
                        </Box>
                    </Card>
                </Grid>

            </Grid>
        </Box>
    )
}