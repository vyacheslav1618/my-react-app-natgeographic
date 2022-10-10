import React from "react";
import s from './ArticlesPage.module.css'
import {NavLink} from "react-router-dom";
import {articlesListOfSelectedCategoryData, articleCategoryData} from "../../data";

const ArticleCategory = (props) => {
    const path = "/articles/" + props.id
    return <div className={s.category}>
        <NavLink to={path}
                 className={navData => navData.isActive ? s.active : s.category}>{props.name}</NavLink>
    </div>
}

const ArticlesPage = () => {

    return <div className={s.articlePage}>
        <div className={s.articleCategories}>
            <ArticleCategory name={articleCategoryData[0].name} id={articleCategoryData[0].id}/>
            <ArticleCategory name={articleCategoryData[1].name} id={articleCategoryData[1].id}/>
            <ArticleCategory name={articleCategoryData[2].name} id={articleCategoryData[2].id}/>
            <ArticleCategory name={articleCategoryData[3].name} id={articleCategoryData[3].id}/>
            <ArticleCategory name={articleCategoryData[4].name} id={articleCategoryData[4].id}/>
            <ArticleCategory name={articleCategoryData[5].name} id={articleCategoryData[5].id}/>
        </div>
        <div className={s.articlesListOfSelectedCategory}>
            <NavLink to={articlesListOfSelectedCategoryData[0].id} className={s.articlesListOfSelectedCategory}>{articlesListOfSelectedCategoryData[0].name}</NavLink>
            <NavLink to={articlesListOfSelectedCategoryData[1].id} className={s.articlesListOfSelectedCategory}>{articlesListOfSelectedCategoryData[1].name}</NavLink>
            <NavLink to={articlesListOfSelectedCategoryData[2].id} className={s.articlesListOfSelectedCategory}>{articlesListOfSelectedCategoryData[2].name}</NavLink>
            <NavLink to={articlesListOfSelectedCategoryData[3].id} className={s.articlesListOfSelectedCategory}>{articlesListOfSelectedCategoryData[3].name}</NavLink>
            <NavLink to={articlesListOfSelectedCategoryData[4].id} className={s.articlesListOfSelectedCategory}>{articlesListOfSelectedCategoryData[4].name}</NavLink>
            <NavLink to={articlesListOfSelectedCategoryData[5].id} className={s.articlesListOfSelectedCategory}>{articlesListOfSelectedCategoryData[5].name}</NavLink>
        </div>
    </div>
}

export default ArticlesPage;
