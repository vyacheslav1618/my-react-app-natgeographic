import React from 'react';
import s from "./ArticleButtonsBar.module.css"
import {ReactComponent as Share} from "../StuffCollection/Logos/Svg/Share.svg";
import {ReactComponent as Book} from "../StuffCollection/Logos/Svg/Book.svg";
import {ReactComponent as Favorite} from "../StuffCollection/Logos/Svg/Favorite.svg";

export const ArticleButtonsBar = () => {
    return (
        <div className={s.articleIcons}>
            <div className={s.button1}><Share/></div>

            <div className={s.button2}><Book/></div>

            <div className={s.button3}><Favorite/></div>
        </div>
    );
};