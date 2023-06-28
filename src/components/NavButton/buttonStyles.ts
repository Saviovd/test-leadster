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
         color: #007eff;
         border: 1px solid #007eff;
      }

      @media screen {
         @media (max-width: 1230px) {
            font-size: 1.5rem;
         }
         @media (max-width: 1090px) {
            font-size: 1.4rem;
            margin: 0 0.3rem;
         }
         @media (max-width: 970px) {
            font-size: 1.3rem;
            padding: 0.7rem 1.6rem;
         }
         @media (max-width: 610px) {
            font-size: 1.2rem;
            padding: 0.7rem 1.4rem;
            margin: .5rem 0.3rem;
         }
      }
   }

   .isActive {
      background-color: #007eff;
      color: #fff;
      border: 1px solid #007eff;

      &:hover {
         color: #fff;
      }
   }
`;
