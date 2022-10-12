import React from "react";
import s from './Profile.module.css';
import {articles} from "../../redux/data";
import {Article} from "./ListOfRandomArticlesAtMainPage/Article";
import {MainWallpaper} from "../StuffCollection/WallpapersAndPictures/MainWallpaper";

export const Profile = () => {
    const articleData = articles.slice(0, 3).map((value) => <Article title = {value.title} image = {value.image}/> )

    return <div className={s.content}>
        <MainWallpaper/>
        {articleData}
    </div>
}