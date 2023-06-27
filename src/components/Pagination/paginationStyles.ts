import styled from 'styled-components';

export const PaginationStyles = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   .page {
      font-size: 2rem;

   }
   .page__number {
      font-size: 2rem;
      cursor: pointer;
      margin: 0 2rem;
      align-self: center;
   }

   .isActive {
      color: #007EFF;
      border: 1px solid #007EFF;
      padding: 1rem 1.5rem;
      border-radius: 1rem;
      font-weight: 700;
   }
`;
