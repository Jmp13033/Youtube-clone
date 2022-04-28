import React from 'react'
import "../Searchcomp.css"
import  TuneIcon  from '@material-ui/icons/Tune';
import Channel from '../components/Channel';
import VideoRow from '../components/VideoRow';

function SearchComp() {
  return (
    <div className='Searchpage'>
    <div className='search_filter'>
    <TuneIcon/>
    <h2>Filter</h2>
    </div>
    <hr/>

    <Channel
    image= "https://cdn.vox-cdn.com/thumbor/ElnzjjbS376s3BFUCnFrsyjBArA=/0x86:706x557/1400x1050/filters:focal(0x86:706x557):format(png)/cdn.vox-cdn.com/assets/738480/stevejobs.png"
    channel="you are cool"
    subs="678K"
    verified
    numofvideos={2} 
    description = "this is a good show "

    
    
    />

    <hr/>
    <VideoRow
    views ={870}
    description="this is the description"
    channel="Jeff Nippard Legend "
    subs= "350K"
    title="the legend Jeff "
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0Sc3IJopM39QfUmiiEXo6KECPJnZSntlPQ&usqp=CAU"

  
    timestamp = "1 Day ago"



    
    
    
    />
    <VideoRow
    views ={870}
    description="this is the description"
    channel="Jeff Nippard Legend "
    subs= "350K"
    title="the legend Jeff "
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0Sc3IJopM39QfUmiiEXo6KECPJnZSntlPQ&usqp=CAU"

  
    timestamp = "1 Day ago"



    
    
    
    />
    <VideoRow
    views ={870}
    description="this is the description"
    channel="Jeff Nippard Legend "
    subs= "350K"
    title="the legend Jeff "
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0Sc3IJopM39QfUmiiEXo6KECPJnZSntlPQ&usqp=CAU"

  
    timestamp = "1 Day ago"



    
    
    
    />
    <VideoRow
    views ={870}
    description="this is the description"
    channel="Jeff Nippard Legend "
    subs= "350K"
    title="the legend Jeff "
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0Sc3IJopM39QfUmiiEXo6KECPJnZSntlPQ&usqp=CAU"

  
    timestamp = "1 Day ago"



    
    
    
    />

    
    
    
    
    </div>
  )
}

export default SearchComp