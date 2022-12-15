import React from 'react';
import s from "../ProfilePageArticleImgAndBar/ProfilePageArticleImgAndBar.module.css";
import {ArticleImage} from "../ArticleImage/ArticleImage";
import {ArticleButtonsBar} from "../ArticleButtonsBar/ArticleButtonsBar";

export const ProfilePageArticleImgAndBar = (props) => {
    return (
        <div className={s.articleImgAndIconsArea}>

            <ArticleImage image={props.image}/>

            <ArticleButtonsBar />

        </div>
    );
};