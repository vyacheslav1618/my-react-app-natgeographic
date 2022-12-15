import React from 'react';
import s from "../ArticlesPageItem/ArticlesPageItem.module.css";
import {ArticleImage} from "../ArticleImage/ArticleImage";
import {ProfilePageArticleTitle} from "../ProfilePageArticleTitle/ProfilePageArticleTitle";
import {ArticleButtonsBar} from "../ArticleButtonsBar/ArticleButtonsBar";
import {articles} from "../../redux/data";

const getImage = () => {
    for (let item of articles) {
        if (item.id = 1) {
            return item.image;
        }
    }
};

const getTitle = () => {
    for (let item of articles) {
        if (item.id = 1) {
            return item.title;
        }
    }
};

export const ArticlesPageItem = () => {
    return (
        <div className={s.content}>
            <ArticleImage image={getImage()}/>
            <ProfilePageArticleTitle title={getTitle()}/>
            <ArticleButtonsBar/>
        </div>
    );
};