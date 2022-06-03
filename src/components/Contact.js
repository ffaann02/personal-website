import React, { useState } from 'react';
import Axios from 'axios'
import { AppBar, Button, Drawer, Grid, styled, TextField, Toolbar, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import { makeStyles } from '@mui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faMediumM, faInstagram } from '@fortawesome/free-brands-svg-icons'
import emoji02 from './images/emoji02.png'
const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
        marginTop: "60px",
    },
    socialIcon: {
        fontSize: "30px",
        marginRight: "20px",
        color: "#0096C7",
        cursor: "pointer",
        "&:hover": {
            color: "#03045E"
        },
    },
    contactAvatar: {
        width: "300px",
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
        justifySelf: "center"
    }
})

const SubmitButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#0096C7",
    width: "100%",
    fontSize: "16px",
    marginTop: "20px",
    color: "white",
    "&:hover": {
        backgroundColor: "#0077B6"
    },
}))

const Contact = () => {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const onSubmit = () => {
        const contact_name = document.getElementById("name").value;
        const contact_email = document.getElementById("email").value;
        if (contact_email != "" && contact_name != "") {
            Axios.post('https://faan-personal-web-crud-api.herokuapp.com/contact',
                {
                    name: contactData.name,
                    email: contactData.email,
                    message: contactData.message
                }).then((response) => {
                    console.log(response.status);
                });
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        }
        else {
        }
    }
    const classes = useStyles();
    return (
        <Grid id="contact" container sx={{ width: { lg: "70%", md: "90%", sm: "90%", xs: "90%" }, height: "100%", marginBottom: "14px" }} className={classes.container}>
            <Grid item lg={12} md={12} xs={12} sx={{ textAlign: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: "500", fontSize: "36px" }}>Get In Touch</Typography>
                <Typography variant="a" sx={{ fontWeight: "400", fontSize: "16px" }}>ติดต่อผมหรือเข้ามาพูดคุยกันเล่น ๆ ได้นะครับ</Typography>
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={12}>
                <TextField id="name" label="Name" variant="outlined" sx={{ width: "100%", marginTop: "20px" }}
                    onChange={(e) => { setContactData({ ...contactData, name: e.target.value }) }}
                />
                <TextField id="email" label="Email" variant="outlined" sx={{ width: "100%", marginTop: "20px" }}
                    onChange={(e) => { setContactData({ ...contactData, email: e.target.value }) }}
                />
                <TextField
                    id="message"
                    label="Message"
                    multiline
                    rows={6}
                    defaultValue=""
                    sx={{ width: "100%", marginTop: "20px" }}
                    onChange={(e) => { setContactData({ ...contactData, message: e.target.value }) }}
                />
                <SubmitButton onClick={() => { onSubmit() }}>SUBMIT</SubmitButton>
            </Grid>
            <Grid item lg={6} md={6} xs={12} sm={12}>
                <Box sx={{ marginLeft: "10px", marginTop: "20px" }}>
                    <Typography variant="h6">สนับสนุนค่ากาแฟ☕: 0950987758 พร้อมเพย์</Typography>
                    <Typography variant="h6" sx={{ marginTop: "10px" }}>Social Media:</Typography>
                    <Box sx={{ width: "100%", marginTop: "10px" }}>
                        <a href="https://www.facebook.com/rudfanmaimahad/"><FontAwesomeIcon icon={faFacebook} className={classes.socialIcon}/></a>
                        <a href="https://www.instagram.com/lnw_faan/?hl=en"><FontAwesomeIcon icon={faInstagram} className={classes.socialIcon}/></a>
                        <a href="https://twitter.com/lnw_faan"><FontAwesomeIcon icon={faTwitter} className={classes.socialIcon}/></a>
                        <a href="https://medium.com/@ffaann"><FontAwesomeIcon icon={faMediumM} className={classes.socialIcon}/></a>
                    </Box>
                    <img src={emoji02} className={classes.contactAvatar} />
                </Box>
            </Grid>
        </Grid>
    )
}
export default Contact;