import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <div>
            <div className={s.headerLogoBackground}>
                <img src='https://www.ifia.com/wp-content/uploads/2020/05/seo.ngsversion.1565614141405.jpg' alt=""/>
            </div>
        </div>
    </header>
}
export default Header;