import React from "react";
import s from './Article.module.css';
import ButtonForReadArticle from "./LogoForReadArticle/ButtonForReadArticle";

const Article = (props) => {
    return <div className={s.content}>
        <div>
            <img
                src='https://promotions.b-cdn.net/article/70979/crop/1561114741_vandorsolyom_foto_promotions.hu/1561114741_vandorsolyom_foto_promotions.hu_290_178.jpg' alt=""/>
        </div>
        <div class='ArticleTitleDiv'>{props.message}</div>
        <ButtonForReadArticle/>
    </div>
}

export default Article;
