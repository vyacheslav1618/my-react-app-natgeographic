import React from "react";
import s from "./Profile/ListOfArticles/Article.module.css"
import AnimalsPicture from "../../PicturesForArticles/AnimalsPicture";
import ButtonForReadArticle from "../../Profile/ListOfArticles/LogoForReadArticle/ButtonForReadArticle";
import MicroscopicWorldPicture from "../../PicturesForArticles/MicroscopicWorldPicture";

const MicroscopicWorldCategoryArticleList = () => {

    const MicroscopicWorldCategoryArticle = () => {
        return <div>
            <MicroscopicWorldPicture/>
            <div className='ArticleTitle'>ASD</div>
            <ButtonForReadArticle/>
        </div>
    }

    return <div className={s.content}>
        <MicroscopicWorldCategoryArticle/>
        <MicroscopicWorldCategoryArticle/>
        <MicroscopicWorldCategoryArticle/>
        <MicroscopicWorldCategoryArticle/>
        <MicroscopicWorldCategoryArticle/>
        <MicroscopicWorldCategoryArticle/>
    </div>
}

export default MicroscopicWorldCategoryArticleList;