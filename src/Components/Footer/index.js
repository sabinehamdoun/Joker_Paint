import { Box, Grid, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
    return (
        <Box sx={{backgroundColor: "#1c2123"}}>
            <Grid container spacing={2}>
                <Grid item md={4} sx={{margin: "0 0 0 7%"}}>
                    <Typography sx={{color: "white", fontSize: "20px", fontWeight: "bold", margin: "0 0 10px"}}>
                        Location
                    </Typography>
                    <Box sx={{
                        display: "flex", 
                        margin: '0 0 0 3%'
                    }}>
                        <LocationOnIcon />
                        <Typography sx={{color: "white", fontSize: "17px", padding: "0 0 2% 2%"}}>
                            Airport Street, Haret Hreik
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        margin: '0 0 0 3%'
                    }}>
                        <LocalPhoneIcon />
                        <Typography sx={{color: "white", fontSize: "17px", padding: "0 0 2% 2%"}}>
                            +961 3 660 665
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        margin: '0 0 0 3%'
                    }}>
                        <EmailIcon />
                        <Typography sx={{color: "white", fontSize: "17px", padding: "0 0 2% 2%"}}>
                            ghasshamdoun@gmail.com
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={4}> 
                    <Typography sx={{color: "white", fontSize: "20px", fontWeight: "bold", margin: "0 0 10px"}}>
                        Social Media
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
                            marginRight: "28px",
                            fontSize: "35px"
                        }}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}