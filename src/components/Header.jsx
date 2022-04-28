import { useState } from 'react';
import React from 'react'
import "../header.css"
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import VideoCall from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom"




function Header() {

    const [search, setsearch] = useState("");
return (
<div className='header'>
<div className='header_left'>
<MenuIcon className='menuicon'/>

<Link to={"/"}>
<img className='header_logo' src="https://www.thesun.co.uk/wp-content/uploads/2017/10/nc-logo-youtube-mobile.jpg?strip=all&w=750&h=352&crop=1" alt="youtube"/>
</Link>
</div>

<div className='input_container'>
<input 
onChange={e => setsearch(e.target.value)} 
value={search} placeholder='search' 
type="text"/>

<Link to={`/search/${search}`} >
<SearchIcon className='search'/>
</Link>

</div>
<div className='header_icons'>
    <VideoCall className='header_icon'/>
    <AppsIcon className='header_icon'/>
    <NotificationsIcon className='header_icon'/>
    <Avatar src="https://media.npr.org/assets/img/2021/08/17/gettyimages-615964464-87e2d6a20361f132e96fadc48fe486fbb8d8d999.jpg" alt="Brett Favre "/>
</div>

    

</div>
)
}

export default Header