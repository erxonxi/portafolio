import React from 'react';
import {
    FaPortrait,
    FaHome,
    FaTerminal,
    FaProjectDiagram,
} from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className={'nav'}>
            <div className={'container'}>
                <a href="#" className={'name title-gradiant'}>
                    Rubén Ruiz
                </a>
                <a href="#" className={'active'}>
                    <FaHome />
                </a>
                <a href="#">
                    <FaPortrait />
                </a>
                <a href="#">
                    <FaTerminal />
                </a>
                <a href="#">
                    <FaProjectDiagram />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
