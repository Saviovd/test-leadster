import { ButtonStyle } from './buttonStyles';

interface IButtonProps {
   content: string;
   isActive: string;
   setIsActive: React.Dispatch<React.SetStateAction<string>>;
}

const NavButton = ({ content, isActive, setIsActive }: IButtonProps) => {
   return (
      <>
         <ButtonStyle>
            <button
               className={`button ${isActive === content ? 'isActive' : ''}`}
               onClick={() => setIsActive(content)}
            >
               {content}
            </button>
         </ButtonStyle>
      </>
   );
};

export default NavButton;
