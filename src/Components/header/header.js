import React from 'react'
import "./header.css";
import { Add, ExpandMore, Flag, Forum, Home, NotificationsActive, Search } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';

const Header=()=>{
//function Header(){
    return(
        <div className="header">
            <div className="header_left">
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png'
                    alt=''
                />
                <div className='header_input'>
                    <Search />
                    <input type='text' />
                </div>
            </div>
            <div className="header_center">
                <div className="header_option">
                    <Home fontSize="large"/>
                </div>
                <div className="header_option">
                    <Flag fontSize="large"/>
                </div>
            </div>
            <div className="header_right">
                <div className='header_info'>
                    <Avatar/>
                </div>
                <IconButton>
                    <Add/>
                </IconButton>
                <IconButton>
                    <Forum/>
                </IconButton>
                <IconButton>
                    <NotificationsActive/>
                </IconButton>
                <IconButton>
                    <ExpandMore/>
                </IconButton>
            </div>
        </div>
    )
}
export default Header