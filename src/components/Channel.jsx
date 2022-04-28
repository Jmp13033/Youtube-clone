import React from 'react'
import "../ChannelRow.css"
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';


function Channel({image, channel,subs, numofvideos, verified, description }) {
  return (
    <div className='channelrow'>
    <Avatar
    className='channel_logo'
    src={image} alt={channel}

    />

    <div className='ChannelRow_text'><h4>{channel} {verified && <CheckIcon/> }</h4>
    <p>  {subs} * subscribers {numofvideos} videos </p>
    <p>{description}</p>
    </div>

    
    </div>
  )
}

export default Channel