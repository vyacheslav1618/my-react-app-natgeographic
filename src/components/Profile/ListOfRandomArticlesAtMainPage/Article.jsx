import React from "react";
import s from './Article.module.css';
import {ButtonForReadArticle} from "../../StuffCollection/Buttons/ButtonForReadArticle";
import {LogoForArticleTitle} from "../../StuffCollection/Logos/LogoForArticleTitle";

export const Article = (props) => {

    return <div className={s.profilePageContent}>

        <div className={s.articleImgAndIconsArea}>

            <div className={s.articleImg}>
                <img src={props.image} alt="failure"/>
            </div>

            <div className={s.articleIcons}>
                <div className={s.button1}><LogoForArticleTitle/></div>
                <div className={s.button2}><ButtonForReadArticle/></div>
                <div className={s.button3}><p>fav icon</p></div>



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