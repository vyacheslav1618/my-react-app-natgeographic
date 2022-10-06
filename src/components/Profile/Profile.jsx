import React from "react";
import s from './Profile.module.css';
import Article from "./ListOfArticles/Article";
import MainWallpaper from "./MainWallpaper/MainWallpaper";

const Profile = () => {
    return <div className={s.content}>
        <MainWallpaper/>
        <Article message='Scientists calculate a lions population'/>
        <Article message='Smelting Icebergs are dangerous!'/>
        <Article message='What did the vice president tell us about Earth?'/>
    </div>
}

export default Profile;
