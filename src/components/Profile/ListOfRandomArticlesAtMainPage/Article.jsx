import React from "react";
import s from './Article.module.css';
import {ReactComponent as Share} from "../../StuffCollection/Logos/Svg/Share.svg";
import {ReactComponent as Book} from "../../StuffCollection/Logos/Svg/Book.svg";
import {ReactComponent as Favorite} from "../../StuffCollection/Logos/Svg/Favorite.svg";

export const Article = (props) => {

    return <div className={s.profilePageContent}>

        <div className={s.articleImgAndIconsArea}>

            <div className={s.articleImg}>
                <img src={props.image} alt="failure"/>
            </div>

            <div className={s.articleIcons}>
                <div className={s.button1}><Share/></div>

                <div className={s.button2}><Book/></div>

                <div className={s.button3}><Favorite/></div>
            </div>


        </div>

        <div className={s.titleAndBodyArea}>

            <div className={s.articleTitle}>
                <p>{props.title}</p>
            </div>

            <div className={s.articleBody}>
                <p>text example</p>
            </div>

        </div>


    </div>
}