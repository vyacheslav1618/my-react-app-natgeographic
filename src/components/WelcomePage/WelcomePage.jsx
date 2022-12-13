import React from "react";
import s from "./WelcomePage.module.css"
import c from '../ContentAreaWrapper/content.module.css';
import {MainWallpaper} from "../StuffCollection/WallpapersAndPictures/MainWallpaper";
import {ContentAreaWrapper} from "../ContentAreaWrapper/ContentAreaWrapper";

export const WelcomePage = () => {
    return <div className={c.content}>
        <MainWallpaper/>
        <ContentAreaWrapper>
            <div className={s.greetingsText}>
                Welcome to the National Geographic website!
            </div>
            <div className={s.descriptionText}>
                You can choose the interested category on the sidebar.
            </div>
        </ContentAreaWrapper>
    </div>
}