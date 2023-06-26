import styled from 'styled-components';

export const CallStyle = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   background-color: #f0f8ff;
   height: 80vh;
   max-height: 70rem;

   .exclusive__webnar {

      color: #007eff;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 700;

      border: 2px solid #007eff;
      border-radius: 1.5rem 1.5rem 1.5rem 0.3rem;
      padding: 0.7rem 2rem;
   }
   .subtitle {
      color: #1c3c50;
      font-size: 4rem;
      font-weight: 500;
      text-transform: capitalize;
      margin: .5rem 0 0;
      letter-spacing: 0.2rem;
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
      padding: 0 3rem;
      border-bottom: 0.1px solid #c8d4dd;
      position: relative;

      &:after {
         content: url('assets/asset-header.png');
         position: absolute;
         top: -3.8rem;
         right: 1rem;
      }
   }
   .call_to_action {
      font-size: 1.6rem;
      font-weight: 500;
   }
`;
