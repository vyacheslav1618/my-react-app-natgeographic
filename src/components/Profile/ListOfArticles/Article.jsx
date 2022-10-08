import React from "react";
import s from './Article.module.css';
import ButtonForReadArticle from "./LogoForReadArticle/ButtonForReadArticle";
import AnimalsPicture from "../../PicturesForArticles/AnimalsPicture";
import MicroscopicWorld from "../../PicturesForArticles/MicroscopicWorldPicture";
import InsectsPicture from "../../PicturesForArticles/InsectsPicture";
import ForestsPicture from "../../PicturesForArticles/ForestsPicture";
import OceansPicture from "../../PicturesForArticles/OceansPicture";
import SeasPicture from "../../PicturesForArticles/SeasPicture";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(0);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ArticlePicture = (props) => {
    return <div>
        {articlePictures.name}
    </div>
}
let articlePictures = [
    {id: "0", name: <AnimalsPicture/>},
    {id: "1", name: <MicroscopicWorld/>},
    {id: "2", name: <InsectsPicture/>},
    {id: "3", name: <ForestsPicture/>},
    {id: "4", name: <OceansPicture/>},
    {id: "5", name: <SeasPicture/>}
]
const Article = (props) => {



    return <div className={s.content}>
        <ArticlePicture id={getRandomIntInclusive}/>

        <div class='ArticleTitle'>Article Title Here</div>

        <ButtonForReadArticle/>
    </div>
}

export default Article;
