import React from 'react';
import NavButton from '../NavButton/NavButton';
import { NavBarStyle } from './navBarStyle';

const NavBar = () => {

   const [isActive, setIsActive] = React.useState('Geração de Leads')

   return (
      <NavBarStyle>
         <ul className='nav__list'>
            <NavButton content='Agências' isActive={isActive} setIsActive={setIsActive}/>
            <NavButton content='Chatbot' isActive={isActive} setIsActive={setIsActive}/>
            <NavButton content='Marketing Digital' isActive={isActive} setIsActive={setIsActive}/>
            <NavButton content='Geração de Leads' isActive={isActive} setIsActive={setIsActive}/>
            <NavButton content='Mídia Paga' isActive={isActive} setIsActive={setIsActive}/>
         </ul>
         <div className='order'>
            <p className='order__by'>Ordenar por </p>
            <select
               className='orders'
               name='orderSelect'
               id='orderSelect'
            >
               <option
                  className='ordenation__option'
                  value='Data da publicação'
               >
                  Data da publicação
               </option>
               <option className='ordenation__option' value='Mais visualizados'>
                  Mais visualizados
               </option>
            </select>
         </div>
      </NavBarStyle>
   );
};

export default NavBar;
