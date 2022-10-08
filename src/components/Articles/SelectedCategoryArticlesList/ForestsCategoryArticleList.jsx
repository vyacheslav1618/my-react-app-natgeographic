import React from "react";
import s from "./Profile/ListOfArticles/Article.module.css"
import AnimalsPicture from "../../PicturesForArticles/AnimalsPicture";
import ButtonForReadArticle from "../../Profile/ListOfArticles/LogoForReadArticle/ButtonForReadArticle";
import ForestsPicture from "../../PicturesForArticles/ForestsPicture";

const ForestsCategoryArticleList = () => {

    const ForestCategoryArticle = () => {
        return <div>
            <ForestsPicture/>
            <div className='ArticleTitle'>ASD</div>
            <ButtonForReadArticle/>
        </div>
    }

    return <div className={s.content}>
        <ForestCategoryArticle/>
        <ForestCategoryArticle/>
        <ForestCategoryArticle/>
        <ForestCategoryArticle/>
        <ForestCategoryArticle/>
        <ForestCategoryArticle/>
    </div>
}

export default ForestsCategoryArticleList;