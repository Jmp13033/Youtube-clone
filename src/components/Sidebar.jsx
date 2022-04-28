import React from 'react'
import '../Sidebar.css'
import Side from './Side'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import  OndemandVideoIcon  from '@material-ui/icons/OndemandVideo';
import HistoryIcon from '@material-ui/icons/History'
import  VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import  WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import  ExpandMoreRoundedIcon  from '@material-ui/icons/ExpandMoreRounded';






function Sidebar() {
return (
        <div className='SideBarRow'>
        <Side Icon= {<HomeIcon/>} title="home"/>
        <Side Icon={<WhatshotIcon/>}  title="Trending"/>
        <Side Icon={<SubscriptionIcon/>} title="Subscription"/>
        <hr/>
        <Side Icon= {<VideoLibraryIcon/>} title="Library"/>
        <Side Icon={<HistoryIcon/>}  title="History"/>
        <Side Icon={<OndemandVideoIcon/>} title="Your Videos"/>
        <Side Icon={<WatchLaterIcon/>} title="Watch Later"/>
        <Side Icon={<ThumbUpRoundedIcon/>} title="Liked"/>
        <Side Icon={<ExpandMoreRoundedIcon/>} title="Expand"/>
        
        
        
        
        
        </div>
)
}

export default Sidebar