import React from "react";
import s from "./WelcomePage.module.css"
import {MainWallpaper} from "../StuffCollection/WallpapersAndPictures/MainWallpaper";

export const WelcomePage = () => {
    return <div className={s.startContent}>
        <MainWallpaper/>
        <div className={s.greetingsText}>
            Welcome to the National Geographic website!
        </div>
        <div className={s.descriptionText}>
            You can choose the interested category on the sidebar.
        </div>
    </div>
}