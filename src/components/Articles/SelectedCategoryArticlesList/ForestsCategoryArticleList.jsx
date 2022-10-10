import React from "react";
import s from "./Profile/ListOfArticles/Article.module.css"
import AnimalsPicture from "../../StuffCollection/WallpapersAndPictures/PicturesForArticles/AnimalsPicture";
import ButtonForReadArticle from "../../Profile/ListOfRandomArticlesAtMainPage/LogoForReadArticle/Index";
import ForestsPicture from "../../StuffCollection/WallpapersAndPictures/PicturesForArticles/ForestsPicture";

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