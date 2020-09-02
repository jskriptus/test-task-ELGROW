import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import close from '../assets/img/close.svg';

const Header = () => {
    const [open, setOpen] = React.useState(true);

    return (
        <header>
            <div className="content">
                <Logo />
                {open ? (
                    <div className={open ? 'header__start' : 'header__start__novisibility'}>
                        <div className="header__start__number">
                            <p>+7 (926) 433-14-16</p>
                        </div>

                        <Link to="/application-form">
                            <button
                                onClick={() => setOpen(!open)}
                                className="header__start__button"
                                type="button">
                                заполнить анкету
                            </button>
                        </Link>
                    </div>
                ) : (
                    <Link to="/">
                        <div className="header__btn__close">
                            <img onClick={() => setOpen(!open)} src={close} alt="Закрыть" />
                        </div>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
