import React from 'react';
import svg from '../assets/Logo (3).svg'
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
           <div className="container">
               <div className="header__block">
                   <img  className='header__img' src={svg} alt=""/>
                   <h1 className='header__title'>YA BAO</h1>
                   <p className='header__text'>Дух китайской еды</p>
               </div>
                   <p className='header__subtitle'>Доставка пасты   Москва</p>
                   <p className='header__subtext'>Время доставки    от 31 мин</p>
                   <button className='header__btn'>Заказать звонок</button>
                   <p className='header__number'>8 800 333-36-62</p>


               <p className='header__top-text'>Паста     Супы     Салаты     Антипасти     Напитки     Десерты     Бакалея     Акции     Комбо     Контакты</p>
               <link rel="stylesheet" href="Войти"/>

               <button className='header__top-btn'>Корзина | 1</button>


           </div>
        </div>
    );
};

export default Header;