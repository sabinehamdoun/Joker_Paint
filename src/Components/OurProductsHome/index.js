import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import product1 from "../../assets/images/product1.jpg";
import stain from "../../assets/images/stain.jpeg";

export default function ColorTools() {

    return (
        <Box sx={{
            backgroundColor: "white",
            padding: "3% 5% 3% 5%"}}>
            <Typography variant="h4" sx={{
                color: "#212521",
                margin: "0 0 1%",
                fontWeight: "bold"
            }}>
                Our Products
            </Typography>
            <Typography sx={{
                color: "#212521",
                fontSize: "18px",
                margin: "0 0 1.5%"
            }}>
                Behr's high quality products deliver performance & beauty.
            </Typography>
            <Grid container spacing={2}>
                <Grid item sm={6}>
                    <Box
                    sx={{
                        borderRadius: "0",
                        width: "95%",
                        boxShadow: "3px 10px 10px rgba(0, 0, 0, 0.7)",
                        margin: "0 0 4%"
                    }}>
                    <CardMedia 
                    component="img"
                    height="100%" 
                    image={product1} 
                    />
                    </Box>
                    <Box sx={{
                        padding: "0 10% 0 0"
                    }} >
                    <Typography variant="h6" sx={{
                        color: "#212521",
                        textTransform: "uppercase",
                        margin: "0 0 2%",
                        fontWeight: "bold"
                    }}>
                       INTERIOR PAINT AND PRIMER
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: "#212521",
                        textTransform: "uppercase",
                        margin: "0 0 4%",
                        fontWeight: "bold"
                    }}>
                        SUPERIOR VALUE AT EVERY PRICE POINT.
                    </Typography>
                    <Typography sx={{
                        color: "#212521",
                        margin: "0 0 1%", 
                        lineHeight: "1.5", 
                    }}>
                        Behr makes highly rated, award-winning paints, stains, and more that deliver superior 
                        value at every price point so everyone can transform their space into the look they want 
                        with the colors they love.
                    </Typography>
                    <Box textAlign="center" display="flex" flexDirection="column" sx={{
                        padding: "3% 0"
                    }}>
                    <Button sx={{
                        backgroundColor: "#465058",
                        color: "white",
                        borderRadius: "25px",
                        fontSize: "15px",
                        padding: "10px 30px",
                        margin: "0 0 7%",
                        width: "30%",
                        textTransform: "none",
                        fontWeight: "bold"
                    }}>
                        Paint Colors
                    </Button> 
                    </Box> 
                    </Box>
                </Grid>
                <Grid item sm={6}>
                <Box
                    sx={{
                        borderRadius: "15px",
                        width: "95%",
                        // boxShadow: "3px 10px 10px rgba(0, 0, 0, 0.7)",
                        margin: "0 0 4%"
                    }}>
                    <CardMedia 
                    component="img"
                    height="100%" 
                    image={product1} 
                    />
                    </Box>
                    <Box sx={{
                        padding: "0 10% 0 0"
                    }} >
                    <Typography variant="h6" sx={{
                        color: "#212521",
                        textTransform: "uppercase",
                        margin: "0 0 2%",
                        fontWeight: "bold"
                    }}>
                       INTERIOR PAINT AND PRIMER
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: "#212521",
                        textTransform: "uppercase",
                        margin: "0 0 4%",
                        fontWeight: "bold"
                    }}>
                        SUPERIOR VALUE AT EVERY PRICE POINT.
                    </Typography>
                    <Typography sx={{
                        color: "#212521",
                        margin: "0 0 1%", 
                        lineHeight: "1.5", 
                    }}>
                        Behr makes highly rated, award-winning paints, stains, and more that deliver superior 
                        value at every price point so everyone can transform their space into the look they want 
                        with the colors they love.
                    </Typography>
                    <Box textAlign="center" display="flex" flexDirection="column" sx={{
                        padding: "3% 0"
                    }}>
                    <Button sx={{
                        backgroundColor: "#465058",
                        color: "white",
                        borderRadius: "25px",
                        fontSize: "15px",
                        padding: "10px 30px",
                        margin: "0 0 7%",
                        width: "30%",
                        textTransform: "none",
                        fontWeight: "bold"
                    }}>
                        Paint Colors
                    </Button> 
                    </Box> 
                    </Box>
                </Grid>
                <Grid item sm={3}>
                <Box
                    sx={{
                        borderRadius: "15px",
                        width: "95%",
                        // boxShadow: "3px 10px 10px rgba(0, 0, 0, 0.7)",
                        margin: "0 0 4%"
                    }}>
                    <CardMedia 
                    component="img"
                    height="100%" 
                    image={stain} 
                    />
                    </Box>
                    <Box sx={{
                        padding: "0 5% 0 0"
                    }} >
                    <Typography variant="h6" sx={{
                        color: "#212521",
                        textTransform: "uppercase",
                        margin: "0 0 2%",
                        fontWeight: "bold"
                    }}>
                       Stain
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: "#212521",
                        margin: "0 0 4%",
                        lineHeight: "1.5", 

                    }}>
                        Protect and beautify your decks, fences, and siding with Behr's high-rated line of wood stain products.
                    </Typography> 
                    <Box textAlign="center" display="flex" flexDirection="column" sx={{
                        padding: "3% 0"
                    }}>
                    <Button sx={{
                        backgroundColor: "white",
                        color: "#465058",
                        borderRadius: "25px",
                        fontSize: "15px",
                        padding: "10px 30px",
                        margin: "0 0 7%",
                        width: "100%",
                        textTransform: "none",
                        fontWeight: "bold",
                        border: "1px solid #465058"
                    }}>
                        Browse Products
                    </Button> 
                    </Box> 
                    </Box>
                </Grid>
                <Grid item sm={3}>
                <Box
                    sx={{
                        borderRadius: "15px",
                        width: "95%",
                        // boxShadow: "3px 10px 10px rgba(0, 0, 0, 0.7)",
                        margin: "0 0 4%"
                    }}>
                    <CardMedia 
                    component="img"
                    height="100%" 
                    image={stain} 
                    />
                    </Box>
                    <Box sx={{
                        padding: "0 5% 0 0"
                    }} >
                    <Typography variant="h6" sx={{
                        color: "#212521",
                        textTransform: "uppercase",
                        margin: "0 0 2%",
                        fontWeight: "bold"
                    }}>
                       Stain
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: "#212521",
                        margin: "0 0 4%",
                        lineHeight: "1.5", 

                    }}>
                        Protect and beautify your decks, fences, and siding with Behr's high-rated line of wood stain products.
                    </Typography> 
                    <Box textAlign="center" display="flex" flexDirection="column" sx={{
                        padding: "3% 0"
                    }}>
                    <Button sx={{
                        backgroundColor: "#465058",
                        color: "white",
                        borderRadius: "25px",
                        fontSize: "15px",
                        padding: "10px 30px",
                        margin: "0 0 7%",
                        width: "100%",
                        textTransform: "none",
                        fontWeight: "bold",
                        border: "1px solid #465058"
                    }}>
                        Browse Products
                    </Button> 
                    </Box> 
                    </Box>
                </Grid>
                <Grid item sm={3}>
                <Box
                    sx={{
                        borderRadius: "15px",
                        width: "95%",
                        // boxShadow: "3px 10px 10px rgba(0, 0, 0, 0.7)",
                        margin: "0 0 4%"
                    }}>
                    <CardMedia 
                    component="img"
                    height="100%" 
                    image={stain} 
                    />
                    </Box>
                    <Box sx={{
                        padding: "0 5% 0 0"
                    }} >
                    <Typography variant="h6" sx={{
                        color: "#212521",
                        textTransform: "uppercase",
                        margin: "0 0 2%",
                        fontWeight: "bold"
                    }}>
                       Stain
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: "#212521",
                        margin: "0 0 4%",
                        lineHeight: "1.5", 

                    }}>
                        Protect and beautify your decks, fences, and siding with Behr's high-rated line of wood stain products.
                    </Typography> 
                    <Box textAlign="center" display="flex" flexDirection="column" sx={{
                        padding: "3% 0"
                    }}>
                    <Button sx={{
                        backgroundColor: "white",
                        color: "#465058",
                        borderRadius: "25px",
                        fontSize: "15px",
                        padding: "10px 30px",
                        margin: "0 0 7%",
                        width: "100%",
                        textTransform: "none",
                        fontWeight: "bold",
                        border: "1px solid #465058"
                    }}>
                        Browse Products
                    </Button> 
                    </Box> 
                    </Box>
                </Grid>
                <Grid item sm={3}>
                <Box
                    sx={{
                        borderRadius: "15px",
                        width: "95%",
                        // boxShadow: "3px 10px 10px rgba(0, 0, 0, 0.7)",
                        margin: "0 0 4%"
                    }}>
                    <CardMedia 
                    component="img"
                    height="100%" 
                    image={stain} 
                    />
                    </Box>
                    <Box sx={{
                        padding: "0 5% 0 0"
                    }} >
                    <Typography variant="h6" sx={{
                        color: "#212521",
                        textTransform: "uppercase",
                        margin: "0 0 2%",
                        fontWeight: "bold"
                    }}>
                       Stain
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: "#212521",
                        margin: "0 0 4%",
                        lineHeight: "1.5", 

                    }}>
                        Protect and beautify your decks, fences, and siding with Behr's high-rated line of wood stain products.
                    </Typography> 
                    <Box textAlign="center" display="flex" flexDirection="column" sx={{
                        padding: "3% 0"
                    }}>
                    <Button sx={{
                        backgroundColor: "#465058",
                        color: "white",
                        borderRadius: "25px",
                        fontSize: "15px",
                        padding: "10px 30px",
                        margin: "0 0 7%",
                        width: "100%",
                        textTransform: "none",
                        fontWeight: "bold",
                        border: "1px solid #465058"
                    }}>
                        Browse Products
                    </Button> 
                    </Box> 
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}