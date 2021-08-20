import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className={'nav'}>
            <div className={'container'}>
                <a href="/" className={'name'}>
                    RR
                </a>
                <div className={'separator'}></div>
                <a href="https://www.linkedin.com/in/rub%C3%A9n-ruiz-pedreira/" className={'icon'}>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/erxonxi" className={'icon'}>
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
