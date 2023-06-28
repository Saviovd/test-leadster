import styled from 'styled-components';

export const PaginationStyles = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-bottom: 3rem;

   .page {
      font-size: 2rem;
   }
   .page__number {
      font-size: 2rem;
      cursor: pointer;
      align-self: center;
      border: 1px solid inherit;
      padding: 1rem 1.5rem;
      margin: 0 1rem;
      transition: .5s;
      border-radius: 1rem;

      &:hover {
         color: #007eff;
      }
      @media screen {
         @media (max-width: 500px) {
            font-size: 1.6rem;
            padding: 0.7rem 1.2rem;
            margin: 0 0 0 1rem;
         }
      }
   }

   .isActive {
      color: #007eff;
      border: 1px solid #007eff;
      font-weight: 700;
   }

   @media screen {
      @media (max-width: 500px) {
         margin-bottom: 1rem;
      }
   }
`;
