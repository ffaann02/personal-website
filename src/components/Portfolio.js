import React, { useState } from 'react';
import { AppBar, Button, Drawer, Grid, styled, TextField, Toolbar, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import { makeStyles } from '@mui/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUniversity} from '@fortawesome/free-solid-svg-icons'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Axios from 'axios';
const useStyles = makeStyles({
    container:{
        display: 'flex',
        marginLeft: "auto",
        marginRight: "auto",
        alignSelft: "center",
        marginTop:"40px",
        textAlign:"center"
    },
    uniIcon:{
        fontSize:"36px",
        marginTop:"8px",
        marginRight:"10px",
        color:"#023E8A"
    },
    portLink:{
        textDecoration:"none",
        color:"black"
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

const PortLinkText = styled(Typography)(({theme})=>({
    color:"#0077B6",
    padding:"2px 10px 2px 10px",
    marginLeft:"10px",
    borderRadius:"4px",
    "&:hover":{
        backgroundColor:"rgba(202, 240, 248,0.4)",
    },
    cursor:"pointer",
}))

const Portfolio=()=>{
    const classes = useStyles();
    const [data,setData] = useState({
        name:"",
        email:""
    })
    const onSubmitPort=()=>{
        const contact_name = document.getElementById("name_port").value;
        const contact_email = document.getElementById("email_port").value;
        if(contact_email!="" && contact_name!=""){
            Axios.post('https://faan-personal-web-crud-api.herokuapp.com/portfolio',
                {
                    name: data.name,
                    email: data.email,
                }).then((response) => {
                    console.log(response.status);
                });
            document.getElementById("name_port").value = "";
            document.getElementById("email_port").value = "";
        }
        else{
        }
    }
    return(
        <Grid id="portfolio" container className={classes.container} sx={{ width: { lg: "40%", md: "50%", sm: "70%", xs: "90%" },height:"100%"}}>
            <Grid item lg={12} md={12} xs={12}>
                <Typography sx={{fontWeight:"500",fontSize:"36px",marginLeft:"10px"}}>
                    <FontAwesomeIcon className={classes.uniIcon} icon={faUniversity}/>Portfolio for University
                </Typography>
                <Box>
                    <Typography variant="a">ระบบ Bot ขออนุญาตเข้าถึงไฟล์ Portfolio (07:00 - 22:00)</Typography>
                </Box>
                <Box>
                    <Typography variant="a">*อาจใช้เวลาประมาณนึงในการประมวลผล</Typography>
                </Box>
                <TextField id="name_port" label="Name" variant="outlined" sx={{ width: "100%", marginTop: "20px" }} 
                onChange={(e)=>{setData({...data,name:e.target.value})}}
                />
                <TextField id="email_port" label="Email" variant="outlined" sx={{ width: "100%", marginTop: "20px" }} 
                onChange={(e)=>{setData({...data,email:e.target.value})}}
                />
                <SubmitButton onClick={()=>{onSubmitPort()}}>SUBMIT</SubmitButton>
                <Box sx={{marginTop:"20px",display:'flex',textAlign:"center"}}>
                    <Typography variant="a" sx={{marginTop:"2px"}}>หากกรอกข้อมูลเรียบร้อยแล้ว</Typography>
                    <PortLinkText onClick={()=>{
                        window.open("https://drive.google.com/drive/folders/18xfcJvIk5UJIPGbyvOlHfSINXgJ6e9A-?usp=sharing")
                    }} variant="a">กดที่นี่
                    </PortLinkText>
                </Box>
                <Typography sx={{fontWeight:"500",fontSize:"30px",marginLeft:"10px",marginTop:"20px"}}>
                    <QuestionMarkIcon sx={{color:"#023E8A",fontSize:"26px"}}/>ทำไมต้องขอการเข้าถึง
                </Typography>
                <Typography variant="a">เดิมทีหากเปิดให้ทุกคนมีสิทธิเข้าถึงไฟล์ก็จะเป็นเรื่องง่ายใช่ไหมครับ 
                    แต่เนื่องจากการกลัวไฟล์ Portfolio นั้นถูกส่งต่อ ๆ กันไปจนไม่รู้จำนวนคนที่เข้าถึงไฟล์ว่ามีกี่คน ใครบ้าง
                    เลยคิดว่าใครอยากเข้าถึงพอร์ตก็ต้องอนุญาตก่อนนะครับ ข้อมูลชื่อและอีเมลไม่นำไปเผยแพร่ภายนอกครับ 
                    </Typography>
            </Grid>
        </Grid>
    )
}
export default Portfolio;