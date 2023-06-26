import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   html {
      font-size: 10px;

      body {
         min-height: 100vh;
         scroll-behavior: smooth;
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         overflow-x: hidden;
         max-width: 100vw;
         overflow-x: hidden;
         font-family: 'Plus Jakarta Sans', sans-serif;
      }
   }
`;

export default GlobalStyle;
