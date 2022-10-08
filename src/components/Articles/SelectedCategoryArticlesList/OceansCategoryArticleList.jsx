import React from "react";
import s from "./Profile/ListOfArticles/Article.module.css"
import AnimalsPicture from "../../PicturesForArticles/AnimalsPicture";
import ButtonForReadArticle from "../../Profile/ListOfArticles/LogoForReadArticle/ButtonForReadArticle";
import OceansPicture from "../../PicturesForArticles/OceansPicture";

const OceansCategoryArticleList = () => {

    const OceansCategoryArticle = () => {
        return <div>
            <OceansPicture/>
            <div className='ArticleTitle'>ASD</div>
            <ButtonForReadArticle/>
        </div>
    }

    return <div className={s.content}>
        <OceansCategoryArticle/>
        <OceansCategoryArticle/>
        <OceansCategoryArticle/>
        <OceansCategoryArticle/>
        <OceansCategoryArticle/>
        <OceansCategoryArticle/>
    </div>
}

export default OceansCategoryArticleList;