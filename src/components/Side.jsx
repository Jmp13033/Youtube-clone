import React from 'react'
import '../side.css'



function Side({Icon,title}) {
  return (
    <div className='side'>
  
    <span className='sidebaricon'>{Icon}</span>
    <h2 className='sidebartitle'>{title}</h2>
    </div>
  )
}

export default Side