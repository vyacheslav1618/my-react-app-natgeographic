import React from "react";
import s from './ProfilePageArticle.module.css';
import {ProfilePageArticleTitleAndBody} from "../../ProfilePageArticleTitleAndBody/ProfilePageArticleTitleAndBody";
import {ProfilePageArticleImgAndBar} from "../../ProfilePageArticleImgAndBar/ProfilePageArticleImgAndBar";

export const ProfilePageArticle = (props) => {

    return <div className={s.profilePageContent}>

        <ProfilePageArticleImgAndBar image={props.image}/>

        <ProfilePageArticleTitleAndBody title={props.title}/>

    </div>
}