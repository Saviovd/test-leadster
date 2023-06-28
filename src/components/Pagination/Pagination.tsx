import { PaginationStyles } from './paginationStyles';
import data from '@/data/videos.json'

interface IPaginationProps {
   paginate: (pageNumber: React.SetStateAction<number>) => void
   videosPerPage: number
   page: number
}

const { videos } = data;

const Pagination = ({paginate, videosPerPage, page}: IPaginationProps) => {
   return (
      <PaginationStyles>
         <p className='page'>Página</p>
         {Array.from({
            length: Math.ceil(videos.length / videosPerPage),
         }).map((_, i) => (
            <p
               className={`page__number ${page === i + 1 ? 'isActive' : ''}`}
               key={i}
               onClick={() => paginate(i + 1)}
            >
               {i + 1}
            </p>
         ))}
      </PaginationStyles>
   );
};

export default Pagination;
