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
      padding: 4rem 1rem 2rem;
      gap: 1rem;
      .comparative {
         object-fit: contain;

         @media screen {
            @media (max-width: 1180px) {
               width: 55rem;
            }
            @media (max-width: 1075px) {
               width: 50rem;
            }
            @media (max-width: 990px) {
               width: 80%;
               height: auto;
            }
            @media (max-width: 450px) {
               width: 90%;
            }
         }
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

            @media screen {
               @media (max-width: 1075px) {
                  font-size: 2.7rem;
               }
               @media (max-width: 990px) {
                  font-size: 3rem;
               }
               @media (max-width: 490px) {
                  font-size: 2.6rem;
               }
            }
         }
         .demo_call--subtitle {
            grid-area: subtitle;
            font-size: 1.5rem;
            font-weight: 400;
            color: #2c3e50;
            padding: 1rem 0 1.5rem;
            border-bottom: 1px solid #c8d4dd;
            margin: 0 0 2rem;
            @media screen {
               @media (max-width: 1075px) {
                  font-size: 1.4rem;
               }
               @media (max-width: 990px) {
                  font-size: 1.5rem;
               }
               @media (max-width: 490px) {
                  font-size: 1.3rem;
               }
            }
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
            justify-self: flex-start;

            &:hover {
               color: #007aff;
               background-color: transparent;
            }
            @media screen {
               @media (max-width: 1075px) {
                  font-size: 1.5rem;
               }
               @media (max-width: 990px) {
                  font-size: 1.7rem;
               }
               @media (max-width: 570px) {
                  font-size: 1.5rem;
                  padding: 1rem 2rem;
               }
               @media (max-width: 490px) {
                  font-size: 1.3rem;
                  padding: 1rem 1.7rem;
               }
            }
         }
         .stamp {
            grid-area: stamp;
            object-fit: contain;
            height: 100%;
            margin-left: 1rem;

            @media screen {
               @media (max-width: 1075px) {
                  width: 12rem;
               }
               @media (max-width: 990px) {
                  width: 13rem;
               }
               @media (max-width: 560px) {
                  width: 12rem;
               }
               @media (max-width: 490px) {
                  width: 11rem;
               }
               @media (max-width: 375px) {
                  width: 10rem;
               }
            }
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
               @media screen {
                  @media (max-width: 1075px) {
                     font-size: 1rem;
                  }
                  @media (max-width: 990px) {
                     font-size: 1.1rem;
                  }
               }
            }

            @media screen {
               @media (max-width: 490px) {
                  justify-self: center;
                  border: 0;
               }
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
               margin: 0 0.5rem;
               height: auto;
               @media screen {
                  @media (max-width: 1075px) {
                     width: 7rem;
                  }
                  @media (max-width: 990px) {
                     width: 8rem;
                  }
                  @media (max-width: 560px) {
                     width: 6rem;
                  }
               }
            }
            .rating__text {
               font-size: 1.1rem;
               font-weight: 600;
               @media screen {
                  @media (max-width: 1075px) {
                     font-size: 1rem;
                  }
                  @media (max-width: 990px) {
                     font-size: 1.1rem;
                  }
               }
            }
            @media screen {
               @media (max-width: 490px) {
                  justify-self: center;
                  border: 0;
                  margin: 0.5rem 0;
               }
            }
         }

         @media screen {
            @media (max-width: 990px) {
               width: 80%;
            }
            @media (max-width: 630px) {
               width: 90%;
            }
            @media (max-width: 490px) {
               grid-template-areas:
                  'title title'
                  'subtitle subtitle'
                  'button stamp'
                  'dont_need dont_need'
                  'rating rating';
               grid-template-columns: 60% 40%;
               height: 25rem;

            }
            @media (max-width: 375px) {
               height: auto;
               width: 100%;
            }
         }
      }

      @media screen {
         @media (max-width: 1240px) {
            justify-content: space-evenly;
            gap: 0;
         }
         @media (max-width: 990px) {
            flex-direction: column;
         }
         @media (max-width: 375px) {
            padding: 4rem .5rem 2rem;
         }
      }
   }
`;
