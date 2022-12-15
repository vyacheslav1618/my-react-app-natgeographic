import React from 'react';
import s from "../ArticleImage/ArticleImage.module.css";

export const ArticleImage = (props) => {
    return (
        <div className={s.articleImg}>
            <img src={props.image} alt="failure"/>
        </div>
    );
};