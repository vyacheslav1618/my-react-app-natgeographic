import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navBarFont}>
                <NavLink to="/profile" className = { navData => navData.isActive ? s.navBarFont : s.active }>Profile</NavLink>
            </div>
            <div className={s.navBarFont}>
                <NavLink to="/articles" className = { navData => navData.isActive ? s.navBarFont : s.active }>Articles</NavLink>
            </div>
            <div className={s.navBarFont}>
                <NavLink to="/about-us" className = { navData => navData.isActive ? s.navBarFont : s.active }>About us</NavLink>
            </div>
            <div className={s.navBarFont}>
                <NavLink to="/vacancy" className = { navData => navData.isActive ? s.navBarFont : s.active }>Vacancy</NavLink>
            </div>
            <div className={s.navBarFont}>
                <NavLink to="/contacts" className = { navData => navData.isActive ? s.navBarFont : s.active }>Contacts</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;