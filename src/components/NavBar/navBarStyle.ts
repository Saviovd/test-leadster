import styled from 'styled-components';

export const NavBarStyle = styled.div`
   width: 100%;
   max-width: 1440px;
   margin: 0 auto 5rem auto;
   padding: 7rem 2rem 2rem;
   border-bottom: 0.1px solid #c8d4dd;

   display: flex;
   justify-content: space-between;
   .nav__list {
      display: flex;
      align-items: center;
      padding: 0;
   }

   .order {
      display: flex;
      align-items: center;

      .order__by {
         font-size: 1.5rem;
         font-weight: 600;
         margin-right: 0.8rem;
      }
      .orders {
         padding: 1rem 1.5rem;
         border-radius: 1rem;
         font-size: 1.5rem;
         font-weight: 500;
         font-family: 'Plus Jakarta Sans', sans-serif;
      }
   }
`;
