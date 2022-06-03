import React, { useState } from 'react';
import { AppBar, Button, Drawer, Grid, styled, TextField, Toolbar, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import { makeStyles } from '@mui/styles'
import CopyrightIcon from '@mui/icons-material/Copyright';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faMediumM, faInstagram } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
    },
    socialIcon: {
        fontSize: "16px",
        marginRight: "20px",
        color: "#0096C7",
        cursor: "pointer",
        "&:hover": {
            color: "#03045E"
        },
    },
    socialIconLast: {
        fontSize: "16px",
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

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid id="footer" container sx={{ width: "100%", marginTop: "40px", marginBottom: "40px", }}>
            <Grid item lg={12} md={12} xs={12} sx={{ textAlign: "center", color: "rgba(0,0,0,0.5)" }}>
                <Typography variant="a" sx={{ fontWeight: "400", fontSize: "18px" }}>©️ 2022 Rudfaan Maimahad</Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sx={{ textAlign: "center", marginTop: "10px" }}>
                <Typography variant="a" sx={{ fontWeight: "400", fontSize: "18px", color: "rgba(0,0,0,0.5)" }}>Built with React, Materiul UI v5</Typography>
            </Grid>
            <Grid item lg={12} md={12} xs={12} sx={{ textAlign: "center", width: "30%", marginTop: "10px" }}>
                <a href="https://www.facebook.com/rudfanmaimahad/"><FontAwesomeIcon icon={faFacebook} className={classes.socialIcon} /></a>
                <a href="https://www.instagram.com/lnw_faan/?hl=en"><FontAwesomeIcon icon={faInstagram} className={classes.socialIcon} /></a>
                <a href="https://twitter.com/lnw_faan"><FontAwesomeIcon icon={faTwitter} className={classes.socialIcon} /></a>
                <a href="https://medium.com/@ffaann"><FontAwesomeIcon icon={faMediumM} className={classes.socialIconLast} /></a>
            </Grid>

        </Grid>
    )
}
export default Footer;