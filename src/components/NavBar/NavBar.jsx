import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navSelectedBar}>
                <NavLink to="/profile"
                         className={navData => navData.isActive ? s.navActiveBarFont : s.navSelectedBarFont}>Profile</NavLink>
            </div>
            <div className={s.navSelectedBar}>
                <NavLink to="/articles"
                         className={navData => navData.isActive ? s.navActiveBarFont : s.navSelectedBarFont}>Articles</NavLink>
            </div>
            <div className={s.navSelectedBar}>
                <NavLink to="/about-us"
                         className={navData => navData.isActive ? s.navActiveBarFont : s.navSelectedBarFont}>About
                    us</NavLink>
            </div>
            <div className={s.navSelectedBar}>
                <NavLink to="/vacancy"
                         className={navData => navData.isActive ? s.navActiveBarFont : s.navSelectedBarFont}>Vacancy</NavLink>
            </div>
            <div className={s.navSelectedBar}>
                <NavLink to="/contacts"
                         className={navData => navData.isActive ? s.navActiveBarFont : s.navSelectedBarFont}>Contacts</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;