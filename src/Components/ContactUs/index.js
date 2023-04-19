import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Grid,
  } from "@mui/material";
  import AOS from "aos";
  import "aos/dist/aos.css";
   import React, { useState, useEffect } from "react";
//   import { makeStyles } from "@mui/styles";
//   import CustomDialog from "../Dialog/index.js";
   import { FormHelperText } from "@mui/material";
//   import { createContact } from "../../utils/all-helper";
  import { useFormik } from "formik";
  import * as Yup from "yup";
  import Man from "../../assets/images/card1.jpg"
  import home from "../../assets/images/behr4.jpg";
  import { ThemeProvider, createTheme, makeStyles } from "@mui/styles";
//   import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: "#febd00",
//       },
//       secondary: {
//         main: "#febd00",
//       },
//     },
//   });
  const useStyles = makeStyles({
    container: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "2%",
      paddingTop: 40,
      paddingBottom: 40,
      backgroundColor: "#fff",
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.3)",
      width: "80%",
    },
    heading: {
      fontWeight: "800",
      fontFamily: "Rubrik, Sans-serif",
      marginBottom: 20,
      color: "#1c2123",
      fontSize: "50px",
    },
    textField: {
      marginBottom: 20,
      backgroundColor: "#fff",
      width: "100%",
      flexDirection: "column",
      // alignItems: "center",
      // justifyContent: "center",
    },
    button: {
      backgroundColor: "#1c2123",
      color: "white",
      fontWeight: "600",
      fontSize: "0.9rem",
      marginTop: 20,
      textTransform: "none",
      padding: "10px",
      "&:hover": {
        backgroundColor: "#1c2123",
      },
    },
  });
  
  function ContactUs() {
    React.useEffect(() => {
      AOS.init();
    }, []);
  
    
    const [openDialog, setOpenDialog] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
  
    const classes = useStyles();
  
//     const [center, setCenter] = useState(null);
//   const zoom = 14;

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const { latitude, longitude } = position.coords;
//         setCenter({ lat: latitude, lng: longitude });
//       });
//     }
//   }, []);

//   if (!center) {
//     return <div>Loading...</div>;
//   }
    const handleErrorClose = () => {
      setErrorMsg(false);
    };

    const formik = useFormik({
      initialValues: {
        name: "",
        email: "", 
        message: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required("Name is required")
          .test(
            "not-only-spaces",
            "Name must not be only spaces",
            (value) => !!value && value.trim().length > 0
          ),
  
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"), 
        message: Yup.string()
          .required("Message is required")
          .min(10, "Message must be at least 10 characters"),
      }),
      onSubmit: async () => {
        // try {
        //   const res = await createContact(formik.values);
        //   console.log(res);
        //   if (res.success) {
        //     formik.resetForm();
        //     setOpenDialog(true);
        //   } else {
        //     setErrorMsg(res.message);
        //   }
        // } catch (error) {
        //   console.log(error);
        // }
      },
    });

    const handleClose = () => {
      setOpenDialog(false);
    };
  
    return (
    //   <ThemeProvider theme={theme}>
    <Box> 
    <Box sx={{
        backgroundColor:"rgba(0,0,0,0)",
        pb: 5,
        // position: '',
        overflow: 'hidden',
            backgroundImage: `url(${home})`,
            minHeight: "200px",
            backgroundAttachment: "fixed",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',  
    }}> </Box>
        <Grid
          container
          spacing={0}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ backgroundColor: "#fff"}}
        >
          
          <Grid
            item
            xs={12}
            md={6} 
            sx={{
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Container
                maxWidth="md"
                className={classes.container} 
              >
                <Typography
                  variant="h4"
                  className={classes.heading}
                  style={{ textTransform: "uppercase" }}
                >
                  Contact Us
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                  <TextField
                    error={Boolean(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    margin="normal"
                    name="name"
                    variant="outlined"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.name}
                    disabled={formik.isSubmitting}
                    label="Name"
                    required
                    className={classes.textField}
                    sx={{
                      display: "flex",
                      textAlign: "left",
                       
                    }}
                    InputProps={{
                      style: {
                        border: "1px solid #1c2123"
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "600",
                      },
                    }}
                  />
                  <TextField
                    type="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    value={formik.values.email}
                    disabled={formik.isSubmitting}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    helperText={formik.touched.email && formik.errors.email}
                    className={classes.textField}
                    sx={{
                      display: "flex",
                      textAlign: "left",
                    }}
                    InputProps={{
                      style: {
                        border: "1px solid #1c2123"
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "600",
                      },
                    }}
                  /> 
  
                  <TextField
                    type="text"
                    name="message"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    className={classes.textField}
                    error={Boolean(
                      formik.touched.message && formik.errors.message
                    )}
                    helperText={formik.touched.message && formik.errors.message}
                    margin="normal"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    disabled={formik.isSubmitting}
                    sx={{
                      display: "flex",
                      textAlign: "left",
                    }}
                    InputProps={{
                      style: {
                        border: "1px solid #1c2123"
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "600",
                      },
                    }}
                  />
  
                  <Box display="flex" justifyContent="center">
                    <Button type="submit" className={classes.button}>
                      Send Message
                    </Button>
                  </Box>
  
                  {/* <CustomDialog
                    open={openDialog}
                    handleClose={handleClose}
                    title="Success"
                    message="Message sent successfully!"
                    buttonText="Ok"
                  /> */}
                </form>
              </Container>
            </Box>
          </Grid>
  
          {/* {errorMsg && (
            <CustomDialog
              open={!!errorMsg}
              handleClose={handleErrorClose}
              title="Failed"
              message={errorMsg}
              buttonText="Ok"
            />
          )} */}
  
           
          <Grid item xs={12} md={4}>
            <img src={Man} alt="ContactImage" height={"100%"} width={"100%"} />
          </Grid>     
        </Grid>
    {/* //   </ThemeProvider> */}
    </Box>
    );
  }
  export default ContactUs;
  