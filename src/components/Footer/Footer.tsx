import Image from 'next/image';
import { FooterStyle } from './footerStyle';
import Link from 'next/link';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import data from '@/data/footer-data.json';

const { lists } = data;

const Footer = () => {
   return (
      <FooterStyle>
         <div className='footer__top'>
            <Image
               src={'/assets/animated_logo.gif'}
               alt='Logo de LeadSter'
               width={270}
               height={100}
               className='logo'
            />
            <p className='slogan'>Transformando visitantes em clientes.</p>
         </div>
         <div className='container'>
            {lists.map((list, index) => (
               <div key={`${list['list-title']}_${index}`} className='content'>
                  <h2 className='title'>{list['list-title']}</h2>
                  <ul className='nav__list'>
                     {list['nav-list'].map((navItem, i) => (
                        <li
                           key={`${navItem['item-name']}_${i}`}
                           className='nav__list--item'
                        >
                           <Link className='nav__list--link' href={'#'}>
                              {navItem['item-name']}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            ))}
            <div className='follow_us'>
               <h2 className='follow_us--title'>Siga a Leadster</h2>
               <div className='social__medias'>
                  <Link className='social__medias--link' href={'#'}>
                     <FaLinkedinIn className='social__media--icon' />
                  </Link>
                  <Link className='social__medias--link' href={'#'}>
                     <FaFacebookF className='social__media--icon' />
                  </Link>
                  <Link className='social__medias--link' href={'#'}>
                     <FaInstagram className='social__media--icon' />
                  </Link>
               </div>
               <p className='contact__adress'>
                  <b>E-mail: </b>contato@leadster.com.br
               </p>
               <p className='contact__adress'>
                  <b>Telefone: </b>(42) 98828-9851
               </p>
            </div>
         </div>
         <div className='footer__bottom'>
            <p className='copy'>
               Copyright &copy; 2015 - 2023 Todos os direitos reservados |{' '}
               <span className='business'>Leadster</span>
            </p>
            <p className='adress'>
               Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |{' '}
               <Link className='adress__link' href={'#'}>
                  Termos de uso
               </Link>
            </p>
         </div>
      </FooterStyle>
   );
};

export default Footer;
