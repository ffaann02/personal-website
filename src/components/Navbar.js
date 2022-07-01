import React, { useState ,useEffect} from 'react';
import { AppBar, Button, Drawer, styled, Toolbar, Typography } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { makeStyles } from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from "@mui/system";
import { useNavigate, NavLink } from 'react-router-dom';
import {Link} from "react-scroll"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import imageSidebarMobile from "./images/people-group.png"
const useStyles = makeStyles({
    box:{
        background:"linear-gradient(to bottom, #ffffff 0%, #bde6f1 100%)",
        width:"80%",
    },imageSidebarMobile:{
      width:"100%"
    }
})
const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between",
    backgroundColor:"white",
    marginLeft:"auto",
    marginRight:"auto",
    alignSelf:"center"
})
const Buttons = styled(Box)(({theme})=> ({
    
}));
const NavbarButton = styled(Button)(({theme})=>({
    marginLeft:"20px",
    color:"#023E8A",
    borderRadius:"8px",
    "&:hover":{
        backgroundColor:"rgba(202, 240, 248,0.4)"
    }
}));

const Navbar=()=>{
    const history = useNavigate();
    const classes = useStyles();
    const [isOpen,setIsOpen] = useState(false)

    const [buttonVisible,setButtonVisible] = useState(false)

    const toggleVisibility = () =>{
        if(window.pageYOffset > 300){
            setButtonVisible(true)
        }
        else{
            setButtonVisible(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',toggleVisibility)
        return()=>{
            window.removeEventListener('scroll',toggleVisibility)
        }
    },[])
    return(
        <div>
        <AppBar position="fixed" elevation={0} sx={{backgroundColor:"white", boxShadow:"0 2px 10px rgb(0 0 0 / 0.125)",width:"100%"}}>
            <StyledToolbar sx={{width:{lg:"70%",md:"90%",sm:"90%",xs:"90%"}}}>
                <Typography variant="h6" sx={{display:{xs:"none",sm:"block"},color:"#03045E",fontWeight:"700",cursor:"pointer"}} onClick={()=>{
                    history("/")
                }}>
                    <Link to="heroblock" smooth duration={1000} offset={-100}>FFAANN</Link>
                </Typography>
                <MenuIcon sx={{display:{xs:"block",sm:"none"},color:"#03045E",cursor:"pointer"}} onClick={()=>{setIsOpen(prev=>!prev)}}/>
                <Buttons sx={{display:{xs:"none",sm:"block"}}}>
                    <Link to="aboutme" smooth duration={1000} offset={-90}>
                        <NavbarButton variant="text">PROFILE</NavbarButton>
                    </Link>
                    <Link to="blog" smooth duration={1000} offset={-100}>
                        <NavbarButton variant="text">BLOG</NavbarButton>
                    </Link>
                    <Link to="contact" smooth duration={1000} offset={-100}>
                        <NavbarButton variant="text">CONTACT</NavbarButton>
                    </Link>
                </Buttons>
            </StyledToolbar>
        </AppBar>
        <Drawer variant='temporary' open={isOpen} classes={{paper: classes.box}} onBackdropClick={()=>{setIsOpen(false)}}>
        <Typography variant="h6" sx={{fontSize:"30px",marginLeft:"20px",marginTop:"20px",color:"#03045E"}}>FFAANN</Typography>
        <List>
          <Link to="heroblock" onClick={()=>{setIsOpen(false)}} smooth duration={1000} offset={-100}>
          <ListItem disablePadding sx={{margin:"10px 0 10px 0"}}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{fontSize:"20px"}}>HOME</Typography>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="aboutme" onClick={()=>{setIsOpen(false)}} smooth duration={1000} offset={-100}>
          <ListItem disablePadding sx={{margin:"10px 0 10px 0"}} >
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{fontSize:"20px"}}>PROFILE</Typography>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="blog" onClick={()=>{setIsOpen(false)}} smooth duration={1000} offset={-100}>
          <ListItem disablePadding sx={{margin:"10px 0 10px 0"}}>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{fontSize:"20px"}}>BLOG</Typography>
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="contact" onClick={()=>{setIsOpen(false)}} smooth duration={1000} offset={-100}>
          <ListItem disablePadding sx={{margin:"10px 0 10px 0"}}>
            <ListItemButton>
              <ListItemIcon>
                <CallIcon />
              </ListItemIcon>
              <Typography variant="h6" sx={{fontSize:"20px"}}>CONTACT</Typography>
            </ListItemButton>
          </ListItem>
          </Link>
        </List>
        <Box sx={{position:"absolute",right:"10px",top:"10px"}} onClick={()=>{setIsOpen(false)}}>
            <CloseIcon sx={{fontSize:"30px",color:"red",cursor:'pointer'}}/>
        </Box>
        <Box sx={{width:"100%",position:"absolute",bottom:"0"}}>
                  <img  src={imageSidebarMobile} className={classes.imageSidebarMobile} />
                </Box>
        </Drawer>
        {buttonVisible?
        <Box sx={{display:{lg:"block",md:"block",sm:"none",xs:"none"},backgroundColor:"red",position:"fixed",borderRadius:"6px",backgroundColor:"#CAF0F8",cursor:"pointer"
        ,bottom:"20px",right:"20px",zIndex:"4"}}>
            <Link to="heroblock" smooth duration={1000} offset={-100}>
                <KeyboardArrowUpIcon sx={{fontSize:"40px",color:"#023E8A"}}/>
            </Link>
        </Box>
        :""}
        </div>
    )
}
export default Navbar;