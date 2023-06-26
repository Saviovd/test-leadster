import Image from 'next/image';
import { HeaderStyle } from './headerStyle';

const Header = () => {
   return (
      <HeaderStyle>
         <Image
            src={'/assets/logo.png'}
            alt='Logo of Leadster'
            width={150}
            height={50}
            className='logo'
         />
      </HeaderStyle>
   );
};
export default Header;
