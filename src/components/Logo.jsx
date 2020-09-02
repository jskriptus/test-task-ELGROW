import React from 'react';
import logo from '../assets/img/logo.svg';

const Logo = () => {
    return (
            <div className="logo">
                <img className="logo__img" src={logo} alt="Logo" />
                <h2 className="logo__text">гросс маркет</h2>
            </div>
    );
};

export default Logo;
