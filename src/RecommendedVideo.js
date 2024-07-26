import React from 'react'
import "./RecommendedVideo.css"
import VideoCard from './VideoCard'

function RecommendedVideo() {
  return (
    <div>
      <h2>This is RecommendedVideo</h2>
      <div className='recommendedVideos__videos'>
          <VideoCard/>        
          <VideoCard/>        
          <VideoCard/>        
          <VideoCard/>        
          <VideoCard/>        
          <VideoCard/>        
          <VideoCard/>        
          <VideoCard/>        
      </div>  
    </div>
  )
}

// AIzaSyD0psXphTT8jMvIPbEz82wQR_kDwEACe3I
export default RecommendedVideo

