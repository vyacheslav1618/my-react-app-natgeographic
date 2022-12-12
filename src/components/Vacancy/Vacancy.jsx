import React from "react";
import c from '../ContentAreaWrapper/content.module.css';
import s from './Vacancy.module.css';
import {MainWallpaper} from "../StuffCollection/WallpapersAndPictures/MainWallpaper";
import {ContentAreaWrapper} from "../ContentAreaWrapper/ContentAreaWrapper";

export const Vacancy = () => {
    return <div className={c.content}>
        <MainWallpaper/>
        <ContentAreaWrapper>
            <div className={s.descriptionText}>
                The available vacancies will be displayed here.
            </div>
        </ContentAreaWrapper>
    </div>
}
