import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import "./Header.css";

const Header = () => {
    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);
    const closeModalMenu = () => setClick(false);

    return (
        <>
            <header className="header" id="home">
                <div className="header__container">
                    <Link className="header__logo" to="/" onClick={closeModalMenu}>
                        My Portfolio
                    </Link>
                    <div className="menu__icon" onClick={handleClick}>
                        {click ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
                    </div>
                    <ul className={click ? "header__menu active" : "header__menu"}>
                        <li className="header__item">
                            <AnchorLink className="header__links" href="#home" offset="5000" onClick={closeModalMenu}>
                                Top
                            </AnchorLink>
                        </li>
                        <li className="header__item">
                            <HashLink className="header__links" smooth to="/#about" onClick={closeModalMenu}>
                                About
                            </HashLink>
                        </li>
                        <li className="header__item">
                            <HashLink className="header__links" smooth to="/skills#skills" onClick={closeModalMenu}>
                                Skills
                            </HashLink>
                        </li>
                        <li className="header__item">
                            <HashLink className="header__links" smooth to="/works#works" onClick={closeModalMenu}>
                                Works
                            </HashLink>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
