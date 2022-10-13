import React from "react";
import s from './ArticlesPage.module.css'
import {NavLink} from "react-router-dom";
import {articlesListOfSelectedCategoryData, articleCategoryData} from "../../redux/data";

const ArticleCategory = (props) => {
    const path = "/articles/" + props.id
    return <div className={s.category}>
        <NavLink to={path}
                 className={navData => navData.isActive ? s.active : s.category}>{props.name}</NavLink>
    </div>
}

const ArticlesListOfSelectedCategory = (props) => {
    const path = "/articles/" + props.id
    return <div className={s.category}>
        <NavLink to={path}
                 className={s.articlesListOfSelectedCategory}>{props.name}</NavLink>
    </div>
}

const articleCategoryDataElements = articleCategoryData
    .map(ac => <ArticleCategory name={ac.name} id={ac.id}/>);

const articlesListOfSelectedCategoryDataElements = articlesListOfSelectedCategoryData
    .map(al => <ArticlesListOfSelectedCategory name={al.name}/>)

const ArticlesPage = () => {
    return <div className={s.articlePage}>
        <div className={s.articleCategories}>
            {articleCategoryDataElements}
        </div>
        <div className={s.articlesListOfSelectedCategory}>
            {articlesListOfSelectedCategoryDataElements}
        </div>
    </div>
}

export default ArticlesPage;
