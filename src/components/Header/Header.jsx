import React from 'react';
import logo from '../Header/logo/Logo.png';
import './Header.css';

const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img
                src={logo}
                className={`head-image ${
                    headerExpanded
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                }`}
                alt="headerImage"
            />
            <h1
                className={`head-text ${
                    headerExpanded
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                }`}
            >
                {headTitle}
            </h1>
        </div>
    );
};

export default Header;
