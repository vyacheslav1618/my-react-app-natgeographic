import React from "react";
import c from '../ContentAreaWrapper/content.module.css';
import {articles} from "../../redux/data";
import {Article} from "./ListOfRandomArticlesAtMainPage/Article";
import {MainWallpaper} from "../StuffCollection/WallpapersAndPictures/MainWallpaper";
import {ContentAreaWrapper} from "../ContentAreaWrapper/ContentAreaWrapper";

const articleData = articles.slice(0, 3).map((value) => <Article title={value.title} image={value.image}/>)

export const Profile = () => {
    return <div className={c.content}>
        <MainWallpaper/>
        <ContentAreaWrapper>
            {articleData}
            {articleData}
            {articleData}
            {articleData}
        </ContentAreaWrapper>
    </div>
}