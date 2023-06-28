import Image from 'next/image';
import { CallStyle } from './callStyle';

const Call = () => {
   return (
      <CallStyle>
         <span className='exclusive__webnar'>webnars exclusivos</span>
         <h3 className='subtitle'>menos conversinha,</h3>
         <h1 className='title'>
            mais conversão
            <Image
               src={'/assets/asset-header.png'}
               alt='header logo'
               width={50}
               height={50}
               className='header__logo'
            />
         </h1>
         <p className='call_to_action'>
            Conheça as estratégias que <b>mudaram o jogo</b> e como aplicá-las
            no seu negócio
         </p>
      </CallStyle>
   );
};

export default Call;
