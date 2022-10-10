import React from "react";
import s from './Profile.module.css';
import MainWallpaper from "./MainWallpaper/MainWallpaper";
import {articles} from "../../data";
import Article from "./ListOfArticles/Article";

const Profile = () => {
    const articleData = articles.slice(0, 3).map((value) => <Article title = {value.title} image = {value.image}/> )

    return <div className={s.content}>
        <MainWallpaper/>
        {articleData}
    </div>
}

export default Profile;
