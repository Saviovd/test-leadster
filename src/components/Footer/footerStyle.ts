import styled from 'styled-components';

export const FooterStyle = styled.footer`
   width: 100%;
   max-width: 1175px;
   margin: 0 auto;
   padding: 0 2rem;

   .footer__top {
      padding-top: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .logo {
         object-fit: contain;
         @media screen {
            @media (max-width: 380px) {
               width: 75%;
            }
         }
      }
      .slogan {
         font-size: 1.45rem;
         font-weight: 500;
         color: #677294;
         margin: 0;
         transform: translateY(-1rem);
         text-align: center;
         @media screen {
            @media (max-width: 380px) {
               font-size: 1.3rem;
            }
         }
      }
   }

   .container {
      display: flex;
      justify-content: space-between;
      padding-bottom: 7rem;
      .content {
         .title {
            color: #2c3e50;
            font-size: 1.8rem;
            margin: 3rem 0 4rem;
            @media screen {
               @media (max-width: 1240px) {
                  font-size: 1.6rem;
                  margin: 3rem 0 2rem;
               }
               @media (max-width: 490px) {
                  font-size: 1.5rem;
               }
            }
         }
         .nav__list {
            .nav__list--item {
               margin-bottom: 1.5rem;
               .nav__list--link {
                  font-size: 1.6rem;
                  color: #677294;
                  font-weight: 400;
                  transition: 0.4s;

                  &:hover {
                     color: #007dff;
                  }
                  @media screen {
                     @media (max-width: 1240px) {
                        font-size: 1.5rem;
                     }
                     @media (max-width: 490px) {
                        font-size: 1.3rem;
                     }
                  }
               }
               @media screen {
                  @media (max-width: 1240px) {
                     margin-bottom: 1.3rem;
                  }
                  @media (max-width: 490px) {
                     margin-bottom: 1.1rem;
                  }
               }
            }
         }
         @media screen {
            @media (max-width: 850px) {
               width: 40%;
            }
            @media (max-width: 550px) {
               width: 50%;
            }
            @media (max-width: 420px) {
               width: 80%;
            }
         }
      }
      .follow_us {
         .follow_us--title {
            color: #2c3e50;
            font-size: 1.8rem;
            margin: 3rem 0;
            @media screen {
               @media (max-width: 1240px) {
                  font-size: 1.6rem;
                  margin: 3rem 0 2rem;
               }
               @media (max-width: 490px) {
                  font-size: 1.5rem;
               }
            }
         }
         .social__medias {
            display: flex;
            align-items: center;
            margin-bottom: 3rem;

            .social__medias--link {
               color: #858da8;
               background-color: #ebeef5;
               padding: 1.4rem;
               border-radius: 100%;
               margin: 0 1rem;
               .social__media--icon {
                  font-size: 2rem;
               }
               &:hover {
                  color: #fff;
                  background-color: #00aff0;
               }
               @media screen {
                  @media (max-width: 1240px) {
                     padding: 1rem;
                     margin: 0 0.4rem;
                  }
               }
            }
         }
         .contact__adress {
            font-size: 1.3rem;
            font-weight: 500;
            color: #2c3e50;
            margin: 1.5rem 0 0;

            @media screen {
               @media (max-width: 490px) {
                  font-size: 1.2rem;
                  margin: 0.5rem 0 0;
               }
            }
         }

         @media screen {
            @media (max-width: 850px) {
               width: 40%;
            }
            @media (max-width: 560px) {
               width: 50%;
            }
            @media (max-width: 420px) {
               width: 80%;
            }
         }
      }

      @media screen {
         @media (max-width: 1240px) {
            padding: 0 2rem 5rem 2rem;
         }
         @media (max-width: 860px) {
            padding: 0 1.5rem 5rem 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
         }
         @media (max-width: 550px) {
            padding: 0 1.5rem 3rem 1.5rem;
         }
         @media (max-width: 420px) {
            justify-content: flex-start;
         }
      }
   }

   .footer__bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #e9ecf3;
      color: #7f88a6;

      .copy {
         font-size: 1.3rem;
         font-weight: 500;

         .business {
            color: #007dff;
            font-size: 1.4rem;
            @media screen {
               @media (max-width: 970px) {
                  font-size: 1.3rem;
               }
            }
         }
         @media screen {
            @media (max-width: 1240px) {
               padding-left: 2rem;
            }
            @media (max-width: 970px) {
               font-size: 1.1rem;
            }
            @media (max-width: 575px) {
               font-size: 1.3rem;
               width: 90%;
               padding: 0 0 0 1rem;
               margin: .8rem 0 1rem;
            }
         }
      }
      .adress {
         font-size: 1.2rem;
         justify-self: flex-end;

         .adress__link {
            color: #007dff;
            font-weight: 500;
         }
         @media screen {
            @media (max-width: 1240px) {
               padding-right: 2rem;
            }
            @media (max-width: 970px) {
               font-size: 1rem;
            }
            @media (max-width: 575px) {
               font-size: 1.3rem;
               width: 90%;
               padding: 0 0 0 1rem;
               margin: 0 0 1rem 0;
            }
         }
      }
      @media screen {
         @media (max-width: 970px) {
            gap: 2rem;
         }
         @media (max-width: 575px) {
            flex-direction: column;
            gap: 0;
            align-items: flex-start;
         }
      }
   }

   @media screen {
      @media (max-width: 1240px) {
         padding: 0;
      }
   }
`;
