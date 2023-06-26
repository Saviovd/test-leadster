import styled from 'styled-components';

export const VideoCardStyles = styled.div`
   width: 30%;
   box-shadow: 0px 34px 40px 19px rgba(0, 0, 0, 0.1);
   border-radius: 2rem;
   position: relative;
   color: #000;

   .video__card--thumbnail {
      width: 100%;
      object-fit: 100% 100%;
      border-radius: 2rem 2rem 0 0;
   }

   .video__card--title {
      width: 80%;
      font-size: 1.8rem;
      margin: 0;
      padding: 2rem 0 2rem 3rem;
      white-space: pre-wrap;
      font-weight: 600;
   }

   &:hover {
      &:after {
         content: url('/assets/play.png');
         width: 100%;
         height: 67%;
         background-color: rgba(0, 126, 255, 0.4);
         position: absolute;
         top: 0;
         z-index: 2;

         cursor: pointer;
         display: flex;
         align-items: center;
         justify-content: center;
         border-radius: 2rem 2rem 0 0;
      }
   }
`;
