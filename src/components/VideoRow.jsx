import React from 'react'
import '../VideoRow.css'


function VideoRow({views, description, channel,subs, title, timestamp, image  }) {
  return (
    <div className='videoRow'>
    <img src={image} alt=''/>
    <div className='"vidrow_text'>
    <h3>{title}</h3>
    <p className='video_row_headline'>{channel} * <span className='subs'>{subs}</span> subscribers * {views} views {timestamp} timestamp  </p>
    <span className='description'><p> {description}</p></span>
    
    </div>
    
    
    
    </div>
  )
}

export default VideoRow