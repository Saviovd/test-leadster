import DownloadButton from '../DownloadButton/DownloadButton';
import { ModalStyle } from './modalStyles';

interface IModalProps {
   openModal: (title: string) => void
   title: string
   url: string
}

const Modal = ({openModal, title, url}: IModalProps) => {
   return (
      <ModalStyle>
         <div className='modal__card'>
            <p className='close' onClick={() => openModal(title)}>
               x
            </p>
            <h2 className='title'>
               <span className='title__emphasys'>Webnar:</span>
               {title}
            </h2>
            <iframe
               className='video_frame'
               src={url}
               frameBorder='0'
               title='YouTube video player'
               allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            ></iframe>
            <h3 className='subtitle'>descrição</h3>
            <p className='description'>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo,
               repellendus qui? Enim, odit molestiae pariatur nisi illum
               cupiditate quis aut quasi corrupti tenetur asperiores blanditiis
               obcaecati? Inventore ex porro perferendis!
            </p>
            <h3 className='subtitle'>downloads</h3>
            <div className='downloads'>
               <DownloadButton
                  title='Spreadsheet.xis'
                  bgColor='#9FEFDF'
                  color='#00B489'
               />
               <DownloadButton
                  title='Document.doc'
                  bgColor='#A1D9FF'
                  color='#0074EA'
               />
               <DownloadButton
                  title='Presentation.ppt'
                  bgColor='#FFF1A0'
                  color='#A99445'
               />
               <DownloadButton
                  title='Folder.zip'
                  bgColor='#D0DEE7'
                  color='#9099A0'
               />
            </div>
         </div>
      </ModalStyle>
   );
};
export default Modal;
