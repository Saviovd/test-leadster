import styled from 'styled-components';

export const ButtonStyle = styled.li`
   list-style-type: none;

   .button {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 1.6rem;
      font-weight: 500;
      padding: 0.7rem 1.9rem;
      margin: 0 0.5rem;
      background-color: transparent;
      border: 1px solid #000;
      border-radius: 2rem;
      cursor: pointer;

      &:hover {
         color: #4f7bf6;
         border: 1px solid #4f7bf6;
      }
   }

   .isActive {
      background-color: #4f7bf6;
      color: #fff;
      border: 1px solid #4f7bf6;

      &:hover {
         color: #fff;
      }
   }
`;
