import React from "react";
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  Typography,
  useMediaQuery,
  ThemeProvider,
  createTheme,
  CardMedia,
} from "@mui/material";
import DrawerComp from "../Drawer"; 
import card1 from "../../assets/images/HeaderLogo.svg";
import { useNavigate } from 'react-router-dom';

export default function NavBar() {

    const theme = createTheme({
        typography: {
          fontFamily: ["Permanent Marker"],
          color: "#FFCC00",
        },
      });

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
    
    
    const navigate = useNavigate();

    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar sx={{ backgroundColor: "#1c2123", position: "sticky" }}>
      <Toolbar>
        {isMatch ? (
          <>
            <DrawerComp />
            <Box sx={{
              padding: "1% 0 1%"
            }}> 
              <CardMedia 
              component="img"
              height="65px"
              width="70px"
              image={card1} 
              />
             </Box>
          </>
        ) : (
          <>
            <Box sx={{
                marginLeft: "50px",
                padding: "5px 0"
            }}>
            <CardMedia 
             component="img"
             height="70px"
             image={card1} 
             />
             </Box>
            <Box
              sx={{
                marginLeft: "auto",
                padding: "12px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => {
                  navigate("/");
                  scrollToTop();
                }}
                sx={{
                //   marginRight: { md: "-20px", lg: "40px" },
                marginLeft: "23px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  fontFamily: "Rubik, Sans-Serif", 
                  fontSize: { xs: "0.9rem", xl: "1.2rem" },
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Home
              </Button>
              <Button
                sx={{
                //   marginRight: { md: "-20px", lg: "35px" },
                marginLeft: "30px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  fontFamily: "Rubik, Sans-Serif", 
                  fontSize: { xs: "0.9rem", xl: "1.2rem" },
                  color: "white",
                  fontWeight: "600",
                }}
                // onClick={() => navigate("/order-now")}
              >
                About Us
              </Button>
              {/* <ThemeProvider theme={theme}> */}
                {/* <Button
                //   onClick={() => navigate("/")}
                  sx={{
                    // marginRight: { md: "-20px", lg: "35px" },
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    // fontSize: { xs: "0.9rem", xl: "1.7rem" },
                    color: "#d10101",
                    fontWeight: "800",
                  }}
                >
                  {" "}
                  Jonah's Kabob{" "}
                </Button> */}
              {/* </ThemeProvider> */}
              <Button
                // onClick={() => {
                //   challenge ? navigate("/TheChallenge") : setOpen(true);
                // }}
                sx={{
                //   marginRight: { md: "-20px", lg: "35px" },
                marginLeft: "30px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  fontFamily: "Rubik, Sans-Serif", 
                  fontSize: { xs: "0.9rem", xl: "1.2rem" },
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Products
              </Button>
              <Button
                onClick={() => {
                  navigate("/contact");
                  scrollToTop();
                }}
                sx={{
                  marginRight: "20px",
                  marginLeft: "30px",
                  paddingLeft: "25px",
                  paddingRight: "25px",
                  fontSize: { xs: "0.9rem", xl: "1.2rem" },
                  color: "white",
                  fontWeight: "600",
                  fontFamily: "Rubik, Sans-Serif", 
                }}
              > 
                Contact Us
              </Button>
              
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
    )
}