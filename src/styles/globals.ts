import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   html {
      font-size: 10px;
      font-family: 'Plus Jakarta Sans', sans-serif;

      body {
         min-height: 100vh;
         scroll-behavior: smooth;
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         overflow-x: hidden;
         max-width: 100vw;
         overflow-x: hidden;
      }
   }
`;

export default GlobalStyle;
