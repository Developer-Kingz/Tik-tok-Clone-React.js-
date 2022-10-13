import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react'

function VideoSidebar({likes, shares, messages}) {

  const [liked, setLiked] = useState(false)
  return (
    <div className='sidebar'>

      <div className='sidebarbutton'>
        {liked? 
        <FavoriteIcon onClick={e => setLiked(false)}/> 
        
        : <FavoriteBorderIcon onClick={e => setLiked(true)}/>}
        
        <p>{liked? likes + 1 : likes}</p>
      </div>
      <div className='sidebarbutton'>
        <MessageIcon />
        <p>{messages}</p>
      </div>
      <div className='sidebarbutton'>
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar
