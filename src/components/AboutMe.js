import React, { useState } from 'react';
import { AppBar, Button, Drawer, Grid, styled, Toolbar, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import { makeStyles } from '@mui/styles'
import profileImg from "./images/profile.png"
const useStyles = makeStyles({
    container: {
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
        marginTop:"80px"
    },
    profileImg:{
        width:"100%",
        borderRadius:"6px",
        border:"3px solid #ADE8F4",
    },
    skillList:{
        fontSize:"16px",
        display:"flex",
        marginTop:"10px"
    }
})

const AboutMe=()=>{
    const classes = useStyles();
    return(
        <Grid id="aboutme" container sx={{ width: { lg: "70%", md: "90%", sm: "90%", xs: "90%" },height:"100%",marginBottom:"14px"}} className={classes.container}>
            <Grid item lg={12} md={12} xs={12}>
                <Typography variant="h4" sx={{fontWeight:"500",fontSize:"36px"}}>About Me</Typography>
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12} sx={{marginTop:"10px",display:"flex",flexDirection:"column"}}>
                <Typography variant="a" 
                sx={{fontWeight:"400",fontSize:"16px",marginTop:"10px"}}>I'm Rudfaan Maimahad, live in Satun, Thailand.
                </Typography>
                <Typography variant="a" 
                sx={{fontWeight:"400",fontSize:"16px",marginTop:"10px"}}>Birthday: 10 July 2003.
                </Typography>
                <Typography variant="a" 
                sx={{fontWeight:"400",fontSize:"16px",marginTop:"10px"}}>Age: 19 years old.
                </Typography>
                <Typography  sx={{marginTop:"20px",fontWeight:"500",fontSize:"20px"}}>💻Skills</Typography>
                <ul>
                    <li><a className={classes.skillList}>Languages: JavaScript, Python, C#, SQL</a></li>
                    <li><a className={classes.skillList}>Framework/Tools: React, Node.js, Unity (Game Engine), MUI</a></li>
                    <li><a className={classes.skillList}>Typing: English (88 wpm), Thai (90wpm)</a></li>
                </ul>
                <Typography  sx={{marginTop:"10px",fontWeight:"500",fontSize:"20px"}}>🔥Main Focus</Typography>
                <ul>
                    <li><a className={classes.skillList}>Web Application</a></li>
                    <li><a className={classes.skillList}>Game Development</a></li>
                    <li><a className={classes.skillList}>Artificial Intelligence (Deep Learning and etc.)</a></li>
                </ul>
                <Typography sx={{marginTop:"10px",fontWeight:"500",fontSize:"20px"}}>🎓Education</Typography>
                <ul>
                    <li><a className={classes.skillList}>Undergraduate in Bachelor of Computer Engineering @KMUTT</a></li>
                    <li><a className={classes.skillList}>High School: Princess Chulabhorn's Science High School Satun</a></li>
                    <li><a className={classes.skillList}>Primary School: Puriponchai Suksa Satun</a></li>
                </ul>
                
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12} sx={{marginTop:"10px",position:"relative"}}>
                <img src={profileImg} className={classes.profileImg}/>
                <Typography variant="h6" sx={{fontWeight:"500",fontSize:"20px",marginTop:"10px"}}>😀Hobby</Typography>
                <ul>
                    <li><a className={classes.skillList}>Sports: Basketball, Table Tennis, Badminton</a></li>
                    <li><a className={classes.skillList}>Music: Rock, Punk, Pop, Indie</a></li>
                    <li><a className={classes.skillList}>Guitar</a></li>
                    <li><a className={classes.skillList}>Movies, Anime</a></li>
                    <li><a className={classes.skillList}>Writing Blog</a></li>
                </ul>
            </Grid>
        </Grid>
    )
}
export default AboutMe;