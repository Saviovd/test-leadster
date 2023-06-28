import styled from 'styled-components';

export const FooterStyle = styled.footer`
   width: 100%;
   max-width: 1175px;
   margin: 0 auto;

   .footer__top {
      padding-top: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .logo {
         object-fit: contain;
      }
      .slogan {
         font-size: 1.45rem;
         font-weight: 500;
         color: #677294;
         margin: 0;
         transform: translateY(-1rem);
         text-align: center;
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
               }
            }
         }
      }
      .follow_us {
         .follow_us--title {
            color: #2c3e50;
            font-size: 1.8rem;
            margin: 3rem 0;
         }
         .social__medias {
            display: flex;
            justify-content: space-around;
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
            }
         }
         .contact__adress {
            font-size: 1.3rem;
            font-weight: 500;
            color: #2c3e50;
            margin: 1.5rem 0 0;
         }
      }
   }
   .footer__bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      color: #7f88a6;

      .copy {
         font-size: 1.3rem;
         font-weight: 500;

         .business {
            color: #007dff;
            font-size: 1.4rem;
         }
      }
      .adress {
         font-size: 1.2rem;
         justify-self: flex-end;

         .adress__link {
            color: #007dff;
            font-weight: 500;
         }
      }
   }
`;
