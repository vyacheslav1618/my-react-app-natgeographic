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

    let articleCategoryData = [
        {id: "animals", name: "Animals"},
        {id: "microscopic-world", name: "Microscopic World"},
        {id: "insects", name: "Insects"},
        {id: "forests", name: "Forests"},
        {id: "oceans", name: "Oceans"},
        {id: "seas", name: "Seas"}
    ]

    let articlesListOfSelectedCategoryData = [
        {id: "example-article0", name: "Example Article 0"},
        {id: "example-article1", name: "Example Article 1"},
        {id: "example-article2", name: "Example Article 2"},
        {id: "example-article3", name: "Example Article 3"},
        {id: "example-article4", name: "Example Article 4"},
        {id: "example-article5", name: "Example Article 5"}
    ]

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
