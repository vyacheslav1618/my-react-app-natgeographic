import React from "react";
import s from './ArticlesPage.module.css'
import {NavLink} from "react-router-dom";

const ArticleCategory = (props) => {
    let path = "/articles/" + props.id
    return <div className={s.category}>
        <NavLink to={path}
                 className={navData => navData.isActive ? s.active : s.category}>{props.name}</NavLink>
    </div>
}

const ArticlesPage = () => {
    return <div className={s.articlePage}>

        <div className={s.articleCategories}>
            <ArticleCategory name="Animals" id="animals"/>
            <ArticleCategory name="Microscopic World" id="microscopic-world"/>
            <ArticleCategory name="Insects" id="insects"/>
            <ArticleCategory name="Forests" id="forests"/>
            <ArticleCategory name="Oceans" id="oceans"/>
            <ArticleCategory name="Seas" id="seas"/>
        </div>
        <div className={s.articlesOfSelectedCategory}>
            <div className={s.articlesLisOfSelectedCategory}>dasdas</div>
            <div className={s.articlesLisOfSelectedCategory}>dasdas</div>
            <div className={s.articlesLisOfSelectedCategory}>dasdas</div>
            <div className={s.articlesLisOfSelectedCategory}>dasdas</div>
            <div className={s.articlesLisOfSelectedCategory}>dasdas</div>
            <div className={s.articlesLisOfSelectedCategory}>dasdas</div>
        </div>
    </div>
}

export default ArticlesPage;