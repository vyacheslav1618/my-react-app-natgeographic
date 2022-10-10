import React from "react";
import s from './Article.module.css';
import ButtonForReadArticle from "./LogoForReadArticle/ButtonForReadArticle";
import AnimalsPicture from "../../PicturesForArticles/AnimalsPicture";
import MicroscopicWorld from "../../PicturesForArticles/MicroscopicWorldPicture";
import InsectsPicture from "../../PicturesForArticles/InsectsPicture";
import ForestsPicture from "../../PicturesForArticles/ForestsPicture";
import OceansPicture from "../../PicturesForArticles/OceansPicture";
import SeasPicture from "../../PicturesForArticles/SeasPicture";

function getRandomIntInclusive() {
    const min = Math.ceil(0);
    const max = Math.floor(5);
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

        <div class='ArticleTitle'>{props.title}</div>
        <div className='ArticleImg'>
            <img src={props.image} alt="failure"/>
        </div>


        <ButtonForReadArticle/>
    </div>
}

export default Article;
