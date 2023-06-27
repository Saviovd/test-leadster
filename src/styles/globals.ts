import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   html {
      font-size: 10px;
      font-family: 'Plus Jakarta Sans', sans-serif;

      body {
         min-height: 100vh;
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         overflow-x: hidden;
         max-width: 100vw;
         overflow-x: hidden;

         a {
            text-decoration: none;
            color: inherit;
         }

         ul {
            padding: 0;
         }
         li {
            list-style-type: none;
         }
      }
   }
`;

export default GlobalStyle;
