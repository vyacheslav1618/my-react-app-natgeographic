import React from 'react';
import s from "./ProfilePageArticleTitle.module.css";

export const ProfilePageArticleTitle = (props) => {
    return (
        <div className={s.articleTitle}>
            <p>{props.title}</p>
        </div>
    );
};