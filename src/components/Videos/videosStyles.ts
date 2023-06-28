import styled from 'styled-components';

export const VideosStyles = styled.div`
   width: 100%;
   max-width: 1175px;
   margin: 0 auto 2rem;
   padding: 2rem 0 5rem;
   border-bottom: 0.1px solid #c8d4dd;
   min-height: 82rem;

   .video__card--list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 4rem;
      padding: 0 4rem;
      @media screen {
         @media (max-width: 930px) {
            gap: 3rem 0;
            padding: 0 3rem;
         }
         @media (max-width: 575px) {
            gap: 1rem;
            padding: 0 2rem;
         }
         @media (max-width: 470px) {
            padding: 0 1rem;
            justify-content: space-evenly;
         }
      }
   }
   @media screen {
      @media (max-width: 1140px) {
         padding: 2rem 0 2rem;
      }
      @media (max-width: 930px) {
         padding: 0 0 2rem;
      }
      @media (max-width: 930px) {
         min-height: 76rem;
      }
      @media (max-width: 530px) {
         padding: 0;
      }
      @media (max-width: 470px) {
         min-height: 53rem;
      }
      @media (max-width: 380px) {
         min-height: 50rem;
      }
   }
`;
