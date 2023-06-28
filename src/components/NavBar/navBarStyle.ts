import styled from 'styled-components';

export const NavBarStyle = styled.div`
   width: 100%;
   max-width: 1175px;
   margin: 0 auto 5rem auto;
   padding: 7rem 2rem 2rem;
   border-bottom: 0.1px solid #c8d4dd;

   display: flex;
   justify-content: space-between;
   .nav__list {
      display: flex;
      align-items: center;
      padding: 0;

      @media screen {
         @media (max-width: 1230px) {
            padding-left: 2rem;
         }
         @media (max-width: 1090px) {
            padding-left: 1rem;
         }
         @media (max-width: 970px) {
            padding-left: 0;
         }
         @media (max-width: 610px) {
            flex-wrap: wrap;
            justify-content: center;
         }
      }
   }

   .order {
      display: flex;
      align-items: center;

      .order__by {
         font-size: 1.5rem;
         font-weight: 600;
         margin-right: 0.8rem;
         @media screen {
            @media (max-width: 1090px) {
               font-size: 1.4rem;
            }
            @media (max-width: 610px) {
               font-size: 1.3rem;
            }
         }
      }
      .orders {
         padding: 1rem 1.5rem;
         border-radius: 1rem;
         font-size: 1.5rem;
         font-weight: 500;
         font-family: 'Plus Jakarta Sans', sans-serif;

         @media screen {
            @media (max-width: 1090px) {
               font-size: 1.4rem;
               padding: 1rem 1.2rem;
            }
            @media (max-width: 610px) {
               font-size: 1.3rem;
               padding: 1rem;
            }
         }
      }
      @media screen {
         @media (max-width: 1230px) {
            padding-right: 2rem;
         }
         @media (max-width: 1090px) {
            padding-right: 1rem;
         }
         @media (max-width: 970px) {
            padding-right: 0;
         }
      }
   }
   @media screen {
      @media (max-width: 1230px) {
         padding: 5rem 0rem 2rem;
      }
      @media (max-width: 1090px) {
         padding: 5rem 0rem 1rem;
         margin: 0 auto 3rem auto;
      }
      @media (max-width: 970px) {
         flex-direction: column;
         align-items: center;
      }
      @media (max-width: 610px) {
         padding: 3rem 0rem 2rem;
      }
   }
`;
