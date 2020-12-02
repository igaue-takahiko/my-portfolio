import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import "./Header.css";

const Header = () => {
    const [ click, setClick ] = useState(false);

    const handleClick = () => setClick(!click);
    const closeModalMenu = () => setClick(false);

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <Link className="header__logo" to="/" onClick={closeModalMenu}>
                        My Portfolio
                    </Link>
                    <div className="menu__icon" onClick={handleClick}>
                        {click ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
                    </div>
                    <ul className={click ? "header__menu active" : "header__menu"}>
                        <li className="header__item">
                            <Link className="header__links" to="/" onClick={closeModalMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__links" to="/about" onClick={closeModalMenu}>
                                About
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__links" to="/skills" onClick={closeModalMenu}>
                                Skills
                            </Link>
                        </li>
                        <li className="header__item">
                            <Link className="header__links" to="/works" onClick={closeModalMenu}>
                                Works
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header
