import React from "react";
import s from './Article.module.css';
import {ButtonForReadArticle} from "../../StuffCollection/Buttons/ButtonForReadArticle";
import {LogoForArticleTitle} from "../../StuffCollection/Logos/LogoForArticleTitle";

export const Article = (props) => {

    return <div className={s.content}>
        <div className="ArticleImg">
            <img src={props.image} alt="failure"/>
        </div>
        <div className='ArticleTitle'>{props.title}</div>
        <LogoForArticleTitle/>
        <ButtonForReadArticle/>
    </div>
}