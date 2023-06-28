import styled from 'styled-components';

export const CallStyle = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   background-color: #f0f8ff;
   height: 70vh;
   min-height: 37rem;
   max-height: 70rem;

   .exclusive__webnar {
      color: #007eff;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 700;

      border: 2px solid #007eff;
      border-radius: 1.5rem 1.5rem 1.5rem 0.3rem;
      padding: 0.7rem 2rem;
      @media screen {
         @media (max-width: 768px) {
            font-size: 1.3rem;
         }
         @media (max-width: 600px) {
            font-size: 1.2rem;
         }
         @media (max-width: 540px) {
            font-size: 1.1rem;
            padding: 0.5rem 1.5rem;
         }
         @media (max-width: 460px) {
            font-size: 1rem;
            padding: 0.3rem 1rem;
         }
         @media (max-width: 420px) {
            font-size: 0.9rem;
         }
         @media (max-width: 370px) {
            font-size: 0.8rem;
         }
      }
   }
   .subtitle {
      color: #1c3c50;
      font-size: 4rem;
      font-weight: 500;
      text-transform: capitalize;
      margin: 0.5rem 0 0;
      letter-spacing: 0.2rem;
      @media screen {
         @media (max-width: 768px) {
            font-size: 3.5rem;
         }
         @media (max-width: 600px) {
            font-size: 3rem;
         }
         @media (max-width: 540px) {
            font-size: 2.7rem;
         }
         @media (max-width: 460px) {
            font-size: 2.3rem;
         }
         @media (max-width: 420px) {
            font-size: 2rem;
         }
         @media (max-width: 370px) {
            font-size: 1.8rem;
         }
      }
   }
   .title {
      font-size: 8rem;
      margin: 0;
      font-weight: 800;
      text-transform: capitalize;
      background: rgb(31, 118, 240);
      background: rgb(31, 118, 240);
      background: linear-gradient(
         -45deg,
         rgba(31, 118, 240, 1) 27%,
         rgba(44, 131, 251, 1) 36%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding: 0 2.5rem 0;
      border-bottom: 0.1px solid #c8d4dd;
      position: relative;

      .header__logo {
         object-fit: contain;
         position: absolute;
         transform: translate(-3rem, 0.1rem);
         @media screen {
            @media (max-width: 768px) {
               width: 4rem;
               height: 4rem;
               transform: translate(-2.3rem, 0.5rem);
            }
            @media (max-width: 600px) {
               width: 3.5rem;
               height: 3.5rem;
               transform: translate(-2rem, 0.5rem);
            }
            @media (max-width: 540px) {
               width: 3.5rem;
               height: 3.5rem;
               transform: translate(-1.9rem, 0rem);
            }
            @media (max-width: 460px) {
               width: 2.8rem;
               height: 2.8rem;
               transform: translate(-1.6rem, 0.15rem);
            }
            @media (max-width: 420px) {
               width: 2.4rem;
               height: 2.4rem;
               transform: translate(-1.4rem, 0.25rem);
            }
            @media (max-width: 370px) {
               width: 2.2rem;
               height: 2.2rem;
               transform: translate(-1.2rem, 0.25rem);
            }
         }
      }

      @media screen {
         @media (max-width: 768px) {
            font-size: 6.8rem;
         }
         @media (max-width: 600px) {
            font-size: 6rem;
         }
         @media (max-width: 540px) {
            font-size: 5rem;
         }
         @media (max-width: 460px) {
            font-size: 4.5rem;
         }
         @media (max-width: 420px) {
            font-size: 4rem;
         }
         @media (max-width: 370px) {
            font-size: 3.6rem;
            padding: 0 1rem 0;
         }
      }
   }
   .call_to_action {
      font-size: 1.6rem;
      font-weight: 500;

      @media screen {
         @media (max-width: 768px) {
            font-size: 1.35rem;
         }
         @media (max-width: 600px) {
            font-size: 1.2rem;
         }
         @media (max-width: 540px) {
            font-size: 1.1rem;
         }
         @media (max-width: 460px) {
            font-size: 1rem;
         }
         @media (max-width: 420px) {
            font-size: 0.9rem;
         }
         @media (max-width: 370px) {
            font-size: 0.8rem;
         }
      }
   }

   @media screen {
      @media (max-width: 460px) {
         height: 60vh;
         min-height: 30rem;
      }
   }
`;
