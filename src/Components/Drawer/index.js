import React, { useEffect } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  Box,
  IconButton,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const Pages = [
    { label: "The Family", path: "/Family" },
    { label: "#TheChallenge", path: "/TheChallenge" },
    { label: "Home", path: "/" },
    { label: "Order Now", path: "/order-now" },
    { label: "Contact Us", path: "/contact-us" },
  ];
  const theme = createTheme({
    typography: {
      fontFamily: ["Permanent Marker"],
      color: "#FFCC00",
    },
  });

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ height: "100%", backgroundColor: "#fff5e7" }}>
          <ThemeProvider theme={theme}>
            <Typography
              sx={{
                backgroundColor: "#ffcf3d",
                padding: "10px",
                textAlign: "center",
                fontSize: "1.9rem",
                color: "#d90101",
              }}
            >
              Jonah's Kobab
            </Typography>
          </ThemeProvider>
          <List sx={{ textTransform: "uppercase" }}>
            {Pages.map((page, index) => (
              <ListItemButton
                component={Link}
                to={ `${page.path}`
                }
                onClick={() => {
                  setOpenDrawer(false); 
                }}
                key={index}
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <ListItemIcon>
                  <Typography
                    sx={{
                      color: "#d91010",
                      fontFamily: "Rubrik, Sans-serif",
                      fontSize: "21px",
                      fontWeight: "800",
                      margin: "20px 0px 20px",
                      borderRadius: "4px",
                      padding: "6px 8px 6px 8px",
                    }}
                  >
                    {" "}
                    {page.label}{" "}
                  </Typography>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer> 
      <IconButton
        sx={{ color: "#d91010", marginRight: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ fontSize: 35 }} />
      </IconButton>
    </>
  );
}

export default DrawerComp;
