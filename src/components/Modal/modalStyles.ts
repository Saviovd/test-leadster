import styled from 'styled-components';

export const ModalStyle = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 126, 255, 0.2);
   overflow-y: hidden;
   z-index: 3;

   display: flex;
   align-items: center;
   justify-content: center;

   .modal__card {
      width: 55rem;
      background-color: #fff;
      border-radius: 2rem;
      position: relative;

      .close {
         position: absolute;
         right: 1.5rem;
         top: 0.3rem;
         content: url('assets/close.png');
         width: 1.7rem;
         cursor: pointer;
      }
      .title {
         width: 50%;
         font-size: 1.7rem;
         margin: auto;
         padding: 2.5rem 0;

         .title__emphasys {
            color: #007eff;
         }
         @media screen {
            @media (max-width: 650px) {
               width: 60%;
            }
            @media (max-width: 530px) {
               padding: 3.5rem 0 2.5rem;
               width: 80%;
            }
            @media (max-width: 370px) {
               width: 90%;
            }
         }
      }
      .video_frame {
         width: 100%;
         height: 250px;
      }
      .subtitle {
         width: 95%;
         margin: 0 auto;
         padding: 1.5rem 0 1rem;
         font-size: 1.4rem;
         font-weight: 700;
         text-transform: capitalize;
         border-bottom: 0.1px solid #c8d4dd;
      }
      .description {
         width: 95%;
         margin: 1rem auto 0.4rem;
         font-size: 1.2rem;
         font-weight: 600;
      }
      .downloads {
         display: flex;
         flex-wrap: wrap;
         padding-left: 1rem;
      }

      &:before {
         content: '';
         width: 90%;
         height: 5px;
         left: 5%;
         background-color: #007eff;
         position: absolute;
         margin: 0 auto;
         top: 0;
         border-radius: 0 0 2rem 2rem;
      }

      @media screen {
         @media (max-width: 650px) {
            width: 80%;
         }
         @media (max-width: 460px) {
            width: 90%;
         }
      }
   }
`;
