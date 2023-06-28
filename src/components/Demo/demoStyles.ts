import styled from 'styled-components';

export const DemoStyle = styled.section`
   background-color: #f0f8ff;
   width: 100%;

   .container {
      max-width: 1175px;
      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4rem 0 0;
      gap: 1rem;
      .comparative {
         object-fit: contain;
      }

      .demo_call {
         display: grid;
         grid-template-areas:
            'title title'
            'subtitle subtitle'
            'button stamp'
            'dont_need rating';
         grid-template-columns: repeat(2, 1fr);

         .demo_call--title {
            grid-area: title;
            font-size: 3rem;
            font-weight: 400;
            margin: 0;
            color: #2c3e50;
         }
         .demo_call--subtitle {
            grid-area: subtitle;
            font-size: 1.5rem;
            font-weight: 400;
            color: #2c3e50;
            padding: 1rem 0 1.5rem;
            border-bottom: 1px solid #c8d4dd;
            margin: 0 0 2rem;
         }
         .demo_call--button {
            grid-area: button;
            font-size: 1.7rem;
            font-weight: 600;
            background-color: #007aff;
            color: #fff;
            padding: 1.2rem 3rem;
            border-radius: 3rem;
            border: 1px solid #007aff;
            transition: 0.4s;
            text-transform: uppercase;
            align-self: center;
            justify-self: center;
            margin: 1rem 0;

            &:hover {
               color: #007aff;
               background-color: transparent;
            }
         }
         .stamp {
            grid-area: stamp;
            object-fit: contain;
            height: 100%;
            margin-left: 1rem;
         }
         .dont_need {
            grid-area: dont_need;
            display: flex;
            align-items: center;
            border-right: 2px solid #c8d4dd;
            height: 2rem;
            margin-top: 1rem;

            .dont_need--card {
               object-fit: contain;
               margin-right: 0.5rem;
            }
            .dont_need--text {
               font-size: 1.1rem;
               font-weight: 500;
            }
         }
         .rating {
            grid-area: rating;
            display: flex;
            align-items: center;
            height: 2rem;
            margin-top: 1rem;

            .rating__icon {
               object-fit: contain;
            }
            .rating__text {
               font-size: 1.1rem;
               font-weight: 600;
            }
         }
      }
   }
`;
