import React from "react";
import s from "./Profile/ListOfArticles/Article.module.css"
import AnimalsPicture from "../../StuffCollection/WallpapersAndPictures/PicturesForArticles/AnimalsPicture";
import ButtonForReadArticle from "../../Profile/ListOfRandomArticlesAtMainPage/LogoForReadArticle/Index";
import SeasPicture from "../../StuffCollection/WallpapersAndPictures/PicturesForArticles/SeasPicture";

const SeasCategoryArticleList = () => {

    const SeasCategoryArticle = () => {
        return <div>
            <SeasPicture/>
            <div className='ArticleTitle'>ASD</div>
            <ButtonForReadArticle/>
        </div>
    }

    return <div className={s.content}>
        <SeasCategoryArticle/>
        <SeasCategoryArticle/>
        <SeasCategoryArticle/>
        <SeasCategoryArticle/>
        <SeasCategoryArticle/>
        <SeasCategoryArticle/>
    </div>
}

export default SeasCategoryArticleList;