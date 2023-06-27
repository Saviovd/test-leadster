import NavBar from '../NavBar/NavBar';
import { VideosStyles } from './videosStyles';
import data from '@/data/videos.json';
import React from 'react';
import VideoCard from '../VideoCard/VideoCard';

const { videos } = data;

const Videos = () => {
   return (
      <>
         <VideosStyles>
            <NavBar />
            <div className='video__card--list'>
               {videos.map((video, i) => (
                  <>
                     <VideoCard
                        key={i}
                        thumb={video.thumb}
                        title={video.title}
                        url={video.url}
                     />
                  </>
               ))}
            </div>
         </VideosStyles>
      </>
   );
};

export default Videos;
