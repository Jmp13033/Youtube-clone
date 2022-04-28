import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../VideoCard.css'
function Video({image, title, channel, views, channelImage, timestamp }) {
  return (
    <div className='video_card'>
      <img className="video_image" 
      src={image} 
      alt="image" />
      
      <div className='video_info'>
        <Avatar 
          className='video_avatar' 
          src={channelImage} 
          alt={channel}
        />

            <div className='video_text'>
        
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} * {timestamp}</p>
          
        </div>
      
    
    
    
        </div>
    
      
      
    </div>
  )
}

export default Video