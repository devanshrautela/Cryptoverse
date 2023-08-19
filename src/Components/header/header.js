import React from 'react'
import "./header.css";
import { Add, ExpandMore, Flag, Forum, Home, NotificationsActive, Search } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import profile_pic from "../samples/images/profile_pic.jpeg";
const Header=()=>{
//function Header(){
    return(
        <div className="header">
            <div className="header_left">
                <h2 className='app_name'>Cryptomania</h2>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png'
                    alt=''
                />
            </div>
            <div className="header_center">
                <div className="header_option">
                    <Home fontSize="large" sx={{color:'white'}}/>
                </div>
                <div className='header_input'>
                    <Search />
                    <input type='text'placeholder='Search' />
                </div>
            </div>
            <div className="header_right">
                <div className='header_info'>
                    <Avatar src={profile_pic}/>
                </div>
                <IconButton>
                    <Forum sx={{color:'white',pl:1, pr:1}}/>
                </IconButton>
                <IconButton>
                    <NotificationsActive sx={{color:'white', pr:1}}/>
                </IconButton>
                <IconButton>
                    <ExpandMore sx={{color:'white', pr:1}}/>
                </IconButton>
            </div>
        </div>
    )
}
export default Header;