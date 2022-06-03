import React, { useState } from 'react';
import { AppBar, Button, Drawer, Grid, styled, Toolbar, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu';
import { Box, style } from "@mui/system";
import emoji03 from "./images/emoji03.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import guitarImg from "./images/guitar.png"
import cameraImg from "./images/camera.png"
import programmingImg from "./images/programming.png"
import basketballImg from "./images/basketball-ball.png"
import gameImg from "./images/game-controller.png"
import aiImg from "./images/ai.png"
import typingImg from "./images/typing.png"
import './HeroBlockStyle.css'
import { Link } from "react-scroll"
import { useNavigate, NavLink } from 'react-router-dom';
const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
    },
    leftImg: {
        width: "100%"
    },
    leftImgResponsive: {
        width: "200px"
    },
    uniIcon: {
        color: "#023E8A"
    },
    object: {
        width: "10px"
    }

})

const Buttons = styled(Box)(({ theme }) => ({
    marginTop: "10px"
}));
const HeroButton = styled(Button)(({ theme }) => ({
    color: "#0077B6",
    borderRadius: "8px",
    "&:hover": {
        backgroundColor: "rgba(202, 240, 248,0.4)",
    },
    cursor: "pointer",
}));

const HeroBlock = () => {
    const history = useNavigate();
    function ParallaxBG() {
        document.addEventListener("mousemove", parallax);
        function parallax(e) {
            document.querySelectorAll("#object,#objectMini").forEach(function (move) {
                var moving_value = move.getAttribute("data-value");
                var x = e.clientX * moving_value / 100;
                var y = e.clientY * moving_value / 100;
                move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"
            })
        }
    }
    ParallaxBG();
    const classes = useStyles();
    return (
        <Grid id="heroblock" container className={classes.container} sx={{
            width: { lg: "70%", md: "90%", sm: "90%", xs: "90%" }, height: "100%",
            marginTop: { lg: "40px", md: "40px", sm: "10px", xs: "10px" }
        }}>
            <Grid item lg={12} md={12} xs={12} sx={{ textAlign: "center", position: "relative", zIndex: "2" }}>
                <Box sx={{ display: "flex", marginLeft: "auto", marginRight: "auto", alignSelf: "center", width: { lg: "400px", md: "400px", sm: "400px", xs: "300px" } }}>
                    <img src={emoji03} className={classes.leftImg} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: "600" }}>Hi 👋, I'm Rudfaan.</Typography>
                <Typography variant="h6" sx={{ marginTop: "10px" }}>a Computer Engineering Student @KMUTT</Typography>
                <Typography variant="h6" sx={{ marginTop: "10px" }}>Interested in Coding, Instrumental, Photography and Sports.</Typography>
                <Buttons>
                    <Link to="aboutme" smooth duration={1000} offset={-100}>
                        <HeroButton>
                            <Typography>👦🏽</Typography><Typography sx={{ fontWeight: "500", marginLeft: "4px", }}>About me</Typography>
                        </HeroButton>
                    </Link>
                    <HeroButton href="https://github.com/ffaann02">
                        <GitHubIcon sx={{ width: "20px", color: "#03045E" }} /><Typography sx={{ fontWeight: "500", marginLeft: "4px" }}>Github</Typography>
                    </HeroButton>
                </Buttons>
                <Link to="portfolio" smooth duration={1000} offset={-100}>
                    <HeroButton sx={{ marginTop: "2px" }} onClick={() => { }}>
                        <FontAwesomeIcon className={classes.uniIcon} icon={faUniversity} />
                        <Typography sx={{ fontWeight: "500", marginLeft: "4px" }}>Portfolio for university</Typography>
                    </HeroButton>
                </Link>
            </Grid>
            <Grid item lg={12} md={12} xs={12}
                sx={{
                    position: "absolute",
                    width: { lg: "70%", md: "90%", sm: "90%", xs: "90%" }, height: "86%", zIndex: "1", display: { lg: "flex", md: "flex", sm: "none", xs: "none" }
                }}>
                <Box className="backgroundHero" sx={{ display: { lg: "flex", md: "flex", sm: "flex", xs: "none" } }}>
                    <img src={programmingImg} id="object" data-value="-2" alt="" />
                    <img src={gameImg} id="object" data-value="-2" alt="" />
                    <img src={guitarImg} id="object" data-value="-4" alt="" />
                    <img src={typingImg} id="object" data-value="-2" alt="" />
                    <img src={basketballImg} id="object" data-value="-2" alt="" />
                    <img src={aiImg} id="object" data-value="-4" alt="" />
                    <img src={cameraImg} id="object" data-value="-2" alt="" />
                </Box>
                <Box className="backgroundHero" id="miniBackgroundHero" sx={{ display: { lg: "none", md: "none", sm: "none", xs: "flex" } }}>
                    <img src={programmingImg} id="objectMini" data-value="-2" alt="" />
                    <img src={gameImg} id="objectMini" data-value="-2" alt="" />
                    <img src={guitarImg} id="objectMini" data-value="-4" alt="" />
                    <img src={typingImg} id="objectMini" data-value="-2" alt="" />
                    <img src={basketballImg} id="objectMini" data-value="-2" alt="" />
                    <img src={aiImg} id="objectMini" data-value="-4" alt="" />
                    <img src={cameraImg} id="objectMini" data-value="-2" alt="" />
                </Box>
            </Grid>
        </Grid>
    )
}
export default HeroBlock;