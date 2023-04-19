import { Box, CardMedia, Grid, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import card1 from "../../assets/images/HeaderLogo.svg";

export default function Footer() {
    return (
        <Box sx={{backgroundColor: "#2f2f2f", padding: "2% 0 2% 7%"}}>
            <Grid container spacing={2}>
            <Grid item md={4}>
                <Box sx={{
                        width: "140px" 
                    }}> 
                    <CardMedia 
                    component="img"
                    height="75px"
                    image={card1}
                    />
                    </Box>
                    <Box sx={{
                        display: "flex",  
                    }}> 
                        <Typography sx={{color: "white", fontSize: "16.5px", padding: "4% 0", width: "300px"}}>
                            We are a young company always looking for new and creative ideas to help 
                            you with our products in you everyday work
                        </Typography>
                    </Box>
                     
                </Grid>
                <Grid item md={4}>
                    <Typography sx={{color: "white", fontSize: "20px", fontWeight: "bold", margin: "0 0 5%"}}>
                        Contact
                    </Typography>
                    <Box sx={{
                        display: "flex", 
                        margin: '0 0 5% 3%'
                    }}>
                        <LocationOnIcon sx={{color: "white"}}/>
                        <Typography sx={{color: "white", fontSize: "17px", padding: "0 0 2% 2%"}}>
                            Airport Street, Haret Hreik
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        margin: '0 0 5% 3%'
                    }}>
                        <LocalPhoneIcon sx={{color: "white"}}/>
                        <Typography sx={{color: "white", fontSize: "17px", padding: "0 0 2% 2%"}}>
                            +961 3 660 665
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        margin: '0 0 2% 3%'
                    }}>
                        <EmailIcon sx={{color: "white"}} />
                        <Typography sx={{color: "white", fontSize: "17px", padding: "0 0 2% 2%"}}>
                            ghasshamdoun@gmail.com
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={4} > 
                    <Typography sx={{color: "white", fontSize: "20px", fontWeight: "bold", margin: "0 0 5%"}}>
                        Follow Us
                    </Typography>
                    <Box sx={{display: "flex",color: "white", margin: '0 0 0 3%'}}>
                        <InstagramIcon sx={{
                            marginRight: "28px",
                            fontSize: "35px"
                        }}/>
                        <FacebookIcon sx={{
                            marginRight: "28px",
                            fontSize: "35px"
                        }}/>
                        <WhatsAppIcon sx={{ 
                            fontSize: "35px"
                        }}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}