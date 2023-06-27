import Image from 'next/image';
import { DownloadButtonStyle } from './downloadButtonStyles';

interface IDownloadButton {
   bgColor: string;
   color: string;
   title: string;
}

const DownloadButton = ({ title, bgColor, color }: IDownloadButton) => {
   return (
      <DownloadButtonStyle href='#' className='download__button'
      style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
         <Image
            src={'/assets/cloud.png'}
            alt='Cloud icon'
            width={14}
            height={14}
            className='cloud'
            style={{backgroundColor: `${bgColor}`}}
         />
         {title}
      </DownloadButtonStyle>
   );
};

export default DownloadButton;
