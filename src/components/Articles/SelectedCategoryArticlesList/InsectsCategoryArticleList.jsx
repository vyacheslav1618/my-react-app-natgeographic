import React from "react";
import s from "./Profile/ListOfArticles/Article.module.css"
import AnimalsPicture from "../../PicturesForArticles/AnimalsPicture";
import ButtonForReadArticle from "../../Profile/ListOfArticles/LogoForReadArticle/ButtonForReadArticle";
import InsectsPicture from "../../PicturesForArticles/InsectsPicture";

const InsectsCategoryArticleList = () => {

    const InsectCategoryArticle = () => {
        return <div>
            <InsectsPicture/>
            <div className='ArticleTitle'>ASD</div>
            <ButtonForReadArticle/>
        </div>
    }

    return <div className={s.content}>
        <InsectCategoryArticle/>
        <InsectCategoryArticle/>
        <InsectCategoryArticle/>
        <InsectCategoryArticle/>
        <InsectCategoryArticle/>
        <InsectCategoryArticle/>
    </div>
}

export default InsectsCategoryArticleList;