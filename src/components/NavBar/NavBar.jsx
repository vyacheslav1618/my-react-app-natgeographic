import React from "react";
import s from './NavBar.module.css';

const NavBar = () => {
    return (<nav className={s.nav}>
        <div className={s.navBarFont}>
            <a href="/profile">Profile</a>
        </div>
        <div className={s.navBarFont}>
            <a href="/articles">Articles</a>
        </div>
        <div className={s.navBarFont}>
            <a href="/about-us">About us</a>
        </div>
        <div className={s.navBarFont}>
            <a href="/vacancy">Vacancy</a>
        </div>
        <div className={s.navBarFont}>
            <a href="/contacts">Contacts</a>
        </div>
    </nav>);
}

export default NavBar;