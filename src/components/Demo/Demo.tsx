import Image from 'next/image';
import { DemoStyle } from './demoStyles';
import Link from 'next/link';

const Demo = () => {
   return (
      <DemoStyle>
         <div className='container'>
            <Image
               src={'/assets/comparativo_img_CTA.png'}
               alt='demo charts'
               width={650}
               height={500}
               className='comparative'
            />

            <div className='demo_call'>
               <h3 className='demo_call--title'>
                  Pronto para triplicar sua <br />
                  <b>Geração de Leads?</b>
               </h3>
               <p className='demo_call--subtitle'>
                  Criação e ativação em <b>4 minutos.</b>
               </p>
               <Link href={'#'} className='demo_call--button'>
                  Ver Demonstração
               </Link>
               <Image
                  src={'/assets/selo_RD.png'}
                  alt='seal of quality'
                  width={140}
                  height={70}
                  className='stamp'
               />
               <div className='dont_need'>
                  <Image
                     src={'/assets/no-card-dark.webp'}
                     alt='credit card icon'
                     width={15}
                     height={15}
                     className='dont_need--card'
                  />
                  <p className='dont_need--text'>
                     Não é necessário Cartão de Crédito
                  </p>
               </div>
               <div className='rating'>
                  <Image
                     src={'/assets/rating.webp'}
                     alt='Five stars'
                     width={80}
                     height={15}
                     className='rating__icon'
                  />
                  <p className='rating__text'>4.9/5 média de satisfação</p>
               </div>
            </div>
         </div>
      </DemoStyle>
   );
};

export default Demo;
