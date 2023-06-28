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

      @media screen {
         @media (max-width: 470px) {
            object-fit: contain;
            height: auto;
            width: 100%;
         }
      }
   }

   .video__card--title {
      width: 80%;
      font-size: 1.8rem;
      margin: 0;
      padding: 2rem 0 2rem 3rem;
      white-space: pre-wrap;
      font-weight: 600;

      @media screen {
         @media (max-width: 1140px) {
            font-size: 1.6rem;
         }
         @media (max-width: 990px) {
            font-size: 1.5rem;
         }
         @media (max-width: 880px) {
            padding: 1.5rem 0 1.5rem 1.5rem;
            width: 90%;
         }
         @media (max-width: 780px) {
            font-size: 1.4rem;
         }
         @media (max-width: 730px) {
            width: 80%;
         }
         @media (max-width: 550px) {
            font-size: 1.3rem;
            width: 90%;
         }
         @media (max-width: 550px) {
            font-size: 1.1rem;
         }
         @media (max-width: 380px) {
            padding-left: 0.5rem;
            width: 100%;
         }
      }
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

   @media screen {
      @media (max-width: 1140px) {
         width: 28%;
      }
      @media (max-width: 990px) {
         width: 29%;
      }
      @media (max-width: 930px) {
         width: 30%;
      }
      @media (max-width: 730px) {
         width: 47%;
      }
      /* @media (max-width: 620px) {
         width: 44%;
      } */
      @media (max-width: 470px) {
         width: 16rem;
      }
      @media (max-width: 360px) {
         width: 14rem;
      }
   }
`;
