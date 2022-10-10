import React from "react";
import s from "./Profile/ListOfArticles/Article.module.css"
import AnimalsPicture from "../../StuffCollection/WallpapersAndPictures/PicturesForArticles/AnimalsPicture";
import ButtonForReadArticle from "../../Profile/ListOfRandomArticlesAtMainPage/LogoForReadArticle/Index";

const AnimalCategoryArticleList = () => {

    const AnimalCategoryArticle = () => {
        return <div>
            <AnimalsPicture/>
            <div className='ArticleTitle'>ASD</div>
            <ButtonForReadArticle/>
        </div>
    }

    return <div className={s.content}>
        <AnimalCategoryArticle/>
        <AnimalCategoryArticle/>
        <AnimalCategoryArticle/>
        <AnimalCategoryArticle/>
        <AnimalCategoryArticle/>
        <AnimalCategoryArticle/>
    </div>
}

export default AnimalCategoryArticleList;