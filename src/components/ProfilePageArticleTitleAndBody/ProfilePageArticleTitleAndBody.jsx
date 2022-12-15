import React from 'react';
import s from "./ProfilePageArticleTitleAndBody.module.css"
import {ProfilePageArticleTitle} from "../ProfilePageArticleTitle/ProfilePageArticleTitle";
import {ProfilePageArticleBody} from "../ProfilePageArticleBody/ProfilePageArticleBody";

export const ProfilePageArticleTitleAndBody = (props) => {
    return (
        <div className={s.titleAndBodyArea}>

            <ProfilePageArticleTitle title={props.title}/>

            <ProfilePageArticleBody />

        </div>
    );
};