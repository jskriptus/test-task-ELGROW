import React from 'react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer>
            <div className="content">
                <div className="footer__share">
                    <Logo style={{marginLeft: '10px'}} />
                    <h2 className="footer__share_h2">поделиться</h2>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
