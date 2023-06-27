import Image from 'next/image';
import React from 'react';
import { VideoCardStyles } from './videoCardStyles';
import data from '@/data/videos.json';
import Modal from '../Modal/Modal';

const { videos } = data;

interface ICardProps {
   thumb: string;
   title: string;
   url: string;
   key: number;
}

const VideoCard = ({ key, thumb, title, url }: ICardProps) => {
   const [isModalOpen, setIsModalOpen] = React.useState(false);

   function openModal(title: string) {
      videos.find((video) => video.title === title);
      setIsModalOpen(!isModalOpen);

      !isModalOpen
         ? (document.body.style.overflowY = 'hidden')
         : (document.body.style.overflowY = 'scroll');
   }

   return (
      <>
         <VideoCardStyles onClick={() => openModal(title)} key={key}>
            <Image
               className='video__card--thumbnail'
               src={thumb}
               alt='Video thumbnail'
               width={280}
               height={180}
            />
            <h3 className='video__card--title'>{title}</h3>
         </VideoCardStyles>
         {isModalOpen && (
            <Modal openModal={openModal} title={title} url={url} />
         )}
      </>
   );
};

export default VideoCard;
