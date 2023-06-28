import NavBar from '../NavBar/NavBar';
import { VideosStyles } from './videosStyles';
import data from '@/data/videos.json';
import React, { useState } from 'react';
import VideoCard from '../VideoCard/VideoCard';
import Pagination from '../Pagination/Pagination';

const { videos } = data;
// const videosPerPage = 9


const Videos = () => {

   const [page, setPage] = useState(1);
   const [videosPerPage, set] = React.useState(9)
   const indexOfLastVideo = page * videosPerPage;
   const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
   const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

   React.useEffect(() => {
      handlevideosPerPage()
   }, [])

   function handlevideosPerPage() {
      if (typeof window !== 'undefined' && window.innerWidth > 730) {
         set(9)
      } else {
         set(6)
      }
   }

   const paginate = (pageNumber: React.SetStateAction<number>) => {
      setPage(pageNumber);
   };

   return (
      <>
         <NavBar />
         <VideosStyles>
            <div className='video__card--list'>
               {currentVideos.map((video, i) => (
                  <VideoCard
                     key={`${video.title}_${i}`}
                     thumb={video.thumb}
                     title={video.title}
                     url={video.url}
                  />
               ))}
            </div>
         </VideosStyles>
         <Pagination
            page={page}
            paginate={paginate}
            videosPerPage={videosPerPage}
         />
      </>
   );
};

export default Videos;
