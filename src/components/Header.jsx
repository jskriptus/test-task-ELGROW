import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';

const Header = () => {
    return (
        <header>
            <Link to="/">
                <div className="header__logo">
                    <img className="header__logo__img" src={logo} alt="Logo" />
                    <div className="header__logo__text">гросс маркет</div>
                </div>
            </Link>
            <div>sad</div>
        </header>
    );
};

export default Header;
