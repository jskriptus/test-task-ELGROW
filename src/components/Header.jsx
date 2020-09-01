import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';
import close from '../assets/img/close.svg';

const Header = () => {
    return (
        <header>
            <Link to="/">
                <div className="header__logo">
                    <img className="header__logo__img" src={logo} alt="Logo" />
                    <h2 className="header__logo__text">гросс маркет</h2>
                </div>
            </Link>

            <Link to="/">
                <div className="header__btn__close">
                    <img src={close} alt="Закрыть" />
                </div>
            </Link>
        </header>
    );
};

export default Header;
