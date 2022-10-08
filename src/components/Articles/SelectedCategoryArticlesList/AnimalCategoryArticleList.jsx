import React from "react";
import s from "./Profile/ListOfArticles/Article.module.css"
import AnimalsPicture from "../../PicturesForArticles/AnimalsPicture";
import ButtonForReadArticle from "../../Profile/ListOfArticles/LogoForReadArticle/ButtonForReadArticle";

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