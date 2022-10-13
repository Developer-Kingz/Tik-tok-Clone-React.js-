import React from 'react'; 
import './App.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({ channel, description, song}) {
  return (
    <div className='videoFooter'>
      <div className='videoFooterText'>
        <h4>@{channel}</h4>
        <p>{description}</p>
        <MusicNoteIcon className='music'/>
        <p className='song'>{song}</p>
      </div>
      <img className='videoFooterRecord' src='https://static.thenounproject.com/png/934821-200.png' alt=""/>
      
      
    </div>
  )
}

export default VideoFooter
