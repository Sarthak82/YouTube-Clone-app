import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import './Header.css'


const Header = ()=>{
    return(
        <div className="header">
            <div className='header__left'>
                <MenuIcon/>  
                <img className='header__logo' src='https://clipart-library.com/images_k/youtube-logo-png-transparent/youtube-logo-png-transparent-12.png' alt="youtube_logo"/>   
            </div>

            <div className='header__input'>
                <input placeholder='Search' type='text'/>      
                <YoutubeSearchedForIcon className='header__inputButtton'/> 
            </div>

            <div className='header__icons'>
                <VideoCallIcon className='header__icon'/>
                <AppsIcon className='header__icon'/>
                <NotificationsNoneIcon className='header__icon'/>
                <Avatar
                    alt="account_circle_icon"
                    srcSet ="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                />
            </div>
        </div>
    )
}


export default Header